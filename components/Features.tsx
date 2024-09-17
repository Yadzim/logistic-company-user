import React from 'react';
import image from "@/assets/images/features.png";
import Image from 'next/image';

const Features: React.FC = (): JSX.Element => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 container max-md:px-3 py-6 md:py-12">
      <div className="">
        <div className="max-md:text-center">
          <h6 className='text-main font-bold text-lg md:text-xl' >Our Features</h6>
          <h2 className="text-2xl md:text-5xl font-bold mb-12 mt-3">We Are Trusted Logistics Company Since 1990</h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">

          <div className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 animate__animated animate__fadeInLeft">
            <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300"></div>
            <div className="text-lg">
              <p className="font-bold mb-2">Worldwide Service</p>
              <span className="text-info max-md:text-sm" >Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</span>
            </div>
          </div>

          <div className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 animate__animated animate__fadeInLeft">
            <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300"></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">On Time Delivery</p>
              <span className="text-info max-md:text-sm" >Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</span>
            </div>
          </div>

          <div className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 animate__animated animate__fadeInLeft">
            <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300"></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">24/7 Telephone Support</p>
              <span className="text-info max-md:text-sm" >Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</span>
            </div>
          </div>

        </div>
      </div>
      <div className="flex-center max-md:hidden">
        <Image src={image} alt="image" width={600} height={600} />
      </div>
    </div >
  );
};

export default Features;