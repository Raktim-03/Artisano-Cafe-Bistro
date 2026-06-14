import { section } from "framer-motion/client"
import CoffeeCupImage from "../assets/name.png"
import {FaInstagram,FaFacebookF, FaXTwitter, FaWhatsapp} from "react-icons/fa6";
import { FiMapPin, FiClock } from "react-icons/fi";

const ContactSection = ()=>{
    return (
        <section id="contact" className="py-8 bg-ivory">

            <div className="max-w-screen-2xl mx-auto px-6 md:px-8">

                <div className="relative overflow-hiden rounded-[2rem] bg-[#172018] px-8 p-10">

                    <div className="grid lg:grid-cols-12 gap-6">

                        <div className="lg:col-span-3 min-h-[300px]">
                            <div className="" >
                                <p className="text-gold font-medium text-xs uppercase tracking-[0.3em]">Visit Us → </p>
                                <h2 className="mt-6 font-heading text-4xl text-white leading-tight">
                                    Find Us Here
                                </h2>

                                <div className="mt-10 flex items-center gap-4">
                                    <FiMapPin className="text-gold text-xl mt-1 flex-shrink-0"/>
                                    
                                    <p className="mt-3 text-white/80 leading-relaxed">
                                        Tezpur University Road <br/> Napaam, Tezpur, Assam 784028
                                    </p>
                                </div>

                                <div className="mt-6 flex items-center gap-4">
                                    <FiClock className="text-gold text-xl flex-shrink-0"/>
                                    <div className="mt-3 text-white/80 leading-relaxed">
                                        <p> Mon-Fri <span className="ml-3 text-white"> 8:00 AM - 10:00 PM</span></p>
                                        <p> Sat-Sun <span className="ml-3 text-white"> 2:00 PM - 10:00 PM</span></p>

                                    </div>
                                </div>
                                <button className="
                                            mt-10
                                            px-6
                                            py-3
                                            border
                                            border-gold/50
                                            rounded-full
                                            text-espresso
                                            uppercase
                                            text-sm
                                            tracking-[0.1em]
                                            bg-gold
                                            hover:text-white
                                            hover:bg-transparent
                                            transition-all
                                            duration-300
                                        ">
                                            Get Directions  →
                                </button>
                            </div>

                        </div>

                        <div className="lg:col-span-5 min-h-[300px]">
                            <div
                            className="overflow-hidden rounded-[1.5rem] border border-white/60 h-full min-h-[320px]">
                                <iframe 
                                    title ="Artisano Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.424052445592!2d92.83167204740317!3d26.69889668588265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebc8fd314411%3A0x28a60e3c5515613b!2sTezpur%20University!5e0!3m2!1sen!2sin!4v1781433164834!5m2!1sen!2sin"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    ></iframe>
                                
                            </div>
                        </div>

                        <div className="lg:col-span-4 relative overflow-hidden min-h-[320px]">

                            <div className="relative z-10 flex flex-col">
                                <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium">
                                    Stay Connected →

                                </p>
                                <h2 className="mt-4 font-heading text-4xl lg:text-4xl text-white leading-tight">
                                    Join Us for Updates <br/> Offers & More

                                </h2>

                                <div className="mt-8">
                                    <div className="flex items-center  rounded-full bg-white/[0.03] backdrop-blur-sm border border-gold/15  p-2">
                                        <input type="email"
                                                placeholder="Enter your email" 
                                                className="flex-1 min-w-0 px-4 bg-transparent outline-none text-white/80 placeholder:text-white/50"
                                        />
                                        <button className="w-12 h-12 rounded-full bg-gold/80 border text-espresso flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300 shrink-0">
                                            →
                                        </button>

                                    </div>

                                </div>
                                <div className="mt-8 flex items-end justify-between">
                                    <div className=" flex gap-3">
                                        <a href="https://www.instagram.com/raktim__mmm/" target="_blank" rel="noopener noreferrer">
                                                <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                                                    <FaInstagram/>
                                                </button>
                                        </a>
                                        <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer">
                                                <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                                                    <FaFacebookF/>
                                                </button>
                                        </a>
                                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                                <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                                                    <FaXTwitter/>
                                                </button>
                                        </a>
                                        <a href="https://wa.me/917099541522" target="_blank" rel="noopener noreferrer">
                                                <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                                                    <FaWhatsapp/>
                                                </button>
                                        </a>

                                    </div>
                                </div>


                            </div>


                        </div>

                    </div>
                </div>

            </div>

            <footer className="bg-ivory mt-6 pt-4 pb-0">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-8">

                    <div className="grid lg:grid-cols-12 items-center">
                        <div className="lg:col-span-3">

                            <div className = "flex flex-col items-center text-center lg:items-start lg:text-left ">
                                <h1 className="font-heading text-2xl md:text-3xl text-espresso/70 ">
                                   <a href="#home">ARTISANO</a>
                                </h1>
                                <p className="pl-0 lg:pl-3 font-body text-xs uppercase tracking-[0.2em]  text-espresso/70">
                                    <a href="#home">Cafe & Bistro</a>
                                </p>
                            </div>

                        </div>

                        <div className="lg:col-span-6 my-4 lg:my-0">
                            <div className="flex flex-wrap text-espresso/70 justify-center gap-x-8 gap-y-3">
                                <a href="#home" className="text-xs uppercase tracking-[0.15em] hover:text-gold transition-all duration-300  hover:cursor-pointer">HOME</a>
                                <a href="#menu" className="text-xs uppercase tracking-[0.15em] hover:text-gold transition-all duration-300 hover:cursor-pointer">MENU</a>
                                <a href="#experience" className="text-xs uppercase tracking-[0.15em] hover:text-gold transition-all duration-300">EXPERIENCE</a>
                                <a href="#gallery" className="text-xs uppercase tracking-[0.15em] hover:text-gold transition-all duration-300 hover:cursor-pointer">GALLERY</a>
                                <a href="#contact" className="text-xs uppercase tracking-[0.15em] hover:text-gold transition-all duration-300 hover:cursor-pointer">CONTACT</a>
                            </div>

                        </div>

                        <div className="lg:col-span-3 mt-3 lg:mt-0">
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                <p className="text-xs  tracking-[0.15em] text-espresso/70 leading-relaxed hover:cursor-pointer">
                                    © 2026 Artisano Coffee & Culture <br/> All rights reserved.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </footer>
        </section>
        
    )
}

export default ContactSection;