import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./style.module.css"
import { Link, useNavigate } from 'react-router-dom'

function LoginComponent() {
    const navigate = useNavigate()
    const [xs, setXs] = useState()
    const isExpired = async () => {
        const { data } = await axios.get(`http://localhost:8000/user/userinfo/${localStorage.getItem("xs")}`)
        setXs(data)
        if (data != "jwt expired" && localStorage.getItem("xs") != undefined  ) {
            navigate("/");
        }
    }
    useEffect(() => {
        isExpired()
    })
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [data, setData] = useState()
    const handleLogin = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("http://localhost:8000/user/login", {
            "password": password,
            "email": email,
        })
        console.log(data)
        setData(data)
        if (data != "email is wrong" && data != "password is wrong") {
            localStorage.setItem("xs", data.token)
            navigate("/");
            window.location.reload()
        }
    }
    return (
        <div className={style.body}>
            <div className={style.container}>
                <a href="" className={style.logo}>KhufuGo</a>
                <form method="get" className={style.form}>
                    <div className={style.dataInput}>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Email' onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <div className={style.logbuttons}>
                        <button className={style.button} onClick={handleLogin}>Login</button>
                        <Link to="/login" className={style.login}>SignUp</Link>
                    </div>
                </form>
                {data == "email is wrong" || data== "password is wrong" ? [<div role="alert">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        invalid inputs
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <ul>


                                <li>{data}</li>

                        </ul>
                    </div>
                </div>]:
                ""}
            </div>
        </div>
    );
}

export default LoginComponent;
