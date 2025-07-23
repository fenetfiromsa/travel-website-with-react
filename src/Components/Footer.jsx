
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex pt-28 gap-24 m-8">
      <div>
        <h3 className="font-bold text-start text-2xl pb-5">Jadoo.</h3>
        <p className="text-start">Book your trip in minute, get full control for much longer.</p>
      </div>

      {[
        { title: 'Company', items: ['About', 'Careers', 'Mobile'] },
        { title: 'Contact', items: ['Help/FAQ', 'Press', 'Affiliates'] },
        { title: 'More', items: ['Airlinefees', 'Airline', 'Low fare tips'] },
      ].map((col, i) => (
        <div key={i}>
          <h3 className="font-bold text-start text-2xl pb-5">{col.title}</h3>
          {col.items.map((item, j) => <p key={j}>{item}</p>)}
        </div>
      ))}

      <div>
        <div className="flex gap-2">
          <img src="/images/Social.png" className="h-10 w-10" />
          <img src="/images/Social (1).png" className="h-10 w-10" />
          <img src="/images/Social (2).png" className="h-10 w-10" />
        </div>
        <p className="mt-4">Discover our app</p>
        <div className="flex pt-5 gap-2">
          <img src="/images/Google Play.png" alt="Google Play" />
          <img src="/images/Play Store.png" alt="App Store" />
        </div>
      </div>
    </footer>
  );
}
