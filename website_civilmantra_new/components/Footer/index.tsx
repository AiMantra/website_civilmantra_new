'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Social media icons and links
const Socialmedia = [
    { image: "/images/Footer/fb.png", link: "https://www.facebook.com" },
    { image: "/images/Footer/insta.svg", link: "https://www.instagram.com" },
    { image: "/images/Footer/twitter.png", link: "https://www.twitter.com" },
    { image: "/images/Footer/linkedin.png", link: "https://www.linkedin.com" },
];

// Quick links and services
const Quicklinks = [
    { page: "Home", url: "/" },
    { page: "About us", url: "/AboutUs" },
    { page: "Sectors", url: "/" },
    { page: "Projects", url: "/Projects" },
    { page: "Achievements", url: "/" },
    { page: "Innovation", url: "/" },
    { page: "Career", url: "/" },
];

const Services = [
    { name: "Roads & Bridges" },
    { name: "Tunnels" },
    { name: "Transport Planning" },
    { name: "Urban Infrastructure" },
    { name: "Railway" },
    { name: "Expressway" },
    { name: "Metro" },
    { name: "Waterways" },
];

const Footer = () => {
    return (
        <>
            <div className="bg-grays text-black">
                <div className="max-w-[90vw] mx-auto py-5 px-4 sm:px-6 lg:px-8 flex flex-col max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-4 lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
                    {/* Logo and Address */}
                    <div className="lg:w-1/4 max-lg:mt-9">
                        <Image
                            src={"/images/logo/logo2.png"}
                            alt="Logo"
                            height={100}
                            width={100}
                            className="mb-4"
                        />
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0 }}
                            viewport={{ once: true }}>
                            <h1 className="max-w-[250px] text-sm sm:text-base md:text-lg lg:text-base font-bold text-gray-300 hover:text-primary cursor-pointer">
                                <a
                                    href="https://maps.app.goo.gl/qmEY2k2LH61BnPwq5?g_st=com.google.maps.preview.copy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    3rd Floor, Tower 3A, Dlf Corporate Greens, Sector 74A, Gurugram- 122004, India.
                                </a>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:w-1/4 lg:ml-28">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Quick Links</h1>
                        <div>
                            {Quicklinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}>
                                    <ul className="mt-2 text-sm sm:text-base md:text-lg lg:text-base text-gray-300">
                                        <li className="mt-1 cursor-pointer hover:text-primary">
                                            <Link href={link.url}>{link.page}</Link>
                                        </li>
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:w-1/4">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Services</h1>
                        <div>
                            {Services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}>
                                    <ul className="mt-2 text-sm sm:text-base md:text-lg lg:text-base ">
                                        <li className="mt-1 cursor-pointer hover:text-primary text-gray-300">
                                            {service.name}
                                        </li>
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info and Social Media */}
                    <div className="lg:w-1/4">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Contact Us</h1>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}>
                            <ul className="mt-2 text-sm sm:text-base md:text-lg lg:text-base text-gray-300">
                                <div className="flex gap-x-2 items-center max-w-full group">
                                    <Image
                                        src={"/images/Footer/email_3694289.png"}
                                        alt="Email"
                                        width={30}
                                        height={20}
                                        className="invert cursor-pointer group-hover:-translate-y-1 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                                    />
                                    <li className="text-gray-300 overflow-hidden group-hover:text-primary">
                                        <a href="mailto:services@civilmantra.com" className="max-w-full">
                                            services@civilmantra.com
                                        </a>
                                    </li>
                                </div>

                                <div className="flex gap-x-2 items-center mt-4 group">
                                    <Image
                                        src={"/images/Footer/phone-call_455705.png"}
                                        alt="Phone"
                                        width={30}
                                        height={20}
                                        className="invert cursor-pointer group-hover:-translate-y-1 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                                    />
                                    <li className="hover:text-gray-100 group-hover:text-primary text-lg">
                                        <a href="tel:+918120444777">+91 81204 - 44777</a>
                                    </li>
                                </div>
                            </ul>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.9 }}
                            viewport={{ once: true }}>
                            <div className="flex mt-5 gap-x-5">
                                {Socialmedia.map((social, index) => (
                                    <div key={index}>
                                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={social.image}
                                                alt="Social Media"
                                                height={20}
                                                width={20}
                                                className="invert cursor-pointer w-[35px] p-1 hover:-translate-y-1 hover:scale-125 transition-transform duration-300 ease-in-out"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t-2 border-gray-500 py-4">
                    <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 overflow-wrap break-word">
                        © {new Date().getFullYear()} All Rights Reserved. Website designed by AiMantra
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
