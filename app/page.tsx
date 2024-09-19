import { Contact, EmblaCarousel, Features, Services } from "@/components";

const SLIDE_ELEMENT = <div className="card bg-white rounded-lg p-4 shadow-md- my-10">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laboriosam mollitia temporibus ipsa provident quaerat explicabo officiis eos eveniet? Eveniet quae voluptatum suscipit.</p>

  <div className="flex-between gap-4 mt-4">
    <div className="d-f gap-3">
      <i className="fa fa-user-circle text-5xl opacity-30"></i>
      <div className="">
        <h6 className="text-lg font-semibold" >John Doe</h6>
        <span className="text-info text-sm" >Web Developer</span>
      </div>
    </div>

    <i className="fas fa-quote-right text-5xl opacity-10"></i>
  </div>
</div>
const OPTIONS = { loop: true }
const SLIDES = [...Array(5)].map(() => SLIDE_ELEMENT)

export default function Home() {
  return (
    <div className="">
      <div className="hero d-f px-4 md:px-24 text-white">
        <div className="md:max-w-3xl">
          <h1 className="md:text-[5rem] text-5xl font-bold">Safe & Reliable <span className="text-main">Logistics</span> Solution!</h1>
          <p className="py-6 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <button className="py-3 px-12 rounded-full border border-main text-main hover:text-white hover:bg-main transition-colors">Contact Us</button>
        </div>
      </div>

      <div className="bg-gray-200 py-6 md:py-12">
        <div className="container flex-center max-md:flex-wrap gap-4 md:gap-24 max-md:text-center">

          <div className="d-f max-md:flex-col gap-2 md:gap-8 max-md:w-[calc(100%/2-1rem)] animate__animated animate__fadeInBottomLeft">
            {/* <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-400"></div> */}
            <i className="fa fa-headset text-main/90 text-4xl md:text-5xl"></i>
            <div className="">
              <span className="max-md:text-sm text-info" >Call Us Anytime</span>
              <p className="text-md md:text-2xl font-bold md:mt-2">+ (123) 1800-567-8990</p>
            </div>
          </div>
          <div className="d-f max-md:flex-col gap-2 md:gap-8 max-md:w-[calc(100%/2-1rem)] animate__animated animate__fadeInUp">
            {/* <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-400"></div> */}
            <i className="far fa-clock text-main/90 text-4xl md:text-5xl"></i>
            <div className="">
              <span className="max-md:text-sm text-info" >Sunday CLOSED</span>
              <p className="text-md md:text-2xl font-bold md:mt-2">Mon - Sat 8.00 - 18.00</p>
            </div>
          </div>
          <div className="d-f max-md:flex-col gap-2 md:gap-8 max-md:w-[calc(100%/2-1rem)]- animate__animated animate__fadeInBottomRight">
            {/* <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-400"></div> */}
            <i className="fa fa-map-marked-alt text-main/90 text-4xl md:text-5xl"></i>
            <div className="">
              <span className="max-md:text-sm text-info" >Columbia, SC 29201</span>
              <p className="text-md md:text-2xl font-bold md:mt-2">USA, New York - 10620</p>
            </div>
          </div>

        </div>
      </div>

      <Services count={3} />

      <Features />

      <Contact />

      <div className="bg-[#F4F4F4]-">
        <div className="container py-8 md:py-24 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our <span className="text-main">Clients</span> Say</h2>
            <p className="text-lg md:text-2xl text-info mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officia.</p>
          </div>

          <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        </div>
      </div>


    </div>
  );
}
