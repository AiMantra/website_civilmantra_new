import Image from "next/image";
import { motion } from "framer-motion";

const Dealsin = () => {
    return (
        <>
            <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: 0 }}
                            viewport={{ once: true }}>
                <h1 className="unihead">We Deals In</h1>
            </motion.div>


            <div className="py-10 my-10 ">
                <div className="flex max-w-[88vw] mx-auto justify-between">
                    <div className="w-1/2">
                        <div className="flex gap-x-5 mt-6">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0 }}
                                viewport={{ once: true }}>
                                <Image
                                    src={"/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg"}
                                    alt=""
                                    width={500}
                                    height={350}
                                    className="rounded-lg"
                                />
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0 }}
                                viewport={{ once: true }}>
                                <Image
                                    src={"/images/AboutUs/journey/pexels-dariabuntaria-2678104 (1).jpg"}
                                    alt=""
                                    width={350}
                                    height={300}
                                    className="rounded-lg relative ml-[-142px] top-60"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-1/2">

                        <motion.h2  
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0 }}
                            viewport={{ once: true }}
                            className="text-[18px] mb-4"><span className="text-secondary">CIVIL</span><span className="text-primary">MANTRA</span> is providing services in various sectors like Roads & Bridges, Expressways, Tunnels, Irrigation, Urban Development. The team of CIVILMANTRA has vast experience in designing various types of roads. Currently, we are executing detailed Project Reports/ Detailed Design of over 3500 km of major NH projects and providing consultancy for another 32,000 km of NH/SH.
                        </motion.h2>

                        <motion.ul
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                             className="list-disc text-secondary ml-5 mb-4 marker:text-primary">
                            <li>Pre-Feasibility Studies</li>
                            <li>Pre & Post Tender Engineering Services</li>
                            <li>Proof & Safety Consultant</li>
                            <li>Detailed Project Report (DPR)</li>
                            <li>Project Management Consultancy (PMC)</li>
                            <li>Authority Engineer (AE)</li>
                        </motion.ul>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }} className="text-base">
                            The following abstract shows the complete order book scenario: CivilMantra is an Engineering & Management Consultancy providing services for Design and Construction Supervision, Pre-bid services for National Highway Authority of India, Ministry of Surface Transport, Government of India, and Private Developers/ Contractors.
                        </motion.p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Dealsin;