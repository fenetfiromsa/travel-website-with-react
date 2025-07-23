import React from 'react';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
import Destinations from '../Components/Destinations';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

export default function HomePage() {
  return (
    <div className="bg-white text-center p-8 bg-[url('/images/Decore.png')] bg-no-repeat bg-right-top bg-auto overflow-hidden">
      <Navbar />

      
      <section className="flex justify-center overflow-hidden mt-5 gap-48">
        <div className="mt-10 ml-4 text-left">
          <img src="/images/plane.png" className="ml-[390px]" alt="Plane" />
          <p className="text-red-500 font-bold -mt-36">Best Destinations around the world</p>
          <h1 className="font-bold text-6xl font-volkhov text-blue-950">
            Travel, enjoy<br />
            <img src="/images/Vector.png" alt="vector underline" />
            and live a new <br />
            and full life
          </h1>
          <p className="font-poppins text-base text-gray-700 font-light mt-4">
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br />
            sell they west hard for the.
          </p>
          <div className="mt-5 flex items-center gap-6">
            <button className="bg-yellow-600 text-white w-[170px] h-[60px]">Find out more</button>
            <button className="flex items-center gap-2">
              <img src="/images/Play button.png" className="h-16" alt="Play Demo" />
              <span>Play Demo</span>
            </button>
          </div>
        </div>
        <div className="-ml-52">
          <img src="/images/Traveller 1.png" className="w-[450px] h-[500px]" alt="Traveller" />
        </div>
      </section>

      <Services />
      <Destinations />

      
      <section className="flex p-10">
        <div className="bg-white mt-40 text-left">
          <p className="font-semibold">Easy and fast</p>
          <h1 className="font-volkhov font-bold text-5xl pb-10">
            Book your next trip <br /> in 3 easy steps
          </h1>

          {[
            { icon: 'Group 7.png', title: 'Choose Destination' },
            { icon: 'Group 12.png', title: 'Make Payment' },
            { icon: 'Group 11.png', title: 'Reach airport on selected date' },
          ].map((step, i) => (
            <div key={i} className="flex items-start mb-6">
              <img src={`/images/${step.icon}`} className="h-14" alt={step.title} />
              <div className="pl-10">
                <p className="font-semibold">{step.title}</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="h-80 rounded-2xl shadow-lg w-80 mt-56 ml-72 p-5 text-left">
          <img src="/images/Rectangle 17.jpg" className="rounded-2xl" alt="Trip" />
          <p className="mt-2 font-semibold">Trip to Greece</p>
          <p>14-29 June | by Robbin</p>
          <div className="flex pt-5 pb-5 gap-5">
            <img src="/images/LEAF.png" alt="leaf" />
            <img src="/images/map icon.png" alt="map" />
            <img src="/images/send.png" alt="send" />
          </div>
          <div className="flex items-center">
            <img src="/images/building 1.png" alt="building" />
            <p className="pl-5">24 people going</p>
          </div>
        </div>
      </section>

      <Testimonials />

      
      <div class="flex m-5 gap-28 object-center ml-32">
        <img src="images/image 27.png" className="w-36 h-32" />
        <img src="images/image 28.png" className="w-36 h-32" />
        <img src="images/Group 63.png" className="w-36 h-32 mt-8" />
       <img src="images/image 30.png" className="w-16 h-10 mt-10" />
       <img src="images/image 31.png" className="w-16 h-10 mt-10" />
      
</div>
       
      <div className="bg-blue-100 rounded-2xl h-64 w-[1000px] mx-auto mt-10 p-8 text-center">
        <p className="font-semibold text-2xl">
          Subscribe to get information, latest news and other<br />
          interesting offers about Jadoo
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-72 px-4 py-2 rounded-lg border"
          />
          <button className="rounded-2xl bg-red-500 text-white px-10 py-2">Subscribe</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
