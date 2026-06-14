import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">

      {/* Background Image */}
      <div className="relative min-h-screen">

        <img
          src={HeroImage}
          alt="Artisano Cafe"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 z-10">

          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-full flex items-center pt-24">

            <div className="max-w-3xl flex flex-col gap-5 md:gap-6 text-white">

              <p className="text-xs uppercase tracking-[0.3em] font-medium">
                WHERE HERITAGE MEETS HOSPITALITY
              </p>

              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-none">
                Crafted Traditions,
                <br />
                Modern Moments.
              </h1>

              <p className="text-base md:text-lg max-w-xl leading-relaxed text-white/80">
                Where heritage flavours meet modern elegance.
                Experience handcrafted coffee, artisanal desserts,
                and warm hospitality in every detail.
              </p>

              <div className="flex gap-4 flex-col sm:flex-row">

                <button
                  className="
                    px-6 py-3
                    uppercase
                    border
                    border-gold
                    tracking-[0.1em]
                    font-medium
                    rounded-full
                    bg-gold
                    text-espresso
                    hover:bg-transparent
                    hover:text-gold
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                 <a href="#menu"> EXPLORE MENU</a>
                </button>

                <button
                  className="
                    px-6 py-3
                    uppercase
                    tracking-[0.1em]
                    font-medium
                    rounded-full
                    border
                    border-gold
                    text-gold
                    bg-transparent
                    hover:bg-gold
                    hover:text-espresso
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                <a href="#our-story"> OUR STORY</a>
                </button>

              </div>

            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80">

            <span className="text-xs  uppercase tracking-[0.3em]">
              Scroll
            </span>

            <div className="w-px h-8 bg-white animate-bounce"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;