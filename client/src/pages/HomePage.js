import React from 'react'
import Navbar from './components/Navbar'
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div class="page-container bg-primarydark">

          <div class="w-page flex items-center">
          <img class="homepage-image"  src={process.env.PUBLIC_URL + '/homeblockchain.png'} />
          <div class="flex flex-col w-96 ml-10 h-3/4" >
              <p class="text-4xl text-gray-50 font-semibold mb-4">Be part of the decision</p>
              <p class="text-6xl text-primarylight font-bold mb-8 italic">Vote Today</p>
              <button class="text-gray-50 px-3 py-1 text-xl bg-primarylight rounded-md hover:bg-blue-500 w-2/3" onClick={()=>{navigate('/register')}}>Register Now</button>
          </div>
          </div>

        </div>

        <div class="page-container bg-gray-50">
          <div class="w-page px-32 py-24 h-96">
            <p class="text-5xl text-gray-900 font-bold mb-12">Features</p>
            <div class="flex justify-between">
              <div class="flex flex-col justify-center">
                <div class="flex items-center mb-10">
                    <img class="w-16 mr-8"  src={process.env.PUBLIC_URL + '/h1-1.png'} />
                    <p class=" text-2xl text-gray-900 font-semibold">Secured by 256 bit encryption</p>
                </div>
                <div class="flex items-center mb-10">
                    <img class="w-16 mr-8"  src={process.env.PUBLIC_URL + '/h1-2.png'} />
                    <p class=" text-2xl text-gray-900 font-semibold">Backed by Ethereum based technology</p>
                </div>
                <div class="flex items-center mb-10">
                    <img class="w-16 mr-8"  src={process.env.PUBLIC_URL + '/h1-3.png'} />
                    <p class=" text-2xl text-gray-900 font-semibold">Verified Transactions</p>
                </div>
                <div class="flex items-center mb-10">
                    <img class="w-16 mr-8"  src={process.env.PUBLIC_URL + '/h1-4.png'} />
                    <p class=" text-2xl text-gray-900 font-semibold">Easy to use</p>
                </div>
                <div class="flex items-center mb-10">
                    <img class="w-16 mr-8"  src={process.env.PUBLIC_URL + '/h1-5.png'} />
                    <p class=" text-2xl text-gray-900 font-semibold">Cheaper than traditional voting systems</p>
                </div>
                <div class="flex items-center mb-10">
                    <img class="w-16 mr-8"  src={process.env.PUBLIC_URL + '/h1-6.png'} />
                    <p class=" text-2xl text-gray-900 font-semibold">Faster voting process</p>
                </div>

              </div>
              <img  class="h-96"src={process.env.PUBLIC_URL + '/features.svg'} />

            </div>
            

          </div>
        </div>
        <div class="page-container bg-primarydark">
         <div class="w-page px-32 py-24 h-96">
            <p class="text-5xl text-gray-50 font-bold mb-12">About</p>
            <div class="flex">
              <div class="w-7/12">
                <p class="text-2xl text-gray-50 font-semibold mb-12">An online voting system that will replace the old ballot system or paper system. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure, veniam, natus totam minima ex rerum expedita non nam unde numquam fugiat vero quod, sapiente ea accusantium id officia doloribus!</p>
                
              </div>
              <img  class="h-72"src={process.env.PUBLIC_URL + '/about.svg'} />
            </div>

         </div>

        </div>
        <div class="page-container bg-gray-50">
          <div class="w-page px-32 py-24 h-96">
            <p class="text-5xl text-gray-900 font-bold mb-12">Follow these easy steps</p>
            <div class="flex justify-between">
              <div class="flex flex-col justify-center">
                <div class="flex items-center mb-10">
                    <img class="w-20 mr-8"  src={process.env.PUBLIC_URL + '/h2-1.png'} />
                    <p class=" text-3xl text-gray-900 font-semibold">Register yourself by filling the required information</p>
                </div>

                <div class="flex items-center mb-10">
                    <img class="w-20 mr-8"  src={process.env.PUBLIC_URL + '/h2-2.png'} />
                    <p class=" text-3xl text-gray-900 font-semibold">Login with your newly created account</p>
                </div>

                <div class="flex items-center mb-10">
                    <img class="w-20 mr-8"  src={process.env.PUBLIC_URL + '/h2-3.png'} />
                    <p class=" text-3xl text-gray-900 font-semibold">Go to vote option on dashboard</p>
                </div>

                <div class="flex items-center mb-10">
                    <img class="w-20 mr-8"  src={process.env.PUBLIC_URL + '/h2-4.png'} />
                    <p class=" text-3xl text-gray-900 font-semibold">Provide your security key</p>
                </div>

                <div class="flex items-center mb-10">
                    <img class="w-20 mr-8"  src={process.env.PUBLIC_URL + '/h2-5.png'} />
                    <p class=" text-3xl text-gray-900 font-semibold">Vote your desired candidate and submit</p>
                </div>
                

              </div>
              

            </div>
            

          </div>
          
        </div>
        <div class="page-container bg-primarydark">
         <div class="w-page px-32 py-16 ">
            <div class="flex items-center justify-between">
              <div>
                <div class="flex items-center">
                <p class="text-3xl text-gray-50 mb-8 mr-5">Blockvote</p>
                <img class="w-12 mb-8"  src={process.env.PUBLIC_URL + '/blockvote.png'} />
                </div>
                
                <p class="text-l text-gray-50">Copyright @2022</p>
              </div>

              <div>
                <p class="text-xl text-gray-50 mb-3">Home</p>
                <p class="text-xl text-gray-50 mb-3">About</p>
                <p class="text-xl text-gray-50">Contact</p>
              </div>

              <div class="flex w-80 items-center justify-around"> 
              <img class="w-10 "  src={process.env.PUBLIC_URL + '/f-1.png'} />
              <img class="w-10 "  src={process.env.PUBLIC_URL + '/f-2.png'} />
              <img class="w-10 "  src={process.env.PUBLIC_URL + '/f-3.png'} />
              <img class="w-10 "  src={process.env.PUBLIC_URL + '/f-4.png'} />
              </div>
            </div>

         </div>
         </div>
        
    </div>
  )
}

export default HomePage