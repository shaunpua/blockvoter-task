import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import axios from "axios";

const LoginPage = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            navigate("/")
        }
        
        
      }, [])

    const [data, setData] = useState({ email: "", password: "" });

    const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
			const url = "http://localhost:9000/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            localStorage.setItem("emailtoken", data.email);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }
  return (
    <div>
        <Navbar/>
        <div class="page-container bg-primarydark h-page">
            <div class="w-page px-32 ">

            <div class="flex items-center justify-start  ">
                <img class="w-96 mb-32"  src={process.env.PUBLIC_URL + '/login.svg'} />
                <form onSubmit={handleSubmit}  class="w-80 flex flex-col mb-48 ml-40">
                    <p class="text-4xl text-gray-50 mb-6">Login </p>
                    <label class="text-gray-50">Email </label>
                    <br/>
                    <input
                    class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                    />
                    <br/>
                    <label class="text-gray-50">Password </label>
                    <br/>
                    <input
                    class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required			
                    />
                    <button button type="submit" class="text-gray-50 px-4 py-2 text-xl bg-primarylight rounded-md hover:bg-blue-500 mt-9">Log in</button>
                </form>
            </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default LoginPage