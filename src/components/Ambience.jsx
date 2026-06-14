import Ambience1 from "../assets/int_1.png"
import Ambience2 from "../assets/int_2.png"
import Ambience3 from "../assets/int_3.png"
import Ambience4 from "../assets/int_4.png"
import CoffeeImage from "../assets/coffee.png"
import MaleUser from "../assets/male-user.svg"
import FemaleUser from "../assets/female-user.svg"

import {motion} from "framer-motion"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { FaDumpsterFire } from "react-icons/fa"

const imageContainer ={
    hidden : {},
    visible : {
        transition :{
            staggereChildren : 0.5,
        },
    },
};

const imageVariant ={
    hidden :{
        opacity : 0,
        y : 40
    },
    visible :{
        opacity : 1,
        y : 0,
        transition :{
            duration : 0.6,
        },
    },
};

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
const fadeRight = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const Ambience = () =>{
    return (
        <section id="gallery" className="py-10 bg-ivory">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-center">

                <motion.div className="lg:col-span-4 flex flex-col gap-6 px-10"
                                variants = {fadeUp}
                                initial = "hidden"
                                whileInView = "visible"
                                viewport = {{once:true}}
                >

                    <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                        OUR AMBIENCE →
                    </p>

                    <h2 className="font-heading text-6xl lg:text-5xl leading-tight text-heading"> 
                        A Space to <br/> Feel, Connect & Belong
                    </h2>
                </motion.div>

                <div className="lg:col-span-8">
                    <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-3"
                                variants={imageVariant}
                                initial = "hidden"
                                whileInView="visible"
                                viewport = {{once:true}}
                    >
                        <motion.div className="group overflow-hidden  rounded-[1.5rem]"
                                    variants={imageVariant}
                        >
                            <img 
                                src={Ambience1} 
                                alt="Interior Ambience" 
                                className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-110"/>
                                
                        </motion.div>
                        <motion.div className="group overflow-hidden rounded-[1.5rem]"
                                    variants={imageVariant}
                        >
                            <img 
                                src={CoffeeImage} 
                                alt="Interior Ambience" 
                                className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-110"/>
                                
                        </motion.div>
                        <motion.div className="group overflow-hidden rounded-[1.5rem]"
                                    variants={imageVariant}
                        >
                            <img 
                                src={Ambience3} 
                                alt="Interior Ambience" 
                                className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-110"/>
                                
                        </motion.div>
                        <motion.div className="group relative overflow-hidden rounded-[1.5rem]"
                                    variants={imageVariant}
                            >
                            <img 
                                src={Ambience4} 
                                alt="Interior Ambience" 
                                className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-110"/>
                            
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <button className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-black/80
                                    backdrop-blur-sm
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    hover:bg-gold
                                    hover:text-espresso
                                    transition-all
                                    duration-300
                                ">
                                    <FiArrowLeft/>
                                </button>
                                <button className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-black/80
                                    backdrop-blur-sm
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    hover:bg-gold
                                    hover:text-espresso
                                    transition-all
                                    duration-300
                                ">
                                    <FiArrowRight/>
                                </button>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

                </div>
                <div className="max-w-screen-2xl mx-auto py-7 px-6 md:px-8">
                    <motion.div className="border-t border-espresso/15" 
                                variants={fadeUp}
                                initial= "hidden"
                                whileInView="visible"
                                viewport={{once : true}}
                    ></motion.div>
                </div>
                <div id="experience" className="grid lg:grid-cols-12 gap-10">
                    <motion.div className="lg:col-span-4 px-10  flex flex-col gap-6"
                                variants={fadeUp}
                                initial= "hidden"
                                whileInView="visible"
                                viewport={{once : true}}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                            LOVED BY MANY →
                        </p>

                        <h2 className="font-heading text-6xl lg:text-5xl leading-tight text-heading"> 
                            Stories from <br/> Our <span className="text-gold ">Guests</span>

                        </h2>
                    </motion.div>


                    <div className="lg:col-span-8 px-8">

                        <motion.div className="grid md:grid-cols-3 gap-3"
                                    variants={imageVariant}
                                    initial = "hidden"
                                    whileInView="visible"
                                    viewport = {{once:true}}>
                            <motion.div className="
                                    bg-[#FFFDF9]
                                    rounded-[1.5rem]
                                    p-5
                                    border
                                    border-black/5
                                    shadow-sm
                                    hover:-translate-y-2
                                    transition-all
                                    duration-500
                            "
                                    variants={imageContainer}
                            >
                                <div className="flex gap-4">
                                    <img src={FemaleUser} 
                                    alt="Female user"
                                    className="w-16 h-16 bg-gold/60 border border-espresso/15 rounded-full object-cover flex-shrink-0" />

                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-gold text-l">
                                            ★★★★★
                                        </div>
                                        <h4 className="mt-2 font-medium text-gold/80">
                                            Ananya Sharma
                                        </h4>

                                        <p className="mt-3 text-sm text-body/110 leading-relaxed">
                                            The ambience, the coffee,
                                            the people; everything
                                            feels so warm and real.
                                        </p>

                                    </div>                             
                                </div>
                            </motion.div>
                            <div className="
                                    bg-[#FFFDF9]
                                    rounded-[1.5rem]
                                    p-5
                                    border
                                    border-black/5
                                    shadow-sm
                                    hover:-translate-y-2
                                    transition-all
                                    duration-500
                            ">
                                <div className="flex gap-4">
                                    <img src={MaleUser} 
                                    alt="Female user"
                                    className="w-16 h-16 bg-gold/60 border border-espresso/15 rounded-full object-cover flex-shrink-0" />

                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-gold text-l">
                                            ★★★★★
                                        </div>
                                        <h4 className="mt-2 font-medium text-gold/80">
                                            Raktim Ranjan Handique
                                        </h4>

                                        <p className="mt-3 text-sm text-body/110 leading-relaxed">
                                            Hands down to the best ever Cold Brewed Coffee in the town.
                                        </p>

                                    </div>                             
                                </div>
                            </div>

                            <div className="
                                    bg-[#FFFDF9]
                                    rounded-[1.5rem]
                                    p-5
                                    border
                                    border-black/5
                                    shadow-sm
                                    hover:-translate-y-2
                                    transition-all
                                    duration-500
                                    relative
                            ">
                                <div className="flex gap-4">
                                    <img src={FemaleUser} 
                                    alt="Female user"
                                    className="w-16 h-16 bg-gold/60 border border-espresso/15 rounded-full object-cover flex-shrink-0" />

                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-gold text-l">
                                            ★★★★★
                                        </div>
                                        <h4 className="mt-2 font-medium text-gold/80">
                                            Sujuma Machahary
                                        </h4>

                                        <p className="mt-3 text-sm text-body/110 leading-relaxed">
                                            A perfect place to work or read or to get a break from the chaos.
                                        </p>

                                    </div>                             
                                </div>
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-black/40
                                        backdrop-blur-sm
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-gold
                                        hover:text-espresso
                                        transition-all
                                        duration-300
                                    ">
                                        <FiArrowLeft/>
                                    </button>
                                    <button className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-black/40
                                        backdrop-blur-sm
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-gold
                                        hover:text-espresso
                                        transition-all
                                        duration-300
                                    ">
                                        <FiArrowRight/>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>

        </section>
        
    )
}

export default Ambience