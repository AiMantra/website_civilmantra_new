import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom Hook for Typing Effect
const useTypingEffect = (fullText: string, speed: number = 20, delay: number = 400) => {
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        if (!fullText) return;

        console.log("Full text being typed: ", fullText); // Log the full text for debugging

        // Reset displayedText whenever fullText changes
        setDisplayedText("");

        let index = 0;

        const startTyping = () => {
            const typingInterval = setInterval(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                index++;
                if (index === fullText.length) {
                    clearInterval(typingInterval);
                }
            }, speed);
        };

        // Start typing after the specified delay
        const delayTimeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(delayTimeout); // Clear the timeout to avoid memory leaks
            clearInterval(delayTimeout); // Clear the typing interval as well
        };
    }, [fullText, speed, delay]);

    return displayedText;
};

const Hero = () => {
    // Full text for the paragraph
    const Text =
        "At CivilMantra, we understand the importance of turning your vision into reality. We are a dedicated team of engineers and consultants with a passion for excellence in project consultancy, construction management, and structural design. We partner with our clients to deliver exceptional results, combining innovative solutions with the highest quality standards. Leverage our expertise to bring your next project to life.";

    // Apply the typing effect
    const typeText = useTypingEffect(Text, 20); // Correct text is being passed here

    return (
        <>
            <div className="relative w-full h-[90vh] top-[-82px]">
                {/* Background video */}
                <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted>
                    <source src="/videos/Home/bgvideo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

                {/* Centered Heading Content */}
                <div className="flex justify-center items-center h-full relative z-10">
                    <div className="mx-auto text-white max-w-[950px] px-4">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-semibold leading-7 lg:text-xl md:text-lg sm:text-base font-sans">We make a Difference</h2>
                            <h1 className="mt-3 lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-4xl">
                                <span className="text-secondary">We Don't Just Build</span>{" "}
                                <span className="text-red-600 text-6xl">Structures</span>
                            </h1>
                            <h2 className="mt-5 lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-4xl text-secondary">
                                We Build a Better <span className="text-red-600 text-6xl">Tomorrow</span>
                            </h2>
                        </motion.div>

                        {/* Typing animation for paragraph */}
                        <motion.p
                            className="mt-5 font-normal leading-7 lg:text-xl md:text-lg sm:text-base max-sm:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3 }}
                        >
                            {typeText} 
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Sliding Section */}
            <div className="bg-primary overflow-hidden top-[-82px] relative">
                <ul className="flex gap-x-52 py-2 whitespace-nowrap animate-slide text-white">
                    <li>Roads & Bridges</li>
                    <li>Tunnels</li>
                    <li>Transport Planning</li>
                    <li>Urban Infrastructure</li>
                    <li>Railway</li>
                    <li>Expressway</li>
                    <li>Metro</li>
                    <li>Waterways</li>
                </ul>

                <style jsx>{`
                    @keyframes slide {
                        0% {
                            transform: translateX(10%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-slide {
                        animation: slide 20s linear infinite;
                    }
                `}</style>
            </div>
        </>
    );
};

export default Hero;
