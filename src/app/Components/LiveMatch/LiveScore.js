import Image from 'next/image';
export default function LiveScore() {
  return (
    <div className="flex justify-center items-center rounded-3xl mt-8 p-4 bg-[#151414]  border-[0.5px] border-[#222222]">
      <div className="relative p-4 rounded-2xl bg-cover bg-center  bg-[url('/Image/Card.png')]  border-[0.5px] border-[#222222]">
             <div className="absolute top-5 left-3 flex items-center space-x-1 bg-[#333333] bg-opacity-70 px-3 py-1 rounded-2xl shadow">
               <span className="text-white text-sm font-semibold">Live</span>
               <Image src="/Image/image 2.png" className='ml-2' alt="Live" width={18} height={18} />
             </div>
       
             <div className="absolute top-5 right-2">
               <Image src="/Image/Icon (1).png" alt="Favorite" width={35} height={35} />
             </div>
       
        <div className="rounded-xl overflow-hidden mt-18">
          <Image
            src="/Image/image (2).png"
            alt="Match Banner"
            width={320} 
            height={160} 
            className="object-cover"
          />
        </div>
    


<div className="text-white text-center mt-4">
  <h2 className="text-xl font-bold">NZ vs SA</h2>
  <p className=" text-white flex text-sm font-medium  items-center gap-2 mt-5">
    Live score <span className="text-white ">SA: 223/2</span>
    <span className="text-white px-3">42.5 Overs</span>  NZ: Yet to bat
  </p>
</div>

<div className=" rounded-lg bg-opacity-60">
  <div className="flex justify-between items-center">
    
    <div className="flex flex-col gap-1">
      <p className="text-white text-sm">
        <span className="font-semibold">T. Bavuma:</span> 53 (57)
      </p>
      <p className="text-white text-sm">
        <span className="font-semibold">D. Miller:</span> 73 (68)
      </p>
    </div>

    <div className="flex flex-col gap-1 items-end">
      <p className="text-white text-sm">
        <span className="font-semibold">T. Boult:</span> 1/39 (7.5 overs)
      </p>
      <div className="flex items-center gap-2">
        <span className="text-white">2 0 1 0 4</span>
      </div>
    </div>

  </div>
</div>


      </div>
    </div>
  );
}


