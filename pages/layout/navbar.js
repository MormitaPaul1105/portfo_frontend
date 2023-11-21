import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
const _Title = dynamic(() => import("../title")); 



export default function _NavBar() {
  

  const router = useRouter();
  const [userImage, setUserImage] = useState(null);

  

 
  
  
  const sendToViewProfile = function () {
    router.push({
      pathname: "/Police_dashboard/profileinput",
    });
  };



  const sendToLogout = function () {
    router.push({
      pathname: "/Police_dashboard/psignout",
    });
  };

 

  return (
    <>
    
    {/* <_Title title= "Wantedlist" /> */}
    
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
    <div class="sticky">
    
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sticky top-0 z-50">
    <a href="#" class="flex items-center">
        {/* <img src="bg-[url('/MP.jpg')] bg-cover bg-center min-h-screen" class="h-8 mr-3" alt="Flowbite Logo" /> */}
        <img src="/MP.jpg" class="  h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">Marmita Paul</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="http://localhost:8000/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
     
                <li>
                  <a  href= "/dashboard/about" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Me</a>
                </li>
                <li>
                  <a href= "/dashboard/certificate"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Certificates</a>
                </li>
                <li>
                  <a  href= "/dashboard/projects"class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Projects</a>
                </li>
                </ul>
           
            </div>
        </li>
       
        </ul>
        </div>
    </div>
  </div>
</nav>

</>
)
}