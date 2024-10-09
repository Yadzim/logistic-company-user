"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export const links = [
  {
    id: 1,
    link: "/",
    title: "Asosiy",
  },
  {
    id: 2,
    link: "/about",
    title: "Biz haqimizda",
  },
  {
    id: 3,
    link: "/services",
    title: "Xizmatlarimiz",
  },
  // {
  //   id: 4,
  //   link: "experience",
  //   title: "Experience",
  // },
  {
    id: 5,
    link: "/contact",
    title: "Bog'lanish",
  },
];

const Navbar: React.FC = (): JSX.Element => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(pathname);


  return (
    <div className="w-full h-20- px-4- text-white bg-blue max-md:fixed sticky md:-top-10 nav z-10">
      <header className="w-full">
        <div className="hidden md:block top py-2 px-12 border-b border-info">
          <div className="container flex-between text-info">
            <div className="d-f gap-12">
              <p>Tel: +998 (88) 766 60 77</p>
              <p>Email: emalogistics@gmail.com</p>
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
        <div className="main px-4 md:px-12 py-3 md:py-6">
          <div className="container flex-between">
            {/* <Link href="/"><h1 className="md:text-4xl text-3xl font-bold text-main uppercase"><i className="fa fa-shipping-fast"></i> lst</h1></Link> */}
            <Link href="/"><Image src={logo} alt="logo" width={120} height={40} /></Link>
            <div className="max-md:hidden d-f gap-12">
              <ul className="d-f gap-12 text-white">
                {
                  links.map(({ id, link, title }) => (
                    <li key={id}><Link className={`nav-link ${link === pathname ? 'active' : ''}`} href={link}>{title}</Link></li>
                  ))
                }
              </ul>
              <button className="bg-main py-2 px-6 rounded-full hover:bg-main/90 text-white"><i className="fas fa-play-circle"></i>&nbsp; &nbsp;Watch</button>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer pr-4 z-10 text-gray-400 text-2xl md:hidden"
            >
              {nav ? <i className="fa fa-times text-3xl"></i> : <i className="fa fa-solid fa-bars"></i>}
            </div>
          </div>
        </div>
      </header>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link} className={`nav-link ${link === pathname ? 'active' : ''}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;