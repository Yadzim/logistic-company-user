'use client'

import React from 'react';
import Image from 'next/image';
import { useGetAllData } from '@/hooks';
import { FILE_URL } from '@/config/constants';
import EModal from './Modal';
import "./style.css";


const Services: React.FC<{ count?: number | "all" }> = ({ count }): JSX.Element => {
  const [open, setOpen] = React.useState<string>("")
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const { data } = useGetAllData({
    queryKey: ["services"],
    url: "services",
  })

  const services: Record<string, string>[] = data?.services || []

  return (
    <div className="container py-8 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Bizning <span className="text-main">Xizmatlar</span></h2>
        <p className="text-lg md:text-2xl text-info mt-2"> Biz qanday turdagi xizmatlarni sizga tavsiya eta olamiz?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 mt-12 max-md:px-3">

        {
          services.slice(0, count === "all" ? services.length : count).map((e, i) => (
            <div className="card max-md:p-2 animate__animated animate__fadeInUp flex justify-between flex-col gap-4" key={i}>
              <div>
                <div className="client-says-card relative">
                  <div className="client-says-play absolute top-0 left-0 z-10 flex-center w-full h-full bg-gray-600/40 rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(e?.video)}>
                    <div className="p-4 rounded-full bg-white">
                      <i className="fas fa-play text-5xl text-main/90 ms-2"></i>
                    </div>
                  </div>
                  <figure className="w-full h-[200px] flex-center overflow-hidden mb-2 img-box rounded-md">
                    <Image src={FILE_URL + e?.image} alt='' width={285} height={205} className='min-w-full min-h-full bg-gray-100 object-cover rounded' />
                  </figure>
                </div>
                {/* <figure><Image className='rounded w-full' src={images[i]} alt="Shoes" width={400} height={400} /></figure> */}
                <div className="flex flex-col gap-4 mt-6">
                  <h2 className="text-xl font-bold ">{e?.name}</h2>
                  <p className='text-info'>{e?.description || "If a dog chews shoes whose shoes does he choose? Lorem, ipsum dolor sit amet consectetur adipisicing elit."}</p>
                  {/* <div className="card-actions-">
                  <button className="py-1 px-4 rounded-r-full bg-main text-white transition-transform w-max hover:w-36"><i className="fa fa-arrow-right" />&nbsp; Lore More</button>
                  </div> */}
                </div>

              </div>
              <div className="card-actions-">
                <button className="py-1 px-4 rounded-r-full bg-main text-white transition-transform w-max">Xizmatlar</button>
              </div>
            </div>
          ))
        }
      </div>

      <EModal
        // header="Bizning Xizmatlarimiz"
        header={null}
        open={!!open}
        footer={null}
        onClose={() => setOpen("")}
        width={640}
        className='service-modal'
        center
      >
        <video
          width="640"
          height="360"
          controls
          className="client-video"
          autoPlay
          loop
          ref={videoRef}
          src={FILE_URL + open}
        >
          Your browser does not support the video tag.
        </video>
      </EModal>
    </div>
  );
};

export default Services;