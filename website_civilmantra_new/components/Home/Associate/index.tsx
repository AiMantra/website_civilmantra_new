import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { image: "/images/Home/Associates/Adani_2012.png" },
  { image: "/images/Home/Associates/ARCONS.png" },
  { image: "/images/Home/Associates/Border_Roads_Organisation.png" },
  { image: "/images/Home/Associates/CDS.png" },
  { image: "/images/Home/Associates/GHV.png" },
  { image: "/images/Home/Associates/GMDA.png" },
  { image: "/images/Home/Associates/MCG.png" },
  { image: "/images/Home/Associates/MPRDC.jpg" },
  { image: "/images/Home/Associates/NHAI-Black.png" },
  { image: "/images/Home/Associates/Sadbhav_Engineering.png" },
];

const Associate = () => {
  const [scrollSpeed, setScrollSpeed] = useState(20); // Default speed

  useEffect(() => {
    // Update scroll speed based on screen size
    const updateScrollSpeed = () => {
      if (window.innerWidth <= 1024) { // max:lg breakpoint
        setScrollSpeed(10); // Increase speed for smaller screens
      } else {
        setScrollSpeed(20); // Normal speed for larger screens
      }
    };

    updateScrollSpeed(); // Check on initial load
    window.addEventListener('resize', updateScrollSpeed); // Check on resize

    return () => window.removeEventListener('resize', updateScrollSpeed);
  }, []);

  return (
    <div className="my-28 overflow-hidden">
      <motion.div
        className="flex space-x-4"
        // Animate the scroll effect to the left in a loop
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: scrollSpeed, repeat: Infinity }} // Infinite loop scroll
      >
        {/* Duplicate the images to create a seamless loop */}
        {[...images, ...images].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={item.image}
              alt="Associate logo"
              width={200}
              height={200}
              className="object-contain w-[200px] h-[200px]" // Fixed size
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Associate;
