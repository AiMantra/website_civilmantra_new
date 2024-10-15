import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";

const data = [
    {
        image: "/images/Home/Projects/teammembers.png",
        id: 300,
        name: "TEAM MEMBERS",
    },
    {
        image: "/images/Home/Projects/growingscale.png",
        id: 10,
        name: "GROWING SCALE",
    },
    {
        image: "/images/Home/Projects/clients.png",
        id: 350,
        name: "HAPPY CLIENTS",
    },
    {
        image: "/images/Home/Projects/projects.png",
        id: 1900,
        name: "PROJECTS",
    }
];

const Projects = () => {
    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="my-28 bg-primary">
            <div className="flex max-[476px]:grid-cols-1 max-lg:grid max-lg:grid-cols-2 gap-6 max-w-[88vw] px-4 mx-auto justify-between py-20 text-white ">
                {data.map((item, index) => (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        key={index}
                        className="flex flex-col "
                    >
                        <div className="group cursor-pointer max-lg:mt-5">
                            <div className="flex items-center gap-x-2 justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={70}
                                    height={40}
                                    className="rounded-xl"
                                />
                                <h1 className="text-[36px] sm:text-[48px] text-center font-extrabold transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
                                    {startCounting && <CountUp start={0} end={item.id} duration={2} delay={index * 0.2} />}+
                                </h1>
                            </div>
                            <p className="text-[20px] sm:text-[25px] font-bold pt-4 max-lg:text-center ">
                                {item.name}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
