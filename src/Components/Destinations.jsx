
import React from 'react';

const destinations = [
  { img: 'Rectangle 14.png', title: 'Rome, Italy', price: '$5.42k', duration: '10 Days Trip' },
  { img: 'Rectangle 14.jpg', title: 'London, UK', price: '$4.2k', duration: '12 Days Trip' },
  { img: 'Rectangle 14 (1).png', title: 'Full Europe', price: '$15k', duration: '28 Days Trip' }
];

export default function Destinations() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 pt-28 bg-white">
      {destinations.map((dest, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg w-72 overflow-hidden">
          <img src={`/images/${dest.img}`} alt={dest.title} className="w-full h-48 object-cover rounded-t-2xl" />
          <div className="p-2 text-start">
            <h3 className="text-lg font-semibold text-black">{dest.title}</h3>
            <p className="text-gray-600">{dest.price}</p>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.657 16.657L13.414 12.414m0 0L9.172 8.172m4.242 4.242L6.343 6.343A8 8 0 1112 20a8 8 0 01-5.657-2.343z" />
              </svg>
              <span>{dest.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
