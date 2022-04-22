
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import axios from "axios";
import { serialize } from 'object-to-formdata';


const addressdata = {
    regions: [
      {
        name: "National Capital Region",
        provinces: [
          {
            name: "Metro Manila",
            cities: ["City of Manila", "Caloocan", "Las Piñas","Makati", "Parañaque"]
          }
        ]
      },
      {
        name: "Cordillera Administrative Region",
        provinces: [
          {
            name: "Abra",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
          },
          {
            name: "CAD",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschbornzz"]
          }
        ]
      },
      {
        name: "Cordillera Administrative Region",
        provinces: [
          {
            name: "Abra",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
          },
          {
            name: "CAD",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschbornzz"]
          }
        ]
      },
     
    ]
  };

  

const RegisterPage = () => {

    const [error, setError] = useState("");
	const navigate = useNavigate();

    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedProvince, setSelectedProvince] = useState();
    const [selectedCity, setSelectedCity] = useState();


    const availableProvince = addressdata.regions.find((c) => c.name === selectedRegion);
    const availableCities = availableProvince?.provinces?.find(
        (s) => s.name === selectedProvince
    );

    const [data, setData] = useState({
		firstname: "",
        middlename: "",
		lastname: "",
		email: "",
		password: "",
        birthday: new Date(),
        mobilenumber: "",
        streetaddress: "",
        region: "",
        province: "",
        city: "",


	});

    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);	
	};

    // const [addressInputs, setAddressInputs] = useState([
    //     {streetaddress: '', region: '', province: '', city: ''},
        
    //     ])

    const handleSubmit = async (e) => {
        e.preventDefault();




        const formdata = new FormData();

        // formdata.append('email', data.email);
        // formdata.append('password', data.password);
        // formdata.append('firstname', data.firstname);
        // formdata.append('middlename', data.middlename);
        // formdata.append('lastname', data.lastname);
        // formdata.append('photo', selectedFile);
        // formdata.append('mobilenumber', data.mobilenumber);
        // formdata.append('birthday', data.birthday);

        const submitdata = data;

        submitdata.photo = selectedFile;

        // submitdata.useraddresses = addressInputs;

        const formData = serialize(submitdata);

        // formdata.append('useraddresses.streetaddress', addressInputs[0].streetaddress);
        // formdata.append('useraddresses.region', addressInputs[0].region);
        // formdata.append('useraddresses.province', addressInputs[0].province);
        // formdata.append('useraddresses[.city', addressInputs[0].city);
        

        // for ( var key in addressInputs ) {
        //     formdata.append(key, addressInputs[key]);
        // }
        
        

        try {
			const url = "http://localhost:9000/register";
			// const { data: res } = await axios.post(url, data:formdata, );

            const res = await fetch(url, {method: "POST", body: formData})

            // const { data: res } = await axios.post(url, {
            //     email: data.email,
            //     password: data.password,
            //     firstname: data.firstname,
            //     middlename: data.middlename,
            //     lastname: data.lastname,
            //     photo: selectedFile,
            //     birthday: data.birthday,
            //     mobilenumber: data.mobilenumber,
            //     useraddresses: addressInputs

            // });
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
      };

    const handleDataChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    // const handleChangeInput = (index, event) => {
    //     const values = [...addressInputs]
    //     values[index][event.target.name] = event.target.value;
    //     setAddressInputs(values);

    //     console.log(index, event.target.value)
    // }

    //fix these
    // const handleAddFields = () => {
    //     setAddressInputs([...addressInputs], {streetaddress: '', region: '', province: '', city: ''})   
    // }

    // const handleRemoveFields = (index) => {
    //     const values = [...addressInputs]
    //     values.splice(index, 1)

    //     if (addressInputs.length > 1){
    //         setAddressInputs(values)
    //     }
    // }

    
  return (
    <div>
        <Navbar/>
        <div class="page-container bg-primarydark h-page">
            <div class="w-page px-32 py-16 ">
                <div class="flex">
                <img class="w-1/2 mb-80" src={process.env.PUBLIC_URL + '/register.svg'} />
                        <form onSubmit={handleSubmit} class="w-96 flex flex-col mb-20 ml-20">
                            <p class="text-4xl text-gray-50 mb-6">Registeration Form</p>
                            <div>
                                <label class="text-gray-50">Email </label>
                                <br/>
                                <input 
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="email" 
                                placeholder="Email Address"
                                name="email"
                                value={data.email}
                                onChange={handleDataChange}
                                required/>
                            </div>

                            <div>
                                <label class="text-gray-50">Password </label>
                                <br/>
                                <input
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="password" 
                                placeholder="Password"
                                name="password"
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                                value={data.password}
                                onChange={handleDataChange}
                                required/>
                            </div>
                            
                            <div>
                                <label class="text-gray-50">First Name </label>
                                <br/>
                                <input
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="text" 
                                placeholder="First Name"
                                name="firstname"
                                value={data.firstname}
                                onChange={handleDataChange}
                                required/>
                            </div>

                            <div>
                                <label class="text-gray-50">Middle Name </label>
                                <br/>
                                <input 
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="text" 
                                placeholder="Middle Name"
                                name="middlename"
                                value={data.middlename}
                                onChange={handleDataChange}
                                />
                            </div>

                            <div>
                                <label class="text-gray-50">Last Name </label>
                                <br/>
                                <input 
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="text" 
                                placeholder="Last Name"
                                name="lastname"
                                value={data.lastname}
                                onChange={handleDataChange}
                                required/>
                            </div>

                            

                            <div>
                                <label class="text-gray-50">Birthday </label>
                                <br/>
                                <input 
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="date" 
                                name="birthday"
                                value={data.birthday}
                                onChange={handleDataChange}
                                required/>
                            </div>

                            <div>
                                <label class="text-gray-50">Mobile Number </label>
                                <br/>
                                <input 
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="number" 
                                placeholder="Mobile Number"
                                name="mobilenumber"
                                value={data.mobilenumber}
                                onChange={handleDataChange}
                                required/>
                            </div>

                            <div>
                                <label class="text-gray-50">Photo</label>
                                <br/>
                                <input 
                                class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                type="file" 
                                accept="image/png, image/jpeg"
                                name="photo"
                                id="photo"
                                value={data.photo}
                                onChange={changeHandler}
                                required/>
                            </div>

                        


                            <label class="text-gray-50" >Address </label>
                            
                            <label class="text-gray-50" >Street Address </label>
                                        <br/>
                                        <input 
                                        class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                        type="text" 
                                        name="streetaddress" 
                                        placeholder="Street Address"
                                        value={data.streetaddress} 
                                        onChange={handleDataChange}
                                        required/>
                                        <div>
                                            <label class="text-gray-50">Region</label>
                                            <br/>
                                            <select
                                            class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                            placeholder="Region"
                                            name="region"
                                            value={data.region}
                                            onChange={(e) => {setSelectedRegion(e.target.value); handleDataChange(e)}}
                                            required>
                                            <option>--Choose Region--</option>
                                            {addressdata.regions.map((value, key) => {
                                                return (
                                                <option value={value.name} key={key}>
                                                    {value.name}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-50">Province</label>
                                            <br/>
                                            <select
                                            class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                            placeholder="Province"
                                            name="province"
                                            value={data.province}
                                            onChange={(e) => {setSelectedProvince(e.target.value); handleDataChange(e)}}
                                            required>
                                            <option>--Choose Province--</option>
                                            {availableProvince?.provinces.map((e, key) => {
                                                return (
                                                <option value={e.name} key={key}>
                                                    {e.name}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-50">City</label>
                                            <br/>
                                            <select
                                            class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                            placeholder="City"
                                            name="city"
                                            value={data.city}
                                            onChange={(e) => {setSelectedCity(e.target.value);handleDataChange(e)}}
                                            required>
                                                <option>--Choose City--</option>
                                            {availableCities?.cities.map((e, key) => {
                                                return (
                                                <option value={e.name} key={key}>
                                                    {e}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>

                            {/* {addressInputs.map((value, index) => {
                                    return (
                                    <div key={index}>

                                        <label class="text-gray-50" >Street Address </label>
                                        <br/>
                                        <input 
                                        class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                        type="text" 
                                        name="streetaddress" 
                                        placeholder="Street Address"
                                        value={addressInputs.streetaddress} 
                                        onChange={(e) => { handleChangeInput(index, e)}}
                                        required/>
                                        <div>
                                            <label class="text-gray-50">Region</label>
                                            <br/>
                                            <select
                                            class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                            placeholder="Region"
                                            name="region"
                                            value={addressInputs.region}
                                            onChange={(e) => {setSelectedRegion(e.target.value); handleChangeInput(index, e)}}
                                            required>
                                            <option>--Choose Region--</option>
                                            {addressdata.regions.map((value, key) => {
                                                return (
                                                <option value={value.name} key={key}>
                                                    {value.name}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-50">Province</label>
                                            <br/>
                                            <select
                                            class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                            placeholder="Province"
                                            name="province"
                                            value={addressInputs.province}
                                            onChange={(e) => {setSelectedProvince(e.target.value); handleChangeInput(index, e)}}
                                            required>
                                            <option>--Choose Province--</option>
                                            {availableProvince?.provinces.map((e, key) => {
                                                return (
                                                <option value={e.name} key={key}>
                                                    {e.name}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="text-gray-50">City</label>
                                            <br/>
                                            <select
                                            class="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-3"
                                            placeholder="City"
                                            name="city"
                                            value={addressInputs.city}
                                            onChange={(e) => {setSelectedCity(e.target.value); handleChangeInput(index, e)}}
                                            required>
                                                <option>--Choose City--</option>
                                            {availableCities?.cities.map((e, key) => {
                                                return (
                                                <option value={e.name} key={key}>
                                                    {e}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>

                                        <button type="button" onClick={handleAddFields}>Add</button>
                                        <button type="button" onClick={handleRemoveFields}>Remove</button>
                                        
                                    </div>
                                    );
                            })}
                 */}
                        <button type="submit" class="text-gray-50 px-4 py-2 text-xl bg-primarylight rounded-md hover:bg-blue-500 mt-4">Register</button>    
                        </form>

                </div>

            </div>
        </div>

    </div>
  )
}

export default RegisterPage

