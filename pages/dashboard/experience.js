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

export default function Experience() {
  const router = useRouter();
const edu= function () {
  router.push({
    pathname: "/dashboard/education",
  });
};
const skill= function () {
  router.push({
    pathname: "/dashboard/skill",
  });
};
const about= function () {
    router.push({
      pathname: "/dashboard/about",
    });
  };
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
        <_Title title="This is Marmita Paul's Website" />
        
        {/* <section className="min-h-screen"> */}
       
          {/* Show background image for screens with width > 600px (laptop/desktop) */}
          <div className="min-h-screen hidden md:block md:min-h-[900px] bg-cover bg-center   " style={{ backgroundImage: "url('/Homebackground.png')" }}>
            <br></br>
     
            <button onClick={downloadResume} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50">Download Resume</button>
          
            
            <div class="flex flex-col items-center justify-center px-6 py-0 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
            {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
            <br></br><br></br><br></br>
           About 
        </a>
        
        
            <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           
            <button  onClick={edu} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Education Background
</span>
</button>
<button onClick={skill}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
My Skills
</span>
</button>
<button onClick={about}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
About Me
</span>
</button>

<div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
</div><div class="p-6 space-y-4 md:space-y-6 sm:p-8">

              <center>
                <h1 class="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                   My Work Experience
                </h1>
                </center>
                <Image
        src="/about.jpg"
        alt="Picture of the Devolopers who develops this site"
        width={900}
        height={200}
        />
        <span class="mb-3 text-[16px]  font-calibri-bold text-gray-700 dark:text-gray-400"> GAOTec Inc.<br></br></span>
        
       
        <span class="mb-3 text-[11px]  font-calibri text-gray-700 dark:text-gray-400">

Interning at GAOTec Inc. as a Web Development Intern joined September 17, 2023. Responsible for creating, updating and managing various webpage designs. Acquired proficiency in WordPress during the internship.


</span>

          </div> </div>
          </div>

          <br></br><br></br><br></br><br></br><br></br><br></br>
          </div>

          {/* Show background image for screens with width <= 600px (mobile) */}
          <div className="min-h-screen md:hidden  md:min-h-[900px] bg-cover bg-center   " style={{ backgroundImage: "url('/mobileHomebackground.png')" }}>
          <br />
           
        
            
         
     
     <button onClick={downloadResume} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50">Download Resume</button>
   
     <div class="flex flex-col items-center justify-center px-6 py-6 mt-4 mx-auto md:h-screen lg:py-0">
    <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
     {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
     
     About  
 </a>
 
 
     <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    
     <button onClick={edu}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Education
</span>
</button>
<button onClick={skill} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Skills
</span>
</button>
<button onClick={about}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
About Me
</span>
</button>

<div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
</div><div class="p-6 space-y-4 md:space-y-6 sm:p-8">

       <center>
         <h1 class="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
            My Work Experience
         </h1>
         </center>
         <Image
 src="/about.jpg"
 alt="Picture of the Devolopers who develops this site"
 width={900}
 height={500}
 />
 <span class="mb-3 text-[16px]  font-calibri-bold text-gray-700 dark:text-gray-400"> GAOTec Inc.<br></br></span>
        
       
        <span class="mb-3 text-[11px]  font-calibri text-gray-700 dark:text-gray-400">

Interning at GAOTec Inc. as a Web Development Intern joined September 17, 2023. Responsible for creating, updating and managing various webpage designs. Acquired proficiency in WordPress during the internship.


</span>
   </div> </div>
   </div>

   
   </div>

     
        {/* </section> */}
      </Layout>
    </>
  );
};

