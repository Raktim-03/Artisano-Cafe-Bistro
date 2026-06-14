import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <nav className="absolute top-0 left-0 w-full z-50">
            <div className = "flex items-center justify-between max-w-screen-2xl mx-auto px-6 md:px-8 py-5">
                
                <div className = "flex flex-col items-center">
                    <h1 className="font-heading text-2xl md:text-3xl text-white">
                       <a href="#home"> ARTISANO</a>
                    </h1>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-cream">
                       <a href="#home">Cafe & Bistro </a> 
                    </p>
                </div>

                <ul className="hidden lg:flex items-center gap-8 ">
                    <li className="text-sm uppercase font-medium text-white tracking-[0.15em]  hover:text-gold transition-all duration-300 cursor-pointer ">
                        <a href="#home">HOME</a>
                    </li>
                    <li className="text-sm uppercase font-medium text-white tracking-[0.15em] hover:text-gold transition-all duration-300 cursor-pointer">
                       <a href="#menu">MENU</a>
                    </li>
                    <li className="text-sm uppercase font-medium text-white tracking-[0.15em] hover:text-gold transition-all duration-300 cursor-pointer">
                        <a href="#experience">EXPERIENCE</a>
                    </li>
                    <li className="text-sm uppercase font-medium text-white tracking-[0.15em] hover:text-gold transition-all duration-300 cursor-pointer">
                        <a href="#gallery">GALLERY</a>
                    </li>
                    <li className="text-sm uppercase font-medium text-white tracking-[0.15em] hover:text-gold transition-all duration-300 cursor-pointer">
                        <a href="#contact">CONTACT</a>
                    </li>
                    
                </ul>

                <button className="lg:hidden text-white text-4xl cursor-pointer hover:text-gold transition-all duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}    
                >
                    <HiOutlineBars3 />
                </button>

                {isMenuOpen && (
                <div className="fixed top-0 right-0 h-screen w-72 bg-black/50 backdrop-blur-sm z-[60] p-6">
                    <button
                        className="text-white text-3xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ×
                    </button>
                    <ul className="flex flex-col gap-8 mt-16">
                        <li className="text-white uppercase tracking-[0.15em] cursor-pointer">
                            <a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
                        </li>

                        <li className="text-white uppercase tracking-[0.15em] cursor-pointer">
                            <a href="#menu" onClick={() => setIsMenuOpen(false)}>MENU</a>
                        </li>

                        <li className="text-white uppercase tracking-[0.15em] cursor-pointer">
                            <a href="#experience" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</a>
                        </li>

                        <li className="text-white uppercase tracking-[0.15em] cursor-pointer">
                            <a href="#gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
                        </li>

                        <li className="text-white uppercase tracking-[0.15em] cursor-pointer">
                            <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                        </li>
                    </ul>
                </div>
                )}

                <button  className="
                    px-6 py-3
                    hidden lg:block
                    uppercase
                    tracking-[0.1em]
                    font-medium
                    rounded-full
                    border
                    border-gold
                    text-white/90
                    bg-transparent
                    hover:bg-gold
                    hover:text-espresso
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                    RESERVE A TABLE
                </button>
            </div>
        </nav>
        
    );
};

export default Navbar;