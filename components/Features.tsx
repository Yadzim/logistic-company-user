import React from 'react';
import image from "@/assets/images/features.png";
import Image from 'next/image';

const Features: React.FC = (): JSX.Element => {

  return (
    <div className="grid grid-cols-2 gap-12 container py-12">
      <div className="">
        <h6 className='text-main font-bold text-xl' >Our Features</h6>
        <h2 className="text-5xl font-bold mb-12 mt-3">We Are Trusted Logistics Company Since 1990</h2>

        <div className="flex flex-col gap-12">

          <div className="grid grid-cols-[80px_1fr] gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">Worldwide Service</p>
              <span className="text-info" >Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</span>
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr] gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">On Time Delivery</p>
              <span className="text-info" >Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</span>
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr] gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">24/7 Telephone Support</p>
              <span className="text-info" >Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</span>
            </div>
          </div>

        </div>
      </div>
      <div className="flex-center">
        <Image src={image} alt="image" width={600} height={600} />
      </div>
    </div>
  );
};

export default Features;