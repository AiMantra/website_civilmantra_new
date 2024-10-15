'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Home/Hero";
import Aboutus from "../../components/Home/Abooutushome";
import Business from "../../components/Home/BusinessHelp";
import Projects from "../../components/Home/Projects";
import Associate from "../../components/Home/Associate";

// Typing effect hook


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu


  return (
    <>

      <Hero />
      <Aboutus/>
      <Business/>
      <Projects/>
      <Associate/>
      
      




     
      

    </>
  );
}
