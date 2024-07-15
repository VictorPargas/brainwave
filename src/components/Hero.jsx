import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import { motion } from "framer-motion";
import video from "../assets/video3.mp4";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative pt-[12rem] -mt-[5.25rem] h-screen"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

      <div className="container relative z-10 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          className="relative z-10 max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="h1 mb-6 text-white drop-shadow-md">
            Integre e otimize seu SAP Business One com a{" "}
            <span className="inline-block relative">
              b1Soft{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 lg:mb-8 text-white drop-shadow-md">
            Aumente a eficiência de processos com nossas soluções para o B1.
          </p>
        </motion.div>

        {/* <BackgroundCircles /> */}
      </div>

      {/* <BottomLine /> */}
      {/* <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#111827"
          fillOpacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg> */}
    </Section>
  );
};

export default Hero;
