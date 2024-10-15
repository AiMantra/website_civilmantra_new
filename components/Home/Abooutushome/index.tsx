import { motion } from "framer-motion";
import Image from "next/image";

const Aboutus = () => {
    return (
        <>
            <div className="mb-20 relative">
                <div className="max-w-[88vw] mx-auto flex flex-wrap items-center justify-center px-4">
                    {/* Image Section */}
                    <div className="w-full sm:w-1/2 p-2 flex justify-center relative group">
                        <Image
                            src={"/images/Home/AboutusHome/Map5.png"}
                            alt="image"
                            width={450}
                            height={300}
                            className="object-cover max-w-full h-auto duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 transition-transform opacity-80 hover:opacity-90"
                        />
                        {/* Dots */}
                        <div className="absolute top-60 left-76 w-2 h-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-20 left-20 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-52 left-15 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-5 right-0 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* Add more dots as needed */}
                    </div>


                    {/* Text Section */}
                    <div className="w-full sm:w-1/2 max-lg:py-4 flex justify-center items-center">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1.5, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="rounded-l-3xl text-left"
                        >
                            <h1 className="text-2xl font-bold font-montserrat mb-2 text-red-600">About Us</h1>
                            <h2 className="mb-4 text-lg sm:text-xl font-bold">
                                CivilMantra Infracon Pvt. Ltd. is your one-stop shop for all your construction needs. We're a team of passionate engineers and consultants dedicated to exceeding client expectations.
                            </h2>
                            <p className="mb-4 text-base sm:text-lg">
                                CivilMantra Infracon Pvt. Ltd. transforms visions into reality. We're a passionate team of engineers and consultants providing comprehensive construction solutions. From design and planning to construction supervision, we leverage cutting-edge techniques to deliver exceptional results.
                            </p>
                            <h3 className="text-lg sm:text-xl font-bold">Learn more about our expertise and commitment to quality on our About Us page.</h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
