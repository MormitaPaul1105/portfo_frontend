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

export default function Police_Profile() {
  return (
    <>

<_Title title="Police Home Page" ></_Title>
    <Layout > 
    <section class="bg-[url('/Homebackground.png')] bg-cover bg-center min-h-screen">

    {/* <html> */}
    {/* <body background="https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">  */}
      {/* <h2> Welcome your Page Police</h2> */}
      <br></br>
      <span class="self-center text-6xl font-semibold whitespace-nowrap text-Red">Welcome your Page Police</span>
      <center>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
       
        </center>
        {/* </body>  */}
        {/* </html> */}
         </section> 
         </Layout>
    </>
    
  )
}