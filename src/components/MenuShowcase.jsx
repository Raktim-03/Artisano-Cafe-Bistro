import { section } from "framer-motion/client"
import {useState} from "react"
import CoffeeImage from "../assets/coffee.png"
import PastaImage from "../assets/pasta.png"
import TiramisuImage from "../assets/tiramisu.png"
import { motion, AnimatePresence } from "framer-motion";

const coffeeItems = [
  {
    image: CoffeeImage,
    title: "Spanish Latte",
    description: "Velvety smooth with a hint of cinnamon",
    price: "₹220",
  },
    {
    image: CoffeeImage,
    title: "Spanish Latte",
    description: "Velvety smooth with a hint of cinnamon",
    price: "₹220",
  },
    {
    image: CoffeeImage,
    title: "Spanish Latte",
    description: "Velvety smooth with a hint of cinnamon",
    price: "₹220",
  },
  {
    image: CoffeeImage,
    title: "Cold Brew",
    description: "Bold and refreshing",
    price: "₹210",
  },
];

const nonCoffeeItems = [
  {
    image: PastaImage,
    title: "Matcha Latte",
    description: "Creamy Japanese matcha",
    price: "₹240",
  },
    {
    image: PastaImage,
    title: "Matcha Latte",
    description: "Creamy Japanese matcha",
    price: "₹240",
  },
    {
    image: PastaImage,
    title: "Matcha Latte",
    description: "Creamy Japanese matcha",
    price: "₹240",
  },
  {
    image: PastaImage,
    title: "Hot Chocolate",
    description: "Rich Belgian chocolate",
    price: "₹260",
  },
];

const foodItems = [
  {
    image: PastaImage,
    title: "Truffle Pasta",
    description: "Freshly prepared",
    price: "₹320",
  },
    {
    image: PastaImage,
    title: "Truffle Pasta",
    description: "Freshly prepared",
    price: "₹320",
  },
];

const dessertItems = [
  {
    image: TiramisuImage,
    title: "Tiramisu",
    description: "Classic Italian dessert",
    price: "₹250",
  },
    {
    image: TiramisuImage,
    title: "Tiramisu",
    description: "Classic Italian dessert",
    price: "₹250",
  },
];

