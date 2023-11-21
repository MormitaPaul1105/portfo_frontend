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
export default function Education() {
    const router = useRouter();

const about= function () {
  router.push({
    pathname: "/dashboard/about",
  });
};
const skill= function () {
  router.push({
    pathname: "/dashboard/skill",
  });
};
const expe= function () {
  router.push({
    pathname: "/dashboard/experience",
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
          <div className="min-h-screen hidden md:block md:min-h-[800px] bg-cover bg-center   " style={{ backgroundImage: "url('/Homebackground.png')" }}>
            <br></br>
     
            <button onClick={downloadResume} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50">Download Resume</button>
          
            
            <div class="flex flex-col items-center justify-center px-6 py-4 mt-6 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
            {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
            <br></br><br></br><br></br>
            About
        </a>
        
        
            <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           
            <button  onClick={about} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-10 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
About Me
</span>
</button>
<button onClick={skill}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-8 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
My Skills
</span>
</button>
<button onClick={expe} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
My Experience
</span>
</button>

<div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
</div><div class="p-6 space-y-4 md:space-y-6 sm:p-8">

              <center>
                <h1 class="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                My Education Background
                </h1>
                </center>
                <Image
        src="/about.jpg"
        alt="Picture of the Devolopers who develops this site"
        width={900}
        height={200}
        />
        <span class="mb-3 text-[10px]  font-calibri text-gray-700 dark:text-gray-400">
        Bachelor of Science in Computer Science
and Engineering(CSE)  <br></br>
American International University - Bangladesh<br></br>
[24/11/2019 - Present]  Current CGPA:3.79/4.00<br></br><br></br>

Higher Secondary Certificate (H.S.C)   <br></br>
Milestone College, Dhaka   <br></br>
[1/7/2017 - 17/7/2019] <br></br> <br></br>

Secondary School Certificate (S.S.C)<br></br>
Laxmipur Govt. Girls High School<br></br>
[1/1/2012 - 4/5/2017] </span>    

          </div> </div>
          </div>

          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br>
          </div>

          {/* Show background image for screens with width <= 600px (mobile) */}
          <div className="min-h-screen md:hidden  md:min-h-[800px] bg-cover bg-center   " style={{ backgroundImage: "url('/mobileHomebackground.png')" }}>
          
          <br />
           
        
            
          
     
     <button onClick={downloadResume} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50">Download Resume</button>
   
     
     <div class="flex flex-col items-center justify-center px-6 py-4 mt-10 mx-auto md:h-screen lg:py-0">
 <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-black-00 text-white">
     {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}

     About
 </a>
 
 
     <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    
     <button  onClick={about} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-2 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
About Me
</span>
</button>
<button onClick={skill}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
My Skills
</span>
</button>
<button onClick={expe} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-2 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
My Experience
</span>
</button>


<div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
</div><div class="p-6 space-y-4 md:space-y-6 sm:p-8">

       <center>
         <h2 class="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
         My Education Background
         </h2>
         </center>
         <Image
 src="/about.jpg"
 alt="Picture of the Devolopers who develops this site"
 width={900}
 height={200}
 />
 <span class="mb-3 text-[10px]  font-calibri text-gray-700 dark:text-gray-400"><br></br>
 Bachelor of Science in Computer Science
& Engineering(CSE)  <br></br>
American International University - Bangladesh<br></br>
[24/11/2019 - Present]  Current CGPA:3.79/4.00<br></br><br></br>

Higher Secondary Certificate (H.S.C)   <br></br>
Milestone College, Dhaka   <br></br>
[1/7/2017 - 17/7/2019] <br></br> <br></br>

Secondary School Certificate (S.S.C)<br></br>
Laxmipur Govt. Girls High School<br></br>
[1/1/2012 - 4/5/2017] </span>    

   </div> </div>
   </div>

   
   </div>

     
        {/* </section> */}
      </Layout>
    </>
  );
};

