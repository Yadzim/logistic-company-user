import Image from 'next/image';
import React from 'react';

const Services: React.FC = (): JSX.Element => {

  return (
    <div className="container py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Our <span className="text-main">Services</span></h2>
        <p className="text-2xl text-info mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia.</p>
      </div>

      <div className="grid grid-cols-3 gap-12 mt-12">

        {
          [...Array(6)].map((_, i) => (
            <div className="card" key={i}>
              <figure><Image className='rounded w-full' src="https://startupsmagazine.co.uk/sites/default/files/2022-07/AdobeStock_453942999.jpg" alt="Shoes" width={400} height={400} /></figure>
              <div className="flex flex-col gap-4 my-6">
                <h2 className="text-2xl font-bold ">Air Freight</h2>
                <p className='text-info'>If a dog chews shoes whose shoes does he choose? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="card-actions">
                  <button className="py-1 px-4 rounded-r-full bg-main text-white transition-transform w-max hover:w-36">Lore More</button>
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