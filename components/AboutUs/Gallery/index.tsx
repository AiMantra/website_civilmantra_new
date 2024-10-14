import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Year and image data
const data = [
    {
        year: 2016,
        images: [
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2017,
        images: [
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2018,
        images: [

            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2019,
        images: [

            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2020,
        images: [
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2021,
        images: [

            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2022,
        images: [

            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2023,
        images: [
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        year: 2024,
        images: [

            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
];

const Gallery = () => {
    const [selectedYear, setSelectedYear] = useState(2016); // State to track selected year

    // Get images for the currently selected year
    const currentYearData = data.find((yearData) => yearData.year === selectedYear);

    return (
        <div className="max-w-[88vw] mx-auto">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}>
                <h1 className="unihead mt-28">Our Gallery</h1>
            </motion.div>

            {/* Year selection buttons */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }} className="flex justify-center gap-8 mb-8">
                {data.map((yearItem) => (
                    <button
                        key={yearItem.year}
                        className={`px-4 py-2 mt-10 
                        ${selectedYear === yearItem.year
                                ? 'bg-primary text-white relative -translate-y-1 scale-125 transition-transform duration-300 ease-in-out'
                                : '  bg-transparent text-gray-400 hover:bg-primary hover:text-white  transition-colors duration-300 ease-in-out'} 
                        rounded-lg`}
                        onClick={() => setSelectedYear(yearItem.year)} // Update selected year on click
                    >
                        {yearItem.year}
                    </button>

                ))}
            </motion.div>

            {/* Gallery Grid with Transition */}
            <AnimatePresence mode="wait"> {/* mode="wait" ensures that one element leaves before the new one enters */}
                <motion.div
                    key={selectedYear} // This key ensures the transition happens when the selected year changes
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }} // Adjust the duration of the transition
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center"
                >
                    {currentYearData?.images.map((item, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }} key={index} className="flex justify-center items-center mb-10">
                            <div>
                                <Image
                                    src={item.image}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={500}
                                    height={150}
                                    style={{ width: '400px', height: '250px', objectFit: 'cover', borderRadius: '0.5rem' }}
                                />
                            </div>
                        </motion.div>

                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
