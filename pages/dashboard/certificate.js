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

export default function Certificate() {
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
      <div className="min-h-screen hidden md:block md:min-h-[1526px] bg-cover bg-center   " style={{ backgroundImage: "url('/Cback.png')" }}>
        {/* Button */}<br></br>
        <button
          onClick={downloadResume}
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-20 sticky top-0 z-50"
        >
          Download Resume
        </button>
  
        {/* About Me Section */}
        <div class="flex flex-col items-center justify-center px-2 py-6 mt-0 mx-automd:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
            <br></br><br></br>   
         
              
            My Certificates
          </a>
  
          {/* Content Section */}
          <div className="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* Your content goes here */}
              {/* Example with an image */}
              
          
              <center>
                <h1 className="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                  IT Essentials Certificate
                </h1>
              </center>
              <Image
                src="/itEssencial.png"
                alt="Picture of the Developers who developed this site"
                width={900}
                height={200}
              />
              <p className="mb-3 text-[10px]  font-calibri text-gray-700 dark:text-gray-400">
              
                 Received certification from Cisco Networking Academy in July 2020, where learned<br></br> basic of computer.</p>

              <center>
                <h1 className="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                CyberOps Associate

                </h1>
              </center>
              <Image
                src="/itEssencial.png"
                alt="Picture of the Developers who developed this site"
                width={900}
                height={200}
              />
              <p className="mb-3 text-[10px]  font-calibri text-gray-700 dark:text-gray-400">
              Received certification from Cisco Networking Academy in May 2023, where learned<br></br> malware analysis.
              </p>
              <center>
                <h1 className="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                  Data Science
                </h1>
              </center>
              <Image
                src="/dataScience.png"
                alt="Picture of the Developers who developed this site"
                width={900}
                height={200}
              />
              <p className="mb-3 text-[10px]  font-calibri text-gray-700 dark:text-gray-400">
              Received certification from Simplilearn in 25 September 2023, where learned about<br></br> basic of data science.
              </p>
            </div>
          </div>
        </div>
      </div>

          
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
  
        {/* About Me Section */}
        <div className="flex flex-col items-center justify-center px-6 py-14 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-4xl font-semibold text-black-00 text-white">
          
       
              
            My Certificates
          </a>
  
          {/* Content Section */}
          <div className="w-full bg-blue-100 rounded-lg shadow yellow:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* Your content goes here */}
              {/* Example with an image */}
              
          
              <center>
                <h1 className="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                  IT Essentials Certificate
                </h1>
              </center>
              <Image
                src="/itEssencial.png"
                alt="Picture of the Developers who developed this site"
                width={900}
                height={200}
              />
              <p className="mb-3 text-[8px]  font-calibri text-gray-700 dark:text-gray-400">
              
                 Received certification from Cisco Networking Academy in July 2020, where learned basic of computer.</p>

              <center>
                <h1 className="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                CyberOps Associate

                </h1>
              </center>
              <Image
                src="/itEssencial.png"
                alt="Picture of the Developers who developed this site"
                width={900}
                height={200}
              />
              <p className="mb-3 text-[8px]  font-calibri text-gray-700 dark:text-gray-400">
              Received certification from Cisco Networking Academy in May 2023, where learned malware analysis.
              </p>
              <center>
                <h1 className="text-xl font-bold font-semibold italic bold font-calibri leading-tight tracking-tight text-gray-000 md:text-2xl dark:text-white">
                  Data Science
                </h1>
              </center>
              <Image
                src="/dataScience.png"
                alt="Picture of the Developers who developed this site"
                width={900}
                height={200}
              />
              <p className="mb-3 text-[8px]  font-calibri text-gray-700 dark:text-gray-400">
              Received certification from Simplilearn in 25 September 2023, where learned about basic of data science.
              </p>
            </div>
          </div>
        </div>
      </div>  
        
            
         
     

     
        {/* </section> */}
        </Layout>
    </>
  );
};

