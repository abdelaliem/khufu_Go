const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
const DriverMdoel = require('../models/DriverModel')
const jwt = require("jsonwebtoken");
const createToken = (id , type) => {
    return jwt.sign({ id ,type }, "sultan is develober", {
        expiresIn: 3 * 24 * 60 * 60,
    });
};
module.exports = {
    sginUp: async (req, res) => {
        // validation
        const { password, email, firstName, secondName, phone , lat , lang } = req.body;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/g;
        const phonePattern = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const name = /^[a-zA-Z]{3,10}$/
        const validationErrors = [];

        if (!phonePattern.test(phone)) {
            validationErrors.push("Invalid phone number!");
        }

        if (!emailPattern.test(email)) {
            validationErrors.push("Invalid email!");
        }

        if (!passwordPattern.test(password)) {
            validationErrors.push(
                "The password must be 8 to 16 characters long and contain a number and at least one letter"
            );
        }

        if (!firstName || !secondName || !name.test(firstName) || !name.test(secondName)) {
            validationErrors.push("invalid first or second name");
        }

        if (validationErrors.length > 0) {
            // If there are validation errors, send a response with all error messages
            res.send(validationErrors);
            return;
        }
        //hashthePassword
        // gen salt generate version of hashing
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        try {
            await UserModel.create({
                password: hashedPassword,
                firstName,
                secondName,
                phone,
                email,
                lat,
                lang
            });
            res.send("signUp done");
        } catch (error) {
            const err = error.sqlMessage.replace("Duplicate entry '", "used before '")
            const err2 = err.replace("for key '",'as ')
            res.send([err2]);
        }
    },
    login: async (req, res) => {
        if (req.params.type == "user") {
            const { email, password } = req.body;
            const user = await UserModel.where("email", email).first();
            if (user == null) {
                res.send("email is wrong");
            } else {
                const auth = await bcrypt.compare(password, user.password);
                if (!auth) {
                    res.send("password is wrong");
                } else {
                    const token = createToken(user.id ,req.params.type);
                    res.send({ token });
                }
            }
        }else if(req.params.type == "driver"){
            const { code } = req.body;
            const user = await DriverMdoel.where("code", code).first();
            if (user == null) {
                res.send("code is wrong");
            } else {
                const token = createToken(user.id ,req.params.type);
                res.send({ token });
            }
        }

    },
    userInfo: (req, res) => {
        jwt.verify(
            req.params.token,
            "sultan is develober",
            async (err, decodedToken) => {
                if (err) {
                    res.send(err.message);
                } else {
                    if (decodedToken["type"]=="user") {
                        const data = await UserModel.findById(decodedToken["id"]);
                        res.send({...data,type:decodedToken["type"]});
                    }
                    else if(decodedToken["type"]=="driver"){
                        const data = await DriverMdoel.findById(decodedToken["id"]);
                        res.send({...data,type:decodedToken["type"]});
                    }
                }
            }
        );
    },
    updateLatLang:(req,res)=>{
        const lat = req.body.lat
        const lang = req.body.lang
        jwt.verify(
            req.params.token,
            "sultan is develober",
            async (err, decodedToken) => {
                if (err) {
                    res.send(err.message);
                } else {
                    const data = await UserModel.update(decodedToken["id"],{
                        lat,
                        lang
                    });
                    res.send(data);
                }
            }
        );
    }
};
