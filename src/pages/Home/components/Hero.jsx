import React from "react";
import playImage from "../../../assets/img/googlePlay.png";
import appStore from "../../../assets/img/appStore.png";
import heroImg from "../../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse items-center md:justify-between md:mt-4 px-4 py-8 md:py-24 md:flex-row">
        <div className="flex flex-col space-y-4 text-center text-white md:text-left md:w-2/3">
          <h1 className="text-5xl font-medium md:text-6xl xl:pr-24">
            Order <span className="text-brightBrown">food</span> anytime,
            anywhere
          </h1>
          <p className="text-veryLightGrey md:w-4/5 xl:w-3/5">
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>

          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <a href="/#">
              <img src={playImage} alt="" />
            </a>
            <a href="/#">
              <img src={appStore} alt="" />
            </a>
          </div>
        </div>

        <br className="md:hidden" />

        <div className="flex md:justify-end md:w-1/3">
          <img src={heroImg} className=" w-80 md:w-96" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
