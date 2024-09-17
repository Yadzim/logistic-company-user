
import React from 'react';
import { Contact, PageHeader } from '@/components';

import img from '@/assets/images/contact-bg.png'

const ContactPage: React.FC = (): JSX.Element => {

  return (
    <div className="bg-blue">
      <PageHeader title='Contact Us' description='We use an agile approach to test assumptions and connect with the needs of your audience early and often.' tag='Contact' img={img} />

      <div className="py-12">
        <div className="container grid md:grid-cols-2 gap-12">
          <div className="grid md:grid-cols-1 gap-6">

            <div className="d-f gap-6 animate__animated animate__fadeInLeft text-white border border-[#1F2937] rounded-2xl p-4">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937]"></div>
              <div className="text-lg">
                <h6 className="font-bold text-xl mb-2">Email us:</h6>
                {/* <span className="text-info text-sm" >Email us for general queries, including marketing and partnership opportunities.</span> */}
                <p className="text-main underline mt-3"><a href="mailto:2nKZd@example.com">2nKZd@example.com</a></p>
              </div>
            </div>

            <div className="d-f gap-6 animate__animated animate__fadeInLeft text-white border border-[#1F2937] rounded-2xl p-4">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937]"></div>
              <div className="text-lg">
                <h6 className="font-bold text-xl mb-2">Call us:</h6>
                {/* <span className="text-info text-sm" >Email us for general queries, including marketing and partnership opportunities.</span> */}
                <p className="text-main underline mt-3"><a href='tel:+1 (646) 786-5060'>+1 (646) 786-5060</a></p>
              </div>
            </div>

            {/* <div className="d-f gap-6 animate__animated animate__fadeInLeft text-white border border-[#1F2937] rounded-2xl p-4">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937]"></div>
              <div className="text-lg">
                <h6 className="font-bold text-lg mb-2">Address:</h6>
                <span className="text-info text-sm" >SILVER LAKE, United States 1941 Late Avenue Zip Code/Postal code: 03875</span>
              </div>
            </div> */}

            <div className="d-f gap-6 animate__animated animate__fadeInLeft text-white border border-[#1F2937] rounded-2xl p-4">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937]"></div>
              <div className="text-lg">
                <h6 className="font-bold text-lg mb-2">Company information:</h6>
                <span className="text-info text-sm" >Flowbite LLC Tax id: USXXXXXX</span>
              </div>
            </div>

            {/* <div className="flex flex-col gap-4 animate__animated animate__fadeInLeft text-white text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937] mx-auto mb-4"></div>
              <div className="text-lg">
                <h6 className="font-bold text-lg mb-2">Call us:</h6>
                <span className="text-info text-sm" >Call us to speak to a member of our team. We are always happy to help.</span>
                <p className="text-main underline mt-3"><a href="mailto:2nKZd@example.com">+1 (646) 786-5060</a></p>
              </div>
            </div>

            <div className="flex flex-col gap-4 animate__animated animate__fadeInLeft text-white text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937] mx-auto mb-4"></div>
              <div className="text-lg">
                <h6 className="font-bold text-lg mb-2">Address:</h6>
                <span className="text-info text-sm" >SILVER LAKE, United States 1941 Late Avenue Zip Code/Postal code: 03875</span>
                <p className="text-main underline mt-3"><a href="mailto:2nKZd@example.com">2nKZd@example.com</a></p>
              </div>
            </div>

            <div className="flex flex-col gap-4 animate__animated animate__fadeInLeft text-white text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#1F2937] mx-auto mb-4"></div>
              <div className="text-lg">
                <h6 className="font-bold text-lg mb-2">Company information:</h6>
                <span className="text-info text-sm" >Flowbite LLC Tax id: USXXXXXX</span>
                <p className="text-main underline mt-3"><a href="mailto:2nKZd@example.com">2nKZd@example.com</a></p>
              </div>
            </div> */}

          </div>
          <iframe src="https://yandex.uz/map-widget/v1/?ll=69.229258%2C41.348305&mode=search&oid=190141523653&ol=biz&z=18.48" className='w-full h-full min-h-96 rounded-xl'></iframe>
        </div>
      </div>

      <Contact isFull={true} />

    </div>

  );
};

export default ContactPage;