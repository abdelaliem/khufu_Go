import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./style.module.css"
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [firstName, setFirstName] = useState()
    const [secondName, setSecondName] = useState()
    const [phone, setPhone] = useState()
    const [data, setData] = useState()
    const navigate = useNavigate()
    const handleSignUp = async (e) => {
        e.preventDefault();
        const {data} = await axios.post("http://localhost:8000/user/signup", {
            "password":password,
            "email":email,
            "firstName":firstName,
            "secondName":secondName,
            "phone":phone,
            "lat": 0,
            "lang": 0
        })
        setData(data)
        console.log(data)
        if (data == "signUp done") {
            navigate("/login");
        }
    }
    useEffect(()=>{
        if (data == "signUp done") {
            navigate("/login");
        }
    },[])
    return (
        <div className={style.body}>
            <div className={style.container}>
                <a href="" className={style.logo}>KhufuGo</a>
                <div className={style.welcome}>
                    Signup to khufuGO
                </div>
                <hr style={{ marginBottom: "20px" }} />
                <form method="get" className={style.form}>
                    <div className={style.name}>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">first name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='first Name' onChange={(e) => {
                                setFirstName(e.target.value)
                            }} required />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">second name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='second Name' onChange={(e) => {
                                setSecondName(e.target.value)
                            }} required />
                        </div>
                    </div>
                    <div className={style.dataInput}>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Phone number' onChange={(e) => {
                            setPhone(e.target.value)
                        }} />
                                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Email' onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <hr style={{ marginTop: "20px" }} />
                    {data ? [<div role="alert">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        invalid inputs
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <ul>
                        {data.map((e)=>{
                            return (
                                <li>{e}</li>
                            );
                        })}
                        </ul>
                    </div>
                </div>]:
                ""}
                    <div className={style.buttons}>
                        <button className={style.button} onClick={handleSignUp}>SignUp</button>
                        <Link to="/login" className={style.login}>login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register