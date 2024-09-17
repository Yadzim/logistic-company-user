"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = (): JSX.Element => {
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

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="w-full h-20- px-4- text-white bg-blue max-md:fixed sticky -top-10 nav">
      <header className="w-full">
        <div className="hidden md:block top py-2 px-12 border-b border-info">
          <div className="container flex-between text-info">
            <div className="d-f gap-12">
              <p>Phone: +99 (0) 101 0000 888</p>
              <p>Email: noreply@yourdomain.com</p>
            </div>
            <div className="d-f gap-6">
              <div className="w-6 h-6 rounded-full bg-info"></div>
              <div className="w-6 h-6 rounded-full bg-info"></div>
              <div className="w-6 h-6 rounded-full bg-info"></div>
            </div>
          </div>
        </div>
        <div className="main px-4 md:px-12 py-3 md:py-6">
          <div className="container flex-between">
            <h1 className="md:text-4xl text-3xl font-bold text-main">Logo</h1>
            <div className="max-md:hidden d-f gap-12">
              <ul className="d-f gap-12 text-white">
                <li><Link className='nav-link' href="/">Home</Link></li>
                <li><Link className='nav-link' href="/about">About</Link></li>
                <li><Link className='nav-link' href="/contact">Contact</Link></li>
                <li><Link className='nav-link' href="/blog">Blog</Link></li>
              </ul>
              <button className="bg-main py-2 px-6 rounded-lg hover:bg-main/90 text-white">Get Started</button>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer pr-4 z-10 text-gray-500 text-2xl md:hidden"
            >
              {nav ? <i className="fa fa-solid fa-bars"></i> : <i className="fa fa-solid fa-xmark"></i>}
            </div>
          </div>
        </div>
      </header>

      {/* <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div> */}

      {/* <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul> */}


      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;