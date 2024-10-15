import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion"

// Custom Left Arrow
const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} left-[-30px]`}
            style={{ ...style, display: "block", zIndex: 10 }}
            onClick={onClick}
        >
            <FaArrowLeft size={30} className="text-black" />
        </div>
    );
};

// Custom Right Arrow
const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} right-[-30px]`}
            style={{ ...style, display: "block", zIndex: 10 }}
            onClick={onClick}
        >
            <FaArrowRight size={30} className="text-black" />
        </div>
    );
};

const keymembers = [
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Alina Burger",
        position: "Manager",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "John Doe",
        position: "Engineer",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Jane Smith",
        position: "Architect",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Michael Johnson",
        position: "Designer",
    },
    {
        image: "/images/AboutUs/Keymembers/helo.png",
        name: "Sarah Connor",
        position: "Developer",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Bruce Wayne",
        position: "CEO",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Bruce Wayne",
        position: "CEO",
    },
];

const Ourteam = () => {
    const [currentSlide, setCurrentSlide] = useState(Math.floor(keymembers.length / 2)); // Start at the center

    // Carousel settings for react-slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: Math.floor(keymembers.length / 2), // Start from the middle
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next); // Update the current slide
        },
        responsive: [
            {
                breakpoint: 1024, // Tablet size
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For smaller screens
                settings: {
                    slidesToShow: 1, // Show 1 member per slide on small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0 }}
                viewport={{ once: true }}>
                <h1 className="unihead mb-10  text-center">Our Members</h1>
            </motion.div>

            <div className="max-w-[88vw] mx-auto pb-10">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }} className="flex flex-col items-center ">

                    <Image
                        src="/images/AboutUs/Keymembers/download (3).png"
                        alt="Director"
                        width={150}
                        height={200}
                        className="rounded-xl object-cover "
                    />
                    <h1 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-primary">Mr. Shushil Bhardwaj</h1>
                    <p className="text-gray-700 text-md sm:text-lg lg:text-xl font-semibold">Director</p>
                </motion.div>

                {/* Carousel for key members */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }} className="max-w-[100vw] mx-auto mt-5">
                    <Slider {...settings}>
                        {keymembers.map((item, index) => (
                            <div
                                key={index}
                                className={` flex items-center justify-center rounded-xl gap-x-4 py-4 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-50"}`}
                                style={{ margin: '0 10px' }} // Added margin for spacing
                            >
                                <div className="shadow-xl w-[400px] mx-auto">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">{item.name}</h1>
                                    <p className="text-gray-700 text-md sm:text-lg lg:text-xl">{item.position}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </>
    );
};

export default Ourteam;
