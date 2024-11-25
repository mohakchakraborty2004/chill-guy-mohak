"use client"

import Image from "next/image";



export default function Home() {

  return (

    <div>

    <div className="grid grid-cols-2 ">


      <div className=" h-[100vh] flex flex-col justify-center p-6 pl-[100px]">
      <h1 className="text-[6rem] font-bold">I am Mohak.</h1>
    <h1 className="text-[3rem] font-semibold">I am just a chill guy/<span className="text-yellow-600 font-extrabold">Developer</span>.</h1>

    <p className="text-2xl font-semibold">Here's my GitHub and my socials to check out my chill skills.</p>

    <div className="flex mt-4">
    <button onClick={()=>{
      window.location.href = "https://github.com/mohakchakraborty2004";
    }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mr-[20px]">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
GitHub
</span>
</button>

<button onClick={()=>{
      window.location.href = "https://www.linkedin.com/in/mohak-chakraborty/";
    }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mr-[20px]">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
LinkedIn
</span>
</button>

<button  onClick={()=>{
      window.location.href = "https://x.com/I_Mohak19";
    }}  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Twitter
</span>
</button>
    </div>
      </div>


      <div className="flex justify-center items-center">

      <Image
          className="h-[700px] w-[700px]"
          src="/chillguy.png"
          alt="Next.js logo"
          width={180}
          height={10}
          
        />

      </div>
    </div>

   

   

    </div>
    
   
      
  );
}