const MenuShowcase =()=>{
    const [activeCategory, setActiveCategory] = useState("coffee");
    
    let currentItems = coffeeItems;

    if (activeCategory === "noncoffee") {
    currentItems = nonCoffeeItems;
    }

    if (activeCategory === "food") {
    currentItems = foodItems;
    }

    if (activeCategory === "desserts") {
    currentItems = dessertItems;
    }
    return (
        <section id="menu" className="py-5 bg-ivory">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
                <div className="rounded-t-[2rem] overflow-hidden">

                    <div className="rounded-t-[2rem] p-6 sm:p-8 lg:p-14 overflow-hidden"
                        style ={{
                            background: "linear-gradient(135deg, #101812 0%, #172018 50%, #1A120D 100%)"
                        }}
                    >
                        
                        <div className="grid lg:grid-cols-12 gap-10">

                            <div className="lg:col-span-4">
                                <div className="h-full flex flex-col justify-between">

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                                            EXPLORE OUR MENU →
                                        </p>
                                        <h2 className="mt-6 font-heading text-4xl md:text-5xl text-white leading-tight">
                                            Crafted <br/> To <span className="text-gold "> Perfection</span>
                                        </h2>

                                        <button className="
                                            mt-10
                                            px-6
                                            py-3
                                            border
                                            border-gold/50
                                            rounded-full
                                            text-white
                                            uppercase
                                            text-sm
                                            tracking-[0.1em]
                                            hover:bg-gold
                                            hover:text-espresso
                                            transition-all
                                            duration-300
                                        ">
                                            VIEW FULL MENU  →
                                        </button>

                                        {/* <div className="hidden flex gap-4 mt-8">
                                            <button className="
                                                w-12
                                                h-12
                                                rounded-full
                                                border
                                                border-gold/40
                                                text-white
                                                hover:bg-gold
                                                hover:text-espresso
                                                transition-all
                                            "> ← 
                                            </button>

                                            <button className="
                                                w-12
                                                h-12
                                                rounded-full
                                                border
                                                border-gold/40
                                                text-white
                                                hover:bg-gold
                                                hover:text-espresso
                                                transition-all
                                            ">
                                               → 
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                               
                               <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mb-8">

                                <button onClick={()=>setActiveCategory("coffee")}
                                    className={
                                        `w-full sm:w-auto px-4 py-3 rounded-2xl
                                        text-sm uppercase tracking-[0.1em]
                                        border border-gold/30 sm:border-0 
                                        transition-all duration-300
                                        ${
                                            activeCategory==="coffee"
                                                ?"bg-gold text-espresso"
                                                :"text-white hover:text-gold"
                                        }
                                        `
                                    }
                                    >
                                        Coffee 
                                    </button>

                                <button onClick={()=>setActiveCategory("noncoffee")}
                                    className={
                                        `w-full sm:w-auto px-4 py-3 rounded-2xl
                                        text-sm uppercase tracking-[0.1em]
                                        border border-gold/30 sm:border-0 
                                        transition-all duration-300
                                        ${
                                            activeCategory==="noncoffee"
                                                ?"bg-gold text-espresso"
                                                :"text-white hover:text-gold"
                                        }
                                        `
                                    }
                                    >
                                        Non Coffee 
                                </button>

                                <button onClick={()=>setActiveCategory("food")}
                                    className={
                                        `w-full sm:w-auto px-4 py-3 rounded-2xl
                                        text-sm uppercase tracking-[0.1em]
                                        border border-gold/30 sm:border-0 
                                        transition-all duration-300
                                        ${
                                            activeCategory==="food"
                                                ?"bg-gold text-espresso"
                                                :"text-white hover:text-gold"
                                        }
                                        `
                                    }
                                    >
                                        Food 
                                </button>

                                <button onClick={()=>setActiveCategory("desserts")}
                                    className={
                                        `w-full sm:w-auto px-4 py-3 rounded-2xl
                                        text-sm uppercase tracking-[0.1em]
                                        border border-gold/30 sm:border-0 
                                        transition-all duration-300
                                        ${
                                            activeCategory==="desserts"
                                                ?"bg-gold text-espresso"
                                                :"text-white hover:text-gold"
                                        }
                                        `
                                    }
                                    >
                                        Desserts
                                </button>
                               </div>

                                <AnimatePresence mode="wait">

                                    <motion.div
                                        key={activeCategory}
                                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
                                        initial={{
                                            opacity: 0,
                                            y: 20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20
                                        }}
                                        transition={{
                                            duration: 0.4
                                        }}
                                    >

                                        {currentItems.map((item, index) => (

                                            <motion.div
                                                key={item.title}
                                                initial={{
                                                    opacity: 0,
                                                    y: 30
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1
                                                }}
                                                className="
                                                    group
                                                    relative
                                                    border
                                                    border-gold
                                                    h-[260px]
                                                    sm:h-[280px]
                                                    lf:h-[300px]
                                                    overflow-hidden
                                                    rounded-[1.5rem]
                                                    cursor-pointer
                                                "
                                            >

                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="
                                                        w-full
                                                        h-full
                                                        object-cover
                                                        transition-all
                                                        duration-700
                                                        group-hover:scale-110
                                                    "
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-[#172018] via-[#172018]/60 to-transparent"></div>

                                                <div className="absolute bottom-6 left-6 right-6 text-white">

                                                    <h3 className="font-heading text-xl">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-sm text-white/80 mt-2">
                                                        {item.description}
                                                    </p>

                                                    <p className="mt-4 text-gold font-medium">
                                                        {item.price}
                                                    </p>

                                                </div>

                                            </motion.div>

                                        ))}

                                    </motion.div>

                                </AnimatePresence>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default MenuShowcase;