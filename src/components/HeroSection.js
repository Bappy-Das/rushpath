import React from 'react'

const HeroSection = () => {
    return (
        <section id="home">
          <div className="px-6 py-32 flex justify-center items-center md:px-12 bg-gradient-to-br min-h-screen rushpath_primary_bg text-gray-800 text-center lg:text-left z-20">
            <div className="container mx-auto xl:px-32">
              <div className="pt-12 ">
                <div className="lg:mt-0">
                  <h1 className="text-xl text-center md:text-2xl xl:text-2xl font-bold font-class-brick mb-12 rushpath_secondary letter_spacing2 capitalize">
                      Unleash Your Inner Genius !
                  </h1>
                  <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-bold font-class-brick mb-12 rushpath_secondary letter_spacing2 capitalize">
                      Beyond Textbooks !
                  </h1>
                  <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-bold font-class-brick mb-12 rushpath_secondary letter_spacing2 capitalize">
                      Don't Just Read, Play !
                  </h1>
                  <h1 className="text-4xl font-class-brick letter_spacing3 text-center md:text-6xl xl:text-7xl font-bold mb-12 rushpath_secondary capitalize">
                    From Novice <br/> to <br/> Ninja !
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default HeroSection;