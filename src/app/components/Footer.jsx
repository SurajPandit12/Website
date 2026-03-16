import React from 'react';

const Footer = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact me", href: "#Contact" }
  ];
  return (
    <footer className="mt-20 border-t py-8 border-neutral-700 flex justify-between pt-4  px-2">
      <div className='flex  gap-2 '>
       
        <h1>All right reserved © by S...j P.....</h1>
      </div>
      <div className='flex gap-4'>
        {navItems.map((item, index) => (
          <a key={index} className="text-red-500 hover:text-blue-300 hover:scale-105 transition-all" href={item.href}>{item.label}</a>
        ))}
      </div>
    </footer>
  )
}

export default Footer;