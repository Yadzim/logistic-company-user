"use client"

import React, { useEffect, useRef, useState } from 'react';
import image from "../assets/images/client-says3.svg";
import Image from "next/image";
import EmblaCarousel from './Carusel';
import EModal from './Modal';


const Comments: React.FC = (): JSX.Element => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const video: any = videoRef?.current;

    if (video) {
      if (open) {
        try {
          video.currentTime = 0;
          video.play();
        } catch (error) {
          console.warn('Autoplay failed:', error);
        }
      } else {
        try {
          video.pause();
        } catch (error) {
          console.warn('Autoplay failed:', error);
        }
      }
    }
  }, [open]);


  const SLIDE_ELEMENT = <div className="client-says-card relative card bg-white rounded-xl p-4 shadow-md- my-10">
    <div className="client-says-play absolute top-0 left-0 flex-center w-full h-full bg-gray-600/40 rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(true)}>
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-white"> */}
      <div className="p-4 rounded-full bg-white">
        <i className="fas fa-play text-5xl text-main/90 ms-2"></i>
      </div>

    </div>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laboriosam mollitia temporibus ipsa provident quaerat explicabo officiis eos eveniet? Eveniet quae voluptatum suscipit.</p> */}
    <Image src={image} alt="client-says" width={200} height={200} className="mx-auto" />
    <div className="flex-between gap-4 mt-4">
      <div className="d-f gap-3">
        <i className="fa fa-user-circle text-5xl opacity-30"></i>
        <div className="">
          <h6 className="text-lg font-semibold" >John Doe</h6>
          <span className="text-info text-sm" >Web Developer</span>
        </div>
      </div>

      <i className="fas fa-quote-right text-5xl opacity-10"></i>
    </div>
  </div>
  const OPTIONS = { loop: true }
  const SLIDES = [...Array(5)].map(() => SLIDE_ELEMENT)

  return (
    <div className="">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <EModal
        header="Mijozlarimiz fikri"
        open={open}
        onClose={() => setOpen(false)}
        width={480}
        center
      >
        <video width="480" height="360" controls preload="none" className="client-video" autoPlay loop ref={videoRef}>
          <source src="https://github.com/Yadzim/edu-tracker-api/blob/main/_1.mp4?raw=true" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </EModal>
    </div>
  );
};

export default Comments;