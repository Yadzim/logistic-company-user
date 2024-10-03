import Image from 'next/image';
import React, { } from 'react';
import warehouse_image from '../assets/images/warehouse.png';

const Warehouses: React.FC = (): JSX.Element => {

  return (
    <div className="">
      <div className="py-12">
        <div className="container grid md:grid-cols-2 gap-12 max-md:px-4">
          <Image src={warehouse_image} alt="image" width={600} height={600} />

          <div className="">

            <div className="max-md:text-center">
              <h6 className='text-main font-bold text-lg md:text-2xl' >Bizning omborlarimiz</h6>
              <h2 className="text-2xl md:text-4xl font-bold mb-12 mt-3">Hozirgi vaqtda dunyoning turli nuqtalarida ko’plab omborlarimiz mavjud</h2>
            </div>


            {/* <div className="flex flex-col gap-4">
              <div className="d-f gap-8 text-xl md:text-2xl">
                <i className="fas fa-map-marker-alt text-5xl opacity-50"></i>
                <div className="">
                  <h4 className='font-semibold'>Guanzhou</h4>
                  <p className='text-info text-sm md:text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus maiores voluptates.</p>
                </div>
              </div>
              <div className="d-f gap-8 text-xl md:text-2xl">
                <i className="fas fa-map-marker-alt text-5xl opacity-50"></i>
                <div className="">
                  <h4 className='font-semibold'>Yiwu</h4>
                  <p className='text-info text-sm md:text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="d-f gap-8 text-xl md:text-2xl">
                <i className="fas fa-map-marker-alt text-5xl opacity-50"></i>
                <div className="">
                  <h4 className='font-semibold'>Shengzhen</h4>
                  <p className='text-info text-sm md:text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae?</p>
                </div>
              </div>
              <div className="d-f gap-8 text-xl md:text-2xl">
                <i className="fas fa-map-marker-alt text-5xl opacity-50"></i>
                <div className="">
                  <h4 className='font-semibold'>Urumqi</h4>
                  <p className='text-info text-sm md:text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                </div>
              </div>
            </div> */}

            <div className="grid grid-cols-2 gap-12">

              <div className="d-f gap-3 flex-col-">
                <div className="p-3 px-4 rounded-xl bg-main/10 text-main ">
                  <i className="fas fa-map-marker-alt text-2xl opacity-80"></i>
                </div>
                <div className="">
                  <h4 className='text-2xl font-semibold'>Guanzhou</h4>
                </div>
              </div>
              <div className="d-f gap-3 flex-col-">
                <div className="p-3 px-4 rounded-xl bg-main/10 text-main ">
                  <i className="fas fa-map-marker-alt text-2xl opacity-80"></i>
                </div>
                <div className="">
                  <h4 className='text-2xl font-semibold'>Yiwu</h4>
                </div>
              </div>
              <div className="d-f gap-3 flex-col-">
                <div className="p-3 px-4 rounded-xl bg-main/10 text-main ">
                  <i className="fas fa-map-marker-alt text-2xl opacity-80"></i>
                </div>
                <div className="">
                  <h4 className='text-2xl font-semibold'>Shengzhen</h4>
                </div>
              </div>
              <div className="d-f gap-3 flex-col-">
                <div className="p-3 px-4 rounded-xl bg-main/10 text-main ">
                  <i className="fas fa-map-marker-alt text-2xl opacity-80"></i>
                </div>
                <div className="">
                  <h4 className='text-2xl font-semibold'>Urumqi</h4>
                </div>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Warehouses;