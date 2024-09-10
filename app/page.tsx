import { Services } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="hero d-f px-24 text-white">
        <div className="max-w-3xl">
          <h1 className="text-[5rem] font-bold">Safe & Reliable <span className="text-main">Logistics</span> Solution!</h1>
          <p className="py-6 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      <div className="bg-gray-200 py-12">
        <div className="container flex-center gap-24">

          <div className="d-f gap-8">
            <div className="w-20 h-20 rounded-full bg-gray-400"></div>
            <div className="">
              <span className="text-info" >Call Us Anytime</span>
              <p className="text-2xl font-bold mt-2">+ (123) 1800-567-8990</p>
            </div>
          </div>

          <div className="d-f gap-8">
            <div className="w-20 h-20 rounded-full bg-gray-400"></div>
            <div className="">
              <span className="text-info" >Sunday CLOSED</span>
              <p className="text-2xl font-bold mt-2">Mon - Sat 8.00 - 18.00</p>
            </div>
          </div>

          <div className="d-f gap-8">
            <div className="w-20 h-20 rounded-full bg-gray-400"></div>
            <div className="">
              <span className="text-info" >Columbia, SC 29201</span>
              <p className="text-2xl font-bold mt-2">USA, New York - 10620</p>
            </div>
          </div>

        </div>
      </div>

      <Services />
    </div>
  );
}
