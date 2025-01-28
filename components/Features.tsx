import React from 'react';
import image from "@/assets/images/logistic2.png";
import Image from 'next/image';

const Features: React.FC = (): JSX.Element => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 container px-2 md:px-4 py-6 md:py-12">
      <div className="">
        <div className="max-md:text-center">
          <h6 className='text-main font-bold text-lg md:text-xl' >Bizning avzalliklar</h6>
          <h2 className="text-2xl md:text-4xl font-bold mb-12 mt-3">EMAX-B INTERNATIONAL LOGISTICS jamoamiz 2017- yildan buyon xizmat ko’rsatib kelmoqda</h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">

          <div className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 animate__animated animate__fadeInLeft">
            <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300- flex-center"><i className="fa fa-globe opacity-50 text-4xl md:text-5xl"></i></div>
            <div className="text-lg">
              <p className="font-bold mb-2">Dunyo bo’ylab xizmatlar</p>
              <span className="text-info max-md:text-sm" >Dunyoning turli xil nuqtalaridan sizga zarur bo’lgan logistika xizmatlarini tez va qulay tarzda taqdim etamiz</span>
            </div>
          </div>

          <div className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 animate__animated animate__fadeInLeft">
            <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300- flex-center"><i className="fa fa-stopwatch opacity-50 text-4xl md:text-5xl"></i></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">Vaqtida Yetkazib Berish</p>
              <span className="text-info max-md:text-sm" >Buyurtmalaringizni hech qanday zararlanishsiz, o’z vaqtida yetkazib berishni zimmamizga olamiz.</span>
            </div>
          </div>

          <div className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 animate__animated animate__fadeInLeft">
            <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300- flex-center"><i className="fa fa-headset opacity-50 text-4xl md:text-5xl"></i></div>
            <div className="text-lg ">
              <p className="font-bold mb-2">24/7 Aloqa</p>
              <span className="text-info max-md:text-sm" >Biz bilan kunning istalgan vaqtida bog’lanib, istalgan savollaringizga javob olishingiz mumkin.</span>
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