const journeydata = [
    {
        year: "16",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "17",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "18",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "19",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "20",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "21",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "22",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "23",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "24",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    }
]

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Journey = () => {
    const journeyRef = useRef<HTMLDivElement>(null); // Reference to the black div

    return (
        <>  
            <div>
                <h1 className="unihead my-20"> Our Achievements</h1>
            </div>
            <div
                className="overflow-hidden h-[100vh] flex mb-20 bg-black"
                style={{ backgroundImage: "url('/images/Home/hello.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute  left-0 w-full h-full bg-black opacity-70 "></div>
                {/* Static 20 */}
                <div className="max-w-[88vw] mx-auto py-52  text-white flex justify-between items-center z-10">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0 }}
                        viewport={{ once: true }}
                        className=""
                    >
                        <h1 className="text-[200px]">20 <hr /></h1>
                    </motion.div>


                    {/* Scrolling text */}
                    <div className="flex flex-col overflow-y-scroll h-[600px] scrollbar-hidden group "> {/* Adjust height to allow scrolling */}
                        {journeydata.map((item, index) => (
                            <div key={index}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex my-[149px] gap-x-24">

                                    <h1 className="text-[200px]">{item.year} <hr /></h1>
                                    <Image
                                        src={item.image}
                                        alt="helo"
                                        height={300}
                                        width={300}
                                        className="rounded-xl   "
                                    />
                                    <h2 className="text-[30px]">{item.info}</h2>

                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    );
};

export default Journey;
