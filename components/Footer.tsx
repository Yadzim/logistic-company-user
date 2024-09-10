import React, { useState, useEffect } from 'react';

const Footer: React.FC = (): JSX.Element => {

  return (
    <div className="bg-blue">
      <div className="footer  text-white">
        <div className="container h-96"></div>

        <div className="bottom border-t border-info py-6 flex-between px-24">
          <div className="">Copyright ©2024 All rights reserved | This site is made with  by <span className="text-main">Mizan Soft</span></div>
        </div>
      </div>

    </div>
  );
};

export default Footer;