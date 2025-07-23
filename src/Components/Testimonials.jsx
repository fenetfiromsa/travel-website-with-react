// src/components/Testimonials.jsx
import React from 'react';

export default function Testimonials() {
  return (
    <div className="flex p-8 gap-10">
      <div className="bg-white mt-40">
        <p className="font-semibold text-start">TESTIMONIALS</p>
        <h1 className="font-volkhov font-bold text-5xl text-start pb-10">What People Say About Us</h1>
      </div>
      <div className="pt-40 pl-44">
        <img src="/images/Image.png" alt="testimonial avatar" />
        <div className="shadow-lg ml-10 p-10 rounded-2xl text-start">
          <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <p className="pt-7 font-bold">Mike Taylor</p>
          <p className="pt-1 text-gray-500">Lahore, Pakistan</p>
        </div>
      </div>
    </div>
  );
}
