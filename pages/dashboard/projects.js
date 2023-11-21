import dynamic from "next/dynamic";
// Dynamic Imports

import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Image from 'next/image';
const Layout = dynamic(() =>
  import("../layout/mlayout")
);


const _Title = dynamic(() => import("../title"));

//const inter = Inter({ subsets: ['latin'] })
//import styles from './style/homepage.css'; // Import the CSS file
//import styles from'../styles/globals.css';

export default function Projects() {

    const downloadResume = () => {
        // Add logic for downloading the resume
        // For simplicity, we'll just simulate a download link
        const link = document.createElement('a');
        link.href = '/Marmita Paul.pdf'; // Replace with the actual path to your resume file
        link.download = 'Marmita Paul.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
      

  return (
    <>
    <Layout>
      {/* Header and other layout components go here */}
      <_Title title="This is Marmita Paul's Website" />
  
      {/* Main content */}
      <div className="min-h-screen hidden md:block md:min-h-[2626px] bg-cover bg-center   " style={{ backgroundImage: "url('/2727Cback.png')" }}>
        {/* Button */}<br></br>
        <button
         onClick={downloadResume}
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50"
        >
          Download Resume
        </button>
   
    <div class="flex flex-col items-center justify-center px-2 py-6 mt-0 mx-automd:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
            {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
          
           My Projects
        </a>
    <br></br> <br></br>
    <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
  {/* ////////// */}
        <div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/PDashboard.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crime Management Reporting System</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here implemented NestJS, Next.js, RESTful API, Pipes, Relationship management, Authentication and Authorization, Exception handling, Mailer functionality, AXIOS for HTTP requests and integrated Tailwind CSS.</p>
        <a href="https://github.com/Rayied991/Crime-Management-Reporting-System" class="group inline-flex items-center text-black bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
<br></br><br></br>
<a href="https://github.com/MormitaPaul1105/CRMS-AWT-Project" class="group inline-flex items-center text-black bg-gradient-to-r from-blue-400 via-lime-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get only police part
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>

<br></br>



<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/Voyager.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Voyager Tourist Management System
 </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It developed by using PHP, JavaScript, CSS, HTML, AJAX, jQuery and MySQL. </p>
        <a href="https://github.com/MormitaPaul1105/Voyager-Tourist-Management-System" class="group inline-flex items-center text-black bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get only customer part
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>

    </div></div>
{/* //////////////// */}

<br></br>

<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/Paradise.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Employee Management System</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> It's desktop bese software project which built with C# and MySQL.</p>
        
<a href="https://github.com/MormitaPaul1105/Employee-Management-System" class="group inline-flex items-center text-black bg-gradient-to-r from-blue-400 via-lime-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>


{/* //////////////// */}

<br></br>

<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/Village.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Natural Beauty Of Village</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Here using C++ OpenGL to create a graphical view of a village scene. User can control moving objects and three type seasons by using different button. </p>
        
        <a href="https://github.com/MormitaPaul1105/Natural-Beauty-of-Nature-Graphics-Project-" class="group inline-flex items-center text-black bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>

{/* //////////////// */}

<br></br>

<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="#" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">University Management System</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> It developed by using fundamental Java. It's a console application which built on Object-Oriented Programming-1 principles.</p>
      
<a href="https://github.com/MormitaPaul1105/University-Management-Project" class="group inline-flex items-center text-black bg-gradient-to-r from-blue-400 via-lime-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>
<br></br>

{/* //////////////// */}


</div></div></div></div>

          
          {/* </div> */}

         {/* Main content */}
      <div className="min-h-screen md:hidden  md:min-h-[1826px] bg-cover bg-center   " style={{ backgroundImage: "url('/Cbackm.png')" }}>
        {/* Button */}<br></br>
        <button
          onClick={downloadResume}
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50"
        >
          Download Resume
        </button>
   
    <div class="flex flex-col items-center justify-center px-4 py-8 mt-0 mx-automd:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
            {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
          
           My Projects
        </a>
    <br></br> <br></br>
    <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
  {/* ////////// */}
        <div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/PDashboard.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crime Management Reporting System</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here implemented NestJS, Next.js, RESTful API, Pipes, Relationship management, Authentication and Authorization, Exception handling, Mailer functionality, AXIOS for HTTP requests and integrated Tailwind CSS.</p>
        <a href="https://github.com/Rayied991/Crime-Management-Reporting-System" class="group inline-flex items-center text-black bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
<br></br><br></br>
<a href="https://github.com/MormitaPaul1105/CRMS-AWT-Project" class="group inline-flex items-center text-black bg-gradient-to-r from-blue-400 via-lime-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get only police part
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>

<br></br>



<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/Voyager.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Voyager Tourist Management System
 </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It developed by using PHP, JavaScript, CSS, HTML, AJAX, jQuery and MySQL. </p>
        <a href="https://github.com/MormitaPaul1105/Voyager-Tourist-Management-System" class="group inline-flex items-center text-black bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get only customer part
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>

    </div></div>
{/* //////////////// */}

<br></br>

<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/Paradise.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Employee Management System</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> It's desktop bese software project which built with C# and MySQL.</p>
        
<a href="https://github.com/MormitaPaul1105/Employee-Management-System" class="group inline-flex items-center text-black bg-gradient-to-r from-blue-400 via-lime-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>


{/* //////////////// */}

<br></br>

<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="/Village.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Natural Beauty Of Village</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Here using C++ OpenGL to create a graphical view of a village scene. User can control moving objects and three type seasons by using different button. </p>
        
        <a href="https://github.com/MormitaPaul1105/Natural-Beauty-of-Nature-Graphics-Project-" class="group inline-flex items-center text-black bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>

{/* //////////////// */}

<br></br>

<div class="max-w-sm bg-pink-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:border-gray-700 ml-0">
    <a href="#">
        <img class="rounded-t-lg" src="#" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">University Management System</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> It developed by using fundamental Java. It's a console application which built on Object-Oriented Programming-1 principles.</p>
      
<a href="https://github.com/MormitaPaul1105/University-Management-Project" class="group inline-flex items-center text-black bg-gradient-to-r from-blue-400 via-lime-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
    Get full project
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    
</a>
    </div>
</div>
<br></br>

{/* //////////////// */}


</div></div></div></div>
         
     

     
        {/* </section> */}
        </Layout>
    </>
  );
};

