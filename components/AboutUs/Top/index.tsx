import Image from "next/image";
import { motion } from "framer-motion";

const Top = () => {
    return (
        <div className="relative w-full h-[90vh] top-[-82px]">
            {/* Background image */}
            <Image
                src={"/images/AboutUs/Top/download (1).jpg"}
                alt="Background"
                width={500}
                height={500}
                className="w-full h-full absolute top-0 left-0 object-cover -z-10"
            />

            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            {/* Centered Heading Content */}
            <div className="flex justify-center items-center h-full z-10 px-4 max-w-[88vw] mx-auto">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className=" max-w-[950px] mx-auto"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary my-5">
                        A Legacy Etched in <span className="text-primary">Stone</span>
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                        The Enduring Power of Civil Engineering
                    </h2>
                    <p className="mt-5 text-base max-sm:hidden sm:text-lg md:text-xl leading-relaxed text-white">
                        Civil engineering is a testament to human ingenuity. From the pyramids of Giza to the Golden Gate Bridge, civil engineers have shaped our world by designing and building the structures that define civilization. Throughout history, this field has continuously evolved, adapting to new technologies and materials. Today, civil engineers are at the forefront of sustainable practices, smart infrastructure, and resilient design, ensuring a future where our built environment works in harmony with the natural world.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Top;
