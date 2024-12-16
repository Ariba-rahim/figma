export default function TopPick() {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className=" sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 text-center gap-52">Top Picks For You</h1>
        <p className="sm:w-3/5  text-base  pl-0 left-[333px] text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-40  my-48 mt-[-80px]">
      <div className="p-4 md:w-72 sm:mb-0 mb-48">
        <div className="rounded-lg h-[384px] overflow-hidden my-[-30px]">
          <img alt="content" className="object-cover object-center h-full w-full my-0" src="./p1.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Trenton modular sofa_3</h2>
        <p className="text-base leading-relaxed mt-2 font-bold">Rs. 25,000.00</p>
      </div>
      <div className="p-4 md:w-72  mb-5 mt-20">
        <div className="rounded-lg h-[184px] overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./p2.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Granite dining table with <br/> dining chair</h2>
        <p className="text-base leading-relaxed mt-2 font-bold"> Rs. 25,000.00</p>
        
      </div>
      <div className="p-4 md:w-72 mb-40 mt-[-120px] top-[1745px]">
        <div className="rounded-lg h-[384px] overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./p3.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Outdoor bar table and <br/> stool</h2>
        <p className="text-base leading-relaxed mt-2 font-bold">Rs. 25,000.00</p>
        <a className=" inline-flex items-center mt-16 top-[2340px] h-[49px] w-[215px] left-[662px]">View More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-[115px] h-[49px] ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-72 sm:mb-0 mb-6 mt-20">
        <div className="rounded-lg h-[174px] overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./p4.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Plain console with teak <br/> mirror</h2>
        <p className="text-base leading-relaxed mt-2 font-bold">Rs. 25,000.00</p>
        
      </div>
    </div>
  </div>
</section>
        </div>
    )
}