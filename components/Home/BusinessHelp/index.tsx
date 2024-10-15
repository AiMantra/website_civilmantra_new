import { motion } from "framer-motion";
import Image from "next/image";

const businessdata = [
    {
        image: "/images/Home/BusinessHelp/tool1.svg",
        head: "Experience You Can Trust",
        paragraph: "Backed by years of industry experience, our team of seasoned professionals brings a wealth of knowledge and expertise to every project.",
    },
    {
        image: "/images/Home/BusinessHelp/pmicon.svg",
        head: "Sustainable Solutions",
        paragraph: "We prioritize sustainable practices and eco-friendly materials to create structures that are not only functional but also responsible.",
    },
    {
        image: "/images/Home/BusinessHelp/ieicon (4).svg",
        head: "Safety First",
        paragraph: "We are unwavering in our commitment to safety, implementing rigorous protocols and procedures to protect our workers and ensure a safe work environment.",
    },
    {
        image: "/images/Home/BusinessHelp/ieicon (4).svg",
        head: "Communication is Key",
        paragraph: "We believe in clear and consistent communication, keeping you informed throughout every stage of the project.",
    },
    {
        image: "/images/Home/BusinessHelp/tool1.svg",
        head: "On Time and On Budget",
        paragraph: "We understand the importance of adhering to deadlines and budgets. Our efficient project management ensures timely completion without compromising on quality.",
    },
    {
        image: "/images/Home/BusinessHelp/pmicon.svg",
        head: "Exceeding Expectations",
        paragraph: "We are driven to exceed your expectations, delivering exceptional results that go beyond the ordinary.",
    },
];

const Business = () => {
    return (
        <>
            <div className="max-w-[88vw] mx-auto mb-20">
                {/* Header Section */}
                <div className="lg:max-w-[70vw] text-center mx-auto mb-10">
                    <h1 className="unihead">How can we help your Business?</h1>
                    <p className="unip">
                        From concept to completion, CivilMantra Infracon offers a comprehensive suite of services to turn your construction goals into reality, combining expert engineering with innovative solutions and a commitment to the highest quality standards.
                    </p>
                </div>

                {/* Business Data Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 my-20 cursor-pointer">
                    {businessdata.map((item, index) => (

                        <div
                            key={index}
                            className="group bg-white hover:bg-gradient-to-r from-red-400 to-red-800 p-6 rounded-lg shadow-md hover:shadow-lg duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 transition-transform hover:text-white"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}>
                                {/* Image Section */}
                                <div className="mb-4 w-[110px] h-auto bg-opacity-20 rounded-xl">
                                    <Image
                                        src={item.image}
                                        alt={item.head}
                                        layout="responsive"
                                        width={100}
                                        height={150}
                                        className="group-hover:filter group-hover:invert object-cover"
                                    />
                                </div>



                                {/* Content Section */}
                                <h2 className="text-xl font-semibold mb-3 ">{item.head}</h2>
                                <p className="text-gray-600 mt-5 group-hover:text-white">{item.paragraph}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default Business;
