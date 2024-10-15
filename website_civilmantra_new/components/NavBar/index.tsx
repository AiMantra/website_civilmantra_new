'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`w-full z-50 ${isScrolled ? 'fixed top-0 bg-grays' : 'relative'} transition-all duration-100`}>
      <div className={`${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'} absolute top-0 left-0 w-full h-full bg-grays transition-opacity duration-300`}></div>

      <div className="flex flex-row py-1 justify-between items-center text-center max-w-[88vw] mx-auto relative z-50">
        {/* Logo */}
        <div className="mb-2 sm:mb-0">
        
  <Image
    src={"/images/logo/logo2.png"}
    alt="Image"
    height={50}
    width={90}
    className="animate-spin-slow"
  />
</div>



        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black bg-white px-4 py-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop Navigation */}
        <div className="max-lg:hidden lg:flex flex-wrap gap-x-1 gap-y-2 font-medium text-lg text-white items-center">
          {[
            { name: "Home", url: "/" },
            { name: "About us", url: "/AboutUs" },
            { name: "Sectors", url: "/Sectors" },
            { name: "Project", url: "/Projects" },
            { name: "Innovation", url: "/innovation" },
            { name: "Career", url: "/Career" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className='hover:bg-white hover:text-black px-3 py-1 rounded-lg relative hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out  '
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/ContactUs"
            className="ml-2 px-6 py-2 text-white hover:border-white border-[1px] rounded-lg text-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-grays text-white flex flex-col rounded-md z-10">
            {[
              { name: "Home", url: "/" },
              { name: "About us", url: "/AboutUs" },
              { name: "Sectors", url: "/Sectors" },
              { name: "Project", url: "/projects" },
              { name: "Innovation", url: "/innovation" },
              { name: "Career", url: "/Career" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="px-3 py-2 hover:bg-gray-800"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/ContactUs"
              className="hover:bg-amber-600 bg-secondary px-10 py-3 rounded-md mt-2"
              onClick={closeMenu}
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
