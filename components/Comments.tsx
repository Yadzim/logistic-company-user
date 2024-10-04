"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import EmblaCarousel from './Carusel';
import EModal from './Modal';
import { useGetAllData } from '@/hooks';
import { FILE_URL } from '@/config/constants';

const Comments: React.FC = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type here
  // const _videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type here
  const [open, setOpen] = useState("");
  // const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      if (open) {
        try {
          // video.url
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

  const { data } = useGetAllData({
    queryKey: ["comments"],
    url: "comments",
  })

  const comments: Record<string, string>[] = data?.comments || []

  const OPTIONS = { loop: true };
  const SLIDES = comments.map((e, i) => <div key={i} className="client-says-card relative card bg-white rounded-xl max-md:p-2 shadow-md my-10">
    <div className="client-says-play absolute top-0 left-0 flex-center w-full h-full bg-gray-600/40 rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(e?.video)}>
      <div className="p-4 rounded-full bg-white">
        <i className="fas fa-play text-5xl text-main/90 ms-2"></i>
      </div>
    </div>
    <figure className="w-full h-[340px] flex-center overflow-hidden mb-2 img-box- rounded-md">
      <Image src={FILE_URL + e.poster} alt='' width={460} height={340} className='min-w-full min-h-full bg-gray-100 object-cover rounded' />
      <div className="client-says-image-play absolute shadow-xl rounded-full bg-white p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <i className="fas fa-play text-4xl text-black/70 ms-2"></i>
      </div>
    </figure>
    {/* <Image src={carusel_image} alt="client-says" width={200} height={200} className="mx-auto w-full" /> */}
    <div className="flex-between gap-4 mt-4">
      <div className="d-f gap-3">
        <i className="fa fa-user-circle text-5xl opacity-30"></i>
        <div>
          <h6 className="text-lg font-semibold">{e.client}</h6>
          <span className="text-info text-sm">{e.job}</span>
        </div>
      </div>
      <i className="fas fa-quote-right text-4xl md:text-5xl opacity-10"></i>
    </div>
  </div>);

  console.log(videoRef);


  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <EModal
        header="Mijozlarimiz fikri"
        open={!!open}
        onClose={() => setOpen("")}
        width={480}
        center
      >
        <video
          width="480"
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

export default Comments;
