import React from 'react';
import Image from 'next/image';
import shipImage from '../assets/images/services-image/ship.png';
import furaImage from '../assets/images/services-image/fura.png';
import storeImage from '../assets/images/services-image/store.png';
import plane from '../assets/images/services-bg.png';
import "./style.css";


const services = [
  {
    title: "Xitoy- O’zbekiston logistika",
    description: "",
    img: shipImage
  },
  {
    title: "Deklaratsiya- bojxona rasmiylashtiruvi",
    description: "",
    img: storeImage
  },
  {
    title: "Searching- tadbirkorlarga Xitoydan bizness uchun eng arzon texnikalarni topish va savdolashishib yetkazib berish.",
    description: "",
    img: plane
  },
  {
    title: "Payment (to’lov)",
    description: "",
    img: furaImage
  },
]

const Services: React.FC<{ count?: number | "all" }> = ({ count }): JSX.Element => {

  return (
    <div className="container py-8 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Bizning <span className="text-main">Xizmatlar</span></h2>
        <p className="text-lg md:text-2xl text-info mt-2"> Biz qanday turdagi xizmatlarni sizga tavsiya eta olamiz?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 mt-12 max-md:px-3">

        {
          services.slice(0, count === "all" ? services.length : count).map((e, i) => (
            <div className="card max-md:p-2 animate__animated animate__fadeInUp" key={i}>
              <figure className="w-full h-[160px] flex-center overflow-hidden mb-2 img-box rounded-md">
                <Image src={e?.img} alt='' width={285} height={163} className='min-w-full min-h-full bg-gray-100 object-cover rounded' />
              </figure>
              {/* <figure><Image className='rounded w-full' src={images[i]} alt="Shoes" width={400} height={400} /></figure> */}
              <div className="flex flex-col gap-4 mt-6">
                <h2 className="text-2xl font-bold ">{e?.title}</h2>
                <p className='text-info'>{e?.description || "If a dog chews shoes whose shoes does he choose? Lorem, ipsum dolor sit amet consectetur adipisicing elit."}</p>
                {/* <div className="card-actions-">
                  <button className="py-1 px-4 rounded-r-full bg-main text-white transition-transform w-max hover:w-36"><i className="fa fa-arrow-right" />&nbsp; Lore More</button>
                </div> */}
                <div className="card-actions-">
                  <button className="py-1 px-4 rounded-r-full bg-main text-white transition-transform w-max">Xizmatlar</button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Services;