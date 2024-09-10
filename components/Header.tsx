import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header: React.FC = (): JSX.Element => {

  return (
    <header className="bg-blue">
      <div className="top py-2 px-12 border-b border-info">
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
      <div className="main px-12 py-8 ">
        <div className="container flex-between">
          <h1 className="text-4xl font-bold text-main">Logo</h1>
          <div className="d-f gap-12">
            <ul className="d-f gap-12 text-white">
              <li><Link className='nav-link' href="/">Home</Link></li>
              <li><Link className='nav-link' href="/about">About</Link></li>
              <li><Link className='nav-link' href="/contact">Contact</Link></li>
              <li><Link className='nav-link' href="/blog">Blog</Link></li>
            </ul>
            <button className="bg-main py-3 px-6 rounded-lg text-white">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;