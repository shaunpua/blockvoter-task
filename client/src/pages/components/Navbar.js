import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Navbar = () => {

    const [authenticated, setAuthenticated] = useState(false)
    const [profileData,setProfiledata] = useState([{}]);
    const [loaded, setloaded] = useState(false)

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        const emailtoken = localStorage.getItem("emailtoken");
        console.log(token);
        if (token !== null) {
            setAuthenticated(true)
            axios.get("http://localhost:9000/profile", {
            params: { emailtoken }
            }).then((respone) => {
            setProfiledata(respone.data)
            setloaded(true)
            });

        }
        
        
      }, [])

    const handleLogout = () => {
		localStorage.removeItem("token");
        localStorage.removeItem("emailtoken");
		window.location.reload();
	};


  return (
    <div div class="h-20 flex items-center justify-between bg-primarydark">
        <div class="flex items-center">
        <p class="text-3xl text-gray-50 ml-16 hover:cursor-pointer" onClick={()=>{navigate('/')}}>Blockvote</p>
        <img class="w-12 ml-5"  src={process.env.PUBLIC_URL + '/blockvote.png'} />
        </div>
        
        <div class="mr-16 flex items-center justify-around w-96">
        <p class="text-gray-50 text-xl">About</p>
        <p  class="text-gray-50 text-xl">Contact</p>
        
        {authenticated && <button  class="text-gray-50 px-3 py-1 text-xl bg-primarylight rounded-md hover:bg-blue-500" onClick={handleLogout}>Logout</button>}
        {loaded && <img onClick={()=>{navigate('/profile')}} class ="circle w-12 hover:cursor-pointer border-gray-50 border-2" src={process.env.PUBLIC_URL + '/images/' + profileData[0].photo} /> }
        
        {authenticated || <button  class="text-gray-50 px-3 py-1 text-xl bg-primarylight rounded-md hover:bg-blue-500"onClick={()=>{navigate('/login')}}>Login</button>}
        {authenticated || <button class="text-gray-50 px-3 py-1 text-xl bg-primarylight rounded-md hover:bg-blue-500" onClick={()=>{navigate('/register')}}>Register</button>}
        </div>
        
        

    </div>
  )
}

export default Navbar