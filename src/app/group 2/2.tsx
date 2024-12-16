import Image from "next/image";

export default function Gp2() {
    return (

       <section className="text-gray-600 body-font">
  <div className="container  flex px-44 py-11 md:flex-row flex-col items-center">
    <div className="lg:flex-grow  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-[440px] h-[274px]">
      <h1 className="title-font text-4xl  mb-4  text-black text-[500px] leading-[2] font-bold ">
      Rocket single <br/>
       seater
       
      </h1>
  
      <div className="flex justify-center">
        <button className="inline-flex text-black underline-offset-2 border-spacing-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
     shop Now
        </button>
  
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-48">
      <img
        className="object-cover object-center rounded w-[600px] h-[700px]"
        alt="hero"
        src="./figma1.png"
      />
    </div>
  </div>
</section>

   
    );
  }
  
  
  