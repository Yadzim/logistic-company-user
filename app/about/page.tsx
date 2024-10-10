import { Features, PageHeader } from '@/components';
import React from 'react';
import img from '@/assets/images/about-bg.png'
import imgbg from '@/assets/images/cta_bg.png'
import logistic from '@/assets/images/logistic.png'
import Image from 'next/image';



const AboutPage: React.FC = (): JSX.Element => {

  return (
    <div className="min-h-[50vh]">
      <PageHeader title='Biz haqimizda' description='Bizning kompaniya qanday' tag='About' img={img} />

      <div className="py-12">
        {/* <div className="container grid md:grid-cols-2 gap-12 max-md:px-4"> */}
        <div className="container d-f max-md:flex-wrap gap-12 max-md:px-4">
          <Image src={logistic} alt="ema" width={600} height={600} className='md:w-1/2' />

          <div className="md:w-1/2">

            <h6 className='text-main font-bold text-lg md:text-xl' >Biz haqimizda</h6>
            <h1 className="text-2xl md:text-4xl font-bold mb-12 mt-3">EMAEX INTERNATIONAL LOGISTICS jamoamiz 2017- yildan buyon xizmat ko’rsatib kelmoqda</h1>
            <h2>&nbsp;&nbsp;&nbsp; EMAEX INTERNATIONAL LOGISTICS jamoasi 2017- yildan buyona XITOY, ROSSIYA,
              TURKIYA va O’ZBEKISTON bozorlarida faoliyat olib borib kelyabdi. Kompaniyamiz
              asosiy ofisi XitoyXalq Respublikasi, Guanzhou shahrida joylashgan bo’lib, O’zbekistonlik
              mijozlarimiz uchun Toshkent fillialida xizmat ko’rsatamiz.</h2>
            <br />
            {/* <p>&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta voluptates labore eaque blanditiis
              commodi voluptatibus cupiditate ex debitis impedit tenetur dolorem odit animi doloribus mollitia, sapiente vitae, consequuntur
              ipsa cum a quis similique error non! Odit minima aliquam consectetur est saepe quibusdam numquam! Quos iusto nihil explicabo
              assumenda aperiam laboriosam possimus maiores ipsum animi odit asperiores quae praesentium obcaecati sequi dolores eveniet
              atque ex, quibusdam dolorem accusantium? Nesciunt architecto excepturi, eius harum ipsum perferendis a dolore nostrum alias
              nihil ducimus eum exercitationem, nam voluptatem necessitatibus labore. Explicabo doloribus aperiam ducimus culpa asperiores?</p> */}
          </div>

        </div>
      </div>

      <div className="py-12 bg-center" style={{ background: `linear-gradient(35deg, #00000099, #00000099), url(${imgbg.src})` }}>
        {/* <div className="container flex-center flex-wrap gap-24 text-white"> */}
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-24 text-white">

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >100+</h3>
            <p className='text-lg font-semibold' >Mijozlarimiz soni</p>
          </div>

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >500+</h3>
            <p className='text-lg font-semibold' >Muvaffaqiyatli loyihalar</p>
          </div>

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >54</h3>
            <p className='text-lg font-semibold' >Jamoa a’zolari</p>
          </div>

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >1000+</h3>
            <p className='text-lg font-semibold' >Dunyo bo’ylab xaridorlar</p>
          </div>

        </div>
      </div>

      <Features />

    </div>
  );
};

export default AboutPage;