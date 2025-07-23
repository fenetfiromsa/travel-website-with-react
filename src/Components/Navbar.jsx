
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0">
            <a href="#">
              <img src="/images/Logo.png" alt="Logo" className="w-[115px] h-[34px] ml-10" />
            </a>
          </div>
         
          
          <div className="hidden md:flex space-x-4 ml-10px items-center gap-7">
            <a href="#" className="text-gray-700 hover:text-blue-500 font-semibold ml-36">Destinations</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 font-medium ml-10">Hotels</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 font-medium ml-10">Flights</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 font-medium ml-10 mr-10">Bookings</a>
           <Link to="/Login"><a href="" className="text-gray-700 hover:text-blue-500 font-medium ml-28">Login</a></Link> 
            <button className="text-gray-700 hover:text-blue-500 font-medium ml-10 px-2 border-2 border-gray-600 rounded hover:bg-blue-600 transition duration-300">Sign up</button>
            <button className="text-gray-700 hover:text-blue-900 mx-10 mr-10 font-medium">EN</button>
          </div>

          
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
