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
export default function Skill() {
    const router = useRouter();

const about= function () {
  router.push({
    pathname: "/dashboard/about",
  });
};
const edu= function () {
  router.push({
    pathname: "/dashboard/education",
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
          <div className="min-h-screen hidden md:block md:min-h-[900px] bg-cover bg-center   " style={{ backgroundImage: "url('/Homebackground.png')" }}>
            <br></br>
     
            <button  onClick={downloadResume} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50">Download Resume</button>
          
            
            <div class="flex flex-col items-center justify-center px-6 py-2 mt-6 mx-auto md:h-screen lg:py-0">
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
<button onClick={about}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
About Me
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
                 My Skills
                </h1>
                </center>
                <Image
        src="/about.jpg"
        alt="Picture of the Devolopers who develops this site"
        width={900}
        height={200}
        />
        <span class="mb-3 text-[9px]  font-calibri text-gray-700 dark:text-gray-400">
        Proficient in utilizing various Integrated Development Environments (IDEs) such as 
        Visual Studio Code, Visual Studio, CodeBlocks, Notepad++ and EMU8086. Well-versed in the Selenium testing tool and 
        skilled in multiple programming languages, including C++, JAVA, PHP, C#, JavaScript,Python, CSS, HTML, Assembly language 
        and SQL. Adept in both Backend (NestJS) and Frontend (Next.js) frameworks.<br></br><br></br>

Skills include extensive experience with databases, including MySQL, Oracle, and PostgreSQL. Proficient in Microsoft Word, 
PowerPoint and Excel, as well as Linux and Linux commands, Security Onion and malware analysis. Accomplished in GLUT Project 
development and experienced in using tools like Tinkercad, PSpice, NI Multisim, Cisco Packet Tracer, VM VirtualBox 
& ML Diagram Maker. </span>    

          </div> </div>
          </div>

          <br></br><br></br><br></br><br></br><br></br><br></br>
          </div>

          {/* Show background image for screens with width <= 600px (mobile) */}
          <div className="min-h-screen md:hidden  md:min-h-[900px] bg-cover bg-center   " style={{ backgroundImage: "url('/mobileHomebackground.png')" }}>
          
          <br />
           
        
            
          
          <button  onClick={downloadResume} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50">Download Resume</button>
          
            
          <div class="flex flex-col items-center justify-center px-6 py-8 mt-0 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
          {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
         
          About
      </a>
      
      
          <div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
         
          <button  onClick={edu} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Education 
</span>
</button>
<button onClick={about}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-4 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
About Me
</span>
</button>
<button onClick={expe} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-2 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 Experience
</span>
</button>

<div class="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
</div><div class="p-6 space-y-4 md:space-y-6 sm:p-8">

            <center>
              <h1 class="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                My Skills
              </h1>
              </center>
              <Image
      src="/about.jpg"
      alt="Picture of the Devolopers who develops this site"
      width={900}
      height={200}
      />
      <span class="mb-3 text-[9px]  font-calibri text-gray-700 dark:text-gray-400">
      Proficient in utilizing various Integrated Development Environments (IDEs) such as 
      Visual Studio Code, Visual Studio, CodeBlocks, Notepad++ and EMU8086. Well-versed in the Selenium testing tool and 
      skilled in multiple programming languages, including C++, JAVA, PHP, C#, JavaScript, Python, CSS, HTML, Assembly language 
      and SQL. Adept in both Backend (NestJS) and Frontend (Next.js) frameworks.<br></br><br></br>

Skills include extensive experience with databases, including MySQL, Oracle, and PostgreSQL. Proficient in Microsoft Word, 
PowerPoint and Excel, as well as Linux and Linux commands, Security Onion and malware analysis. Accomplished in GLUT Project 
development and experienced in using tools like Tinkercad, PSpice, NI Multisim, Cisco  Packet Tracer, VM VirtualBox
& ML Diagram Maker. </span>    

        </div> </div>
        </div>

   
   </div>

     
        {/* </section> */}
      </Layout>
    </>
  );
};

