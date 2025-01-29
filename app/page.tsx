import { Comments, Contact, Features, Services, Warehouses } from "@/components";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <div className="hero d-f px-4 md:px-24 text-white">
        <div className="md:max-w-3xl">
          {/* <h1 className="md:text-[5rem] text-5xl font-bold">Safe & Reliable <span className="text-main">Logistics</span> Solution!</h1> */}
          {/* <h1 className="md:text-[5rem] text-5xl font-bold">Yuklaringizni Xitoydan O’zbekistonga <span className="text-main"> tez va hech qanday zararlanishsiz </span> yetkazibberamiz!</h1> */}
          <h1 className="md:text-[5rem] text-5xl font-bold"><span className="text-main">Tez va Xavfsiz </span> logistika xizmati</h1>
          <p className="py-6 text-lg">
            Yuklaringizni Xitoydan O’zbekistonga tez va xavfsiz yetkazib beramiz!
          </p>
          <Link href="/contact"><button className="py-3 px-12 rounded-full border border-main text-main hover:text-white hover:bg-main transition-colors">Biz bilan bog’lanish</button></Link>
        </div>
      </div>

      <div className="bg-gray-200 py-6 md:py-12">
        <div className="container flex-center max-md:flex-wrap gap-4 md:gap-24 max-md:text-center">

          <div className="d-f max-md:flex-col gap-2 md:gap-8 max-md:w-[calc(100%/2-1rem)] animate__animated animate__fadeInBottomLeft">
            {/* <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-400"></div> */}
            <i className="fa fa-headset text-main/90 text-4xl md:text-5xl"></i>
            <div className="">
              <span className="max-md:text-sm text-info" >Istalgan vaqt bog’lanish</span>
              <p className="text-md md:text-2xl font-bold md:mt-2">+998 (99) 662 22 33</p>
            </div>
          </div>
          <div className="d-f max-md:flex-col gap-2 md:gap-8 max-md:w-[calc(100%/2-1rem)] animate__animated animate__fadeInUp">
            {/* <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-400"></div> */}
            <i className="far fa-clock text-main/90 text-4xl md:text-5xl"></i>
            <div className="">
              <span className="max-md:text-sm text-info" >Ish vaqti</span>
              <p className="text-md md:text-2xl font-bold md:mt-2">Dushanba - Yakshanba</p>
            </div>
          </div>
          <div className="d-f max-md:flex-col gap-2 md:gap-8 max-md:w-[calc(100%/2-1rem)]- animate__animated animate__fadeInBottomRight">
            {/* <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-400"></div> */}
            <i className="fa fa-map-marked-alt text-main/90 text-4xl md:text-5xl"></i>
            <div className="">
              <span className="max-md:text-sm text-info" >Uzbekistan, Tashkent</span>
              <p className="text-md md:text-2xl font-bold md:mt-2">Arkbuloq savdo markazi, B2/3</p>
            </div>
          </div>

        </div>
      </div>

      <Services count={4} />

      <Warehouses />

      <Features />

      <Contact />

      <div className="bg-[#F4F4F4]-">
        <div className="container py-8 md:py-24 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold"><span className="text-main">Mijozlarimiz</span> fikri</h2>
            <p className="text-lg md:text-2xl text-info mt-2">Mijozlarimiz biz haqimizda qanday fikirda?</p>
          </div>

          <Comments />

        </div>
      </div>


    </div>
  );
}
