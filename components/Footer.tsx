"use client"

import Link from 'next/link';
import React from 'react';
import { links } from './Navbar';
import Image from 'next/image';
import logo from "../assets/images/logo3.png";

const Footer: React.FC = (): JSX.Element => {

  return (
    // <div className="bg-blue">
    //   <div className="footer  text-white">
    //     <div className="container h-96"></div>

    //     <div className="bottom border-t border-info py-6 flex-between px-24">
    //       <div className="">Copyright ©2024 All rights reserved | This site is made with  by <span className="text-main">Mizan Soft</span></div>
    //     </div>
    //   </div>

    // </div>
    <div className="bg-blue">
      <footer className="footer text-white">
        <div className=" border-b border-info p-6 py-4">
          <div className="container flex items-center justify-center lg:justify-between">
            <div className="me-12 hidden lg:block">
              <span>Ijtimoiy tarmoqlarda biz bilan bog’laning:</span>
            </div>
            <div className="flex-center gap-6">
              <a target='_blank' href="https://facebook.com/Ema_logistics_uz" className="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512">
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a target='_blank' href="https://instagram.com/Ema_logistics_uz" className="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a target='_blank' href="https://t.me/Ema_logistics_uz" className="">
                <i className="fab fa-telegram-plane "></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left container">
          <div className="grid-1 grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

            <div className="md:me-6 col-span-2">
              <div className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                {/* <h1 className="text-3xl font-signature text-main uppercase"><i className="fa fa-shipping-fast"></i> logistic</h1> */}
                <Image src={logo} alt="ema" width={200} height={80} />
                {/* <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">

                </span> */}
                {/* TW Elements */}
              </div>
              <h2>
                Yuklaringizni Xitoydan O’zbekistonga tez va xavfsiz yetkazib beramiz!
              </h2>

            </div>

            <div className='col-span-1 md:col-span-2'>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Menyular
              </h6>
              {
                links?.map((link, i) => (
                  <p key={i} className="mb-4">
                    <Link href={link.link}>{link.title}</Link>
                  </p>
                ))
              }
            </div>

            <div className='col-span-1 md:col-span-2'>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Bizning xizmatlar
              </h6>
              <p className="mb-4">
                <a href="#!"> Xitoy- O’zbekiston logistika</a>
              </p>
              <p className="mb-4">
                <a href="#!">Deklaratsiya- bojxona rasmiylashtiruvi</a>
              </p>
              {/* <p className="mb-4">
                <a href="#!"> Searching- tadbirkorlarga Xitoydan bizness uchun eng arzon texnikalarni topish va
                  savdolashishib yetkazib berish.</a>
              </p> */}
              <p>
                <a href="#!">Payment (to’lov)</a>
              </p>
            </div>

            <div className='col-span-2'>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Bog’lanish
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                Arkbuloq savdo markazi, B2/3
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                emaxb@gmail.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
                +998 (99) 662 22 33
              </p>
            </div>

          </div>
        </div>

        <div className="bg-black/5 p-8 text-center border-t- border-info mt-6">
          <span>Copyright ©2024 All rights reserved | This site is made with  by </span>&nbsp;
          <a className="font-semibold text-main" target='_blank' href="https://t.me/mizan_soft">Mizan Soft</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;