import React, { useState, useEffect} from "react";
import Navbar from './components/Navbar'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {

  const [profileData,setProfiledata] = useState([{}]);
  const [loaded, setloaded] = useState(false)

  const navigate = useNavigate();

    useEffect(()=>{
        
        const token = localStorage.getItem("token");
        const emailtoken = localStorage.getItem("emailtoken");

        axios.get("http://localhost:9000/profile", {
            params: { emailtoken }
        }).then((respone) => {
          setProfiledata(respone.data)
          setloaded(true)
        });
        console.log(token, emailtoken);
        if (token == null) {
            navigate("/")
        }
        
        
      }, [])


  return (
    <div>
      <Navbar/>
      <div class="page-container bg-primarydark h-page">
        <div class="w-page px-32 mb-40 pt-16">
            <div class="flex items-start">
            <div>
              <img class="circle h-80"src={process.env.PUBLIC_URL + '/images/' + profileData[0].photo} />
              
            </div>
            <div class="ml-32" >
              <p class="text-5xl text-gray-50 mb-6">Profile</p>
              <p class="text-xl text-primarylight">Email:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2"> {profileData[0].email}</p>
              <p class="text-xl text-primarylight">First Name:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].firstname}</p>
              <p class="text-xl text-primarylight">Middle Name:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].middlename}</p>
              <p class="text-xl text-primarylight">Last Name:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].lastname}</p>
              <p class="text-xl text-primarylight">Mobile Number:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2"> 0{profileData[0].mobilenumber}</p>
              <p class="text-xl text-primarylight">Birthday:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].birthday}</p>
              <p class="text-xl text-primarylight">Address </p>
              <p class="text-xl text-primarylight">Street Address:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].streetaddress}</p>
              <p class="text-xl text-primarylight">Region:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].region}</p>  
              <p class="text-xl text-primarylight">Province:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].province}</p>
              <p class="text-xl text-primarylight">City:</p>
              <p class="text-2xl text-gray-50 font-semibold mb-2">{profileData[0].city}</p>

              {/* {loaded && profileData[0].useraddresses.map((e, key) => {
                  return (
                    
                    <div >
                        <p class="text-xl text-primarylight">Address {key+1}</p>
                        <p class="text-xl text-primarylight">Street Address:</p>
                        <p class="text-2xl text-gray-50 font-semibold mb-2">{e.streetaddress}</p>
                        <p class="text-xl text-primarylight">Region:</p>
                        <p class="text-2xl text-gray-50 font-semibold mb-2">{e.region}</p>  
                        <p class="text-xl text-primarylight">Province:</p>
                        <p class="text-2xl text-gray-50 font-semibold mb-2">{e.province}</p>
                        <p class="text-xl text-primarylight">City:</p>
                        <p class="text-2xl text-gray-50 font-semibold mb-2">{e.city}</p>
                    </div>
                  );
                })} */}

              
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default ProfilePage