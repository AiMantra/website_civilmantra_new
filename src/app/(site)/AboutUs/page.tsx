'use client'
import { motion } from "framer-motion";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import Top from "../../../../components/AboutUs/Top";
import Journey from "../../../../components/AboutUs/Journey";
import Dealin from "../../../../components/AboutUs/WeDealsIn";
import OurPresence from "../../../../components/AboutUs/OurPresence";
import Ourteam from "../../../../components/AboutUs/outeam";
import Gallery from "../../../../components/AboutUs/Gallery";

export default function Aboutus() {


  return (
    <>
     <Top/>
     <Ourteam/>
     <Journey/>
     <Dealin/>
     <OurPresence/>
     <Gallery/>
     


    
      

    </>
  );
}
