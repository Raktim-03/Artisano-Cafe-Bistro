import {motion} from "framer-motion"
import AboutImage from "../assets/about_left.png";
import CoffeeImage from "../assets/coffee.png"
import PastaImage from "../assets/pasta.png"
import TiramisuImage from "../assets/tiramisu.png"
import { useState } from "react";

//animations
const fadeUp = {
    hidden :{
        opacity : 0,
        y : 50
    },
    visible:{
        opacity : 1,
        y:0,
        transition:{
            duration : 0.8,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariant = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const fadeLeft = {
    hidden:{
        opacity : 0,
        x:-40,
    },
    visible :{
        opacity :1,
        x:0,
        transition:{
            duration:0.8,
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const About =()=>{
    const [activeImage, setActiveImage] = useState("coffee");
    return (
        <section id="our-story" className="py-20 bg-ivory overflow-x-hidden">

            <div className="max-w-screen-2xl mx-auto px-10 md:px-8">

                <div className="grid lg:grid-cols-12 gap-10 items-center">

                    {/* Left Image */}
                    <motion.div
                        className="lg:col-span-4"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                    >

                        <div className="overflow-hidden rounded-t-[8rem] rounded-b-[2rem]">

                            <img
                                src={AboutImage}
                                alt="Artisano Interior"
                                className="w-full h-[520px] object-cover"
                            />

                        </div>
                    </motion.div>


                    {/* Story Text */}
                    <motion.div
                        className="lg:col-span-3 flex flex-col gap-6"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                            OUR STORY →
                        </p>

                        <h2 className="font-heading text-5xl xl:text-6xl leading-tight text-heading">
                            More Than
                            <br />
                            Just a <span className="text-gold/100"> Cafe</span>
                        </h2>

                        <p className="text-body leading-relaxed">
                            Artisano is a celebration of culture, conversations
                            and coffee. A space where every detail is crafted to
                            make your moments unforgettable.
                        </p>

                        <button
                            className="
                                w-fit
                                uppercase
                                tracking-[0.1em]
                                font-medium
                                text-heading
                                hover:text-gold
                                transition-all
                                duration-300
                            "
                        >
                            DISCOVER OUR JOURNEY →
                        </button>
                    </motion.div>

                    {/* Signature Picks */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col gap-6"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                            SIGNATURE PICKS →
                        </p>

                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once : true}}
                            >
                            {/* Coffee */}
                            <motion.div
                                variants={cardVariant}
                                className="
                                    group
                                    relative
                                    h-[360px]
                                    sm:h-[320px]
                                    xl:h-[360px]
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    cursor-pointer
                                "
                            >
                                <img
                                    src={CoffeeImage}
                                    alt="Spanish Latte"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-all
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-5 left-5 right-5 text-white">

                                    <h3 className="font-medium text-base sm:text-lg">
                                        Espresso
                                    </h3>

                                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                                        Velvety smooth with a hint of cinnamon
                                    </p>

                                    <p className="text-gold font-medium mt-3">
                                        ₹220
                                    </p>

                                </div>
                            </motion.div>

                            {/* Tiramisu */}
                            <motion.div
                                variants={cardVariant}
                                className="
                                    group
                                    relative
                                    h-[360px]
                                    sm:h-[320px]
                                    xl:h-[360px]
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    cursor-pointer
                                "
                            >
                                <img
                                    src={TiramisuImage}
                                    alt="Biscoff Cheesecake"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-all
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-5 left-5 right-5 text-white">

                                    <h3 className="font-medium text-base sm:text-lg">
                                        Tiramisu
                                    </h3>

                                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                                        A lotus temptation you'll love
                                    </p>

                                    <p className="text-gold font-medium mt-3">
                                        ₹250
                                    </p>

                                </div>
                            </motion.div>

                            {/* Cold Brew */}
                            <motion.div
                                variants={cardVariant}
                                className="
                                    group
                                    relative
                                    h-[360px]
                                    sm:h-[320px]
                                    xl:h-[360px]
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    cursor-pointer
                                "
                            >
                                <img
                                    src={PastaImage}
                                    alt="Cinnamon Cold Brew"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-all
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-5 left-5 right-5 text-white">

                                    <h3 className="font-medium text-base sm:text-lg">
                                        Pasta
                                    </h3>

                                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                                        Cold, bold and beautifully brewed
                                    </p>

                                    <p className="text-gold font-medium mt-3">
                                        ₹210
                                    </p>

                                </div>
                            </motion.div>


                    </motion.div>

                    </motion.div>

                </div>

            </div>


</section>

    )
}


export default About;