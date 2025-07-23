
import React from 'react';

export default function Services() {
  return (
    <section className="bg-white mt-40 text-center">
      <p className="font-semibold">CATEGORY</p>
      <h1 className="font-volkhov font-bold text-5xl">We Offer Best Services</h1>

      <div className="flex justify-center gap-10 pt-20">
        {[
          { img: 'Group 48.png', title: 'Calculated Weather', desc: 'Built Wicket longer admire do barton vanity itself do in it.' },
          { img: 'Group 51.png', title: 'Best Flights', desc: 'Engrossed listening. Park gate sell they west hard for the.', shadow: true },
          { img: 'Group 50.png', title: 'Local Events', desc: 'Barton vanity itself do in it. Preferd to men it engrossed listening.' },
          { img: 'Group 49.png', title: 'Customization', desc: 'We deliver outsourced aviation services for military customers.' }
        ].map((item, i) => (
          <div key={i} className={`p-10 ${item.shadow ? 'shadow-md rounded-2xl' : ''}`}>
            <img src={`/images/${item.img}`} alt={item.title} />
            <p className="font-semibold pt-8">{item.title}</p>
            <p className="text-sm pt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
