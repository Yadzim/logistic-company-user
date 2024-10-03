"use client";

import React, { useEffect, useRef, useState } from 'react';
// import image from "../assets/images/client-says3.svg";
import carusel_image from "../assets/images/carusel_image.png";
import Image from "next/image";
import EmblaCarousel from './Carusel';
import EModal from './Modal';

const Comments: React.FC = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type here
  // const _videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type here
  const [open, setOpen] = useState(false);
  // const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    const video = videoRef.current;

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

  // useEffect(() => {
  //   captureThumbnail();
  // }, [_videoRef.current]);

  // const captureThumbnail = () => {
  //   const video = _videoRef.current;
  //   if (video) {
  //     const canvas = document.createElement('canvas');
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     const context = canvas.getContext('2d');
  //     context?.drawImage(video, 0, 0, canvas.width, canvas.height);
  //     setThumbnail(canvas.toDataURL('image/jpeg')); // Yoki boshqa format
  //   }
  // }

  const SLIDE_ELEMENT = (
    <div className="client-says-card relative card bg-white rounded-xl max-md:p-2 shadow-md my-10">
      <div className="client-says-play absolute top-0 left-0 flex-center w-full h-full bg-gray-600/40 rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(true)}>
        <div className="p-4 rounded-full bg-white">
          <i className="fas fa-play text-5xl text-main/90 ms-2"></i>
        </div>
      </div>
      <figure className="w-full h-[340px] flex-center overflow-hidden mb-2 img-box- rounded-md">
        <Image src={carusel_image} alt='' width={460} height={340} className='min-w-full min-h-full bg-gray-100 object-cover rounded' />
        <div className="client-says-image-play absolute shadow-xl rounded-full bg-white p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <i className="fas fa-play text-4xl text-black/70 ms-2"></i>
        </div>
      </figure>
      {/* <Image src={carusel_image} alt="client-says" width={200} height={200} className="mx-auto w-full" /> */}
      <div className="flex-between gap-4 mt-4">
        <div className="d-f gap-3">
          <i className="fa fa-user-circle text-5xl opacity-30"></i>
          <div>
            <h6 className="text-lg font-semibold">John Doe</h6>
            <span className="text-info text-sm">Web Developer</span>
          </div>
        </div>
        <i className="fas fa-quote-right text-4xl md:text-5xl opacity-10"></i>
      </div>
    </div>
  );

  const OPTIONS = { loop: true };
  const SLIDES = [...Array(5)].map(() => SLIDE_ELEMENT);

  return (
    <div>
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
