import Image from "next/image";
import NavBar from "./navbar/navbar";
import Gp2 from "./group 2/2";
import Gp3 from "@/app/gp3/gp3";
import TopPick from "./topPick/topPick";
import NewArival from "@/newArival/newArival";

export default function Home() {
  return (
   <div className="w-[1440px] h-[5052px] top-[-512] left-[-720px]" >
<NavBar/>
<div className=" w-[1440] h-[1000px] top-[70px] bg-[#FBEBB5] left-[202px] "><Gp2/></div>

<div className=" bg-[#FAF4F4] h-[655px] w-[1440px] top-[996px] ">
  <Gp3/>
</div>
<div className="w-[1440px] h-[777px] top-[1663px] bg-[#FFFFFF]">
  <TopPick/>
</div>
<div className=" h-[639px] top-[2469px] bg-[#FFF9E5]">
<NewArival/>
</div>
    <div className=" w-[454px] h-[90px] top-[4176px] left-[493px] ">
      <h1 className="font-[poppins] text-left font-[700] text-[60px] h-[90px] underline-offset-4 text-wrap">Our Instagram</h1>
    </div>
  </div>
 
  );
}
