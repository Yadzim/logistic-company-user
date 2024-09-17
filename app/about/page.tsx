import { Features, PageHeader } from '@/components';
import React from 'react';
import img from '@/assets/images/about-bg.png'
import imgbg from '@/assets/images/cta_bg.png'
import logistic from '@/assets/images/logistic.png'
import Image from 'next/image';



const AboutPage: React.FC = (): JSX.Element => {

  return (
    <div className="min-h-[50vh]">
      <PageHeader title='About Us' description='This is about page' tag='About' img={img} />

      <div className="py-12">
        <div className="container grid md:grid-cols-2 gap-12 max-md:px-3">
          <Image src={logistic} alt="image" width={600} height={600} />

          <div className="">

            <h6 className='text-main font-bold text-lg md:text-xl' >About Us</h6>
            <h2 className="text-2xl md:text-5xl font-bold mb-12 mt-3">We Are Trustedistics Company Since 1990</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium in deleniti atque iusto dolore quo a vero officiis,
              possimus, repellat laudantium eaque! Dolores error veritatis eligendi nostrum excepturi dignissimos nobis officiis maxime
              optio praesentium fuga iste suscipit quibusdam, harum voluptatem eaque adipisci fugiat temporibus voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, assumenda at. Assumenda dicta voluptates labore eaque blanditiis
              commodi voluptatibus cupiditate ex debitis impedit tenetur dolorem odit animi doloribus mollitia, sapiente vitae, consequuntur
              ipsa cum a quis similique error non! Odit minima aliquam consectetur est saepe quibusdam numquam! Quos iusto nihil explicabo
              assumenda aperiam laboriosam possimus maiores ipsum animi odit asperiores quae praesentium obcaecati sequi dolores eveniet
              atque ex, quibusdam dolorem accusantium? Nesciunt architecto excepturi, eius harum ipsum perferendis a dolore nostrum alias
              nihil ducimus eum exercitationem, nam voluptatem necessitatibus labore. Explicabo doloribus aperiam ducimus culpa asperiores?</p>
          </div>

        </div>
      </div>

      <div className="py-12 bg-center" style={{ background: `linear-gradient(35deg, #00000099, #00000099), url(${imgbg.src})` }}>
        <div className="container flex-center flex-wrap gap-24 text-white">

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >123</h3>
            <p className='text-lg font-semibold' >Happy Clients</p>
          </div>

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >534</h3>
            <p className='text-lg font-semibold' >Projects Done</p>
          </div>

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >54</h3>
            <p className='text-lg font-semibold' >Team Members</p>
          </div>

          <div className="text-center py-2 px-4 rounded-xl backdrop-blur-lg">
            <h3 className="text-main text-5xl font-bold mb-3" >1435</h3>
            <p className='text-lg font-semibold' >Worldwide Clients</p>
          </div>

        </div>
      </div>

      <Features />

    </div>
  );
};

export default AboutPage;