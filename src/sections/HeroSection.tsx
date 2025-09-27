import Image from "next/image";
import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import memojiImage from "../assets/images/memoji-computer.png";
import grainImage from "../assets/images/grain.jpg";
import { Hand, ArrowDown } from "lucide-react";
import HeroOrbit from "@/components/HeroOrbit";
const HeroSection = () => {
  return (
    <div className="py-32 md:48 lg:60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-20 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[620px] hero-ring"></div>
        {/*  shouldOrbit = false,
          orbitDuration,
          shouldspin = false,
          spinDuration, */}
        <HeroOrbit
          size={400}
          rotation={-14}
          shouldOrbit
          orbitDuration={"30s"}
          shouldspin
          spinDuration="4s"
        >
          <SparkleIcon className="text-emerald-300/20 size-8 " />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={196} shouldOrbit orbitDuration={"32s"}>
          <div className="bg-emerald-300/20 rounded-full size-2" />
        </HeroOrbit>
        <HeroOrbit
          size={495}
          rotation={74}
          shouldOrbit
          orbitDuration={"34s"}
          shouldspin
          spinDuration="4s"
        >
          <SparkleIcon className="text-emerald-300/20 size-5" />
        </HeroOrbit>
        <HeroOrbit
          size={540}
          rotation={12}
          shouldOrbit
          orbitDuration={"36s"}
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="text-emerald-300 size-8" />
        </HeroOrbit>
        <HeroOrbit size={580} rotation={126} shouldOrbit orbitDuration={"42s"}>
          <div className="bg-emerald-300/20 rounded-full size-6" />
        </HeroOrbit>
        <HeroOrbit
          size={640}
          rotation={102}
          shouldOrbit
          orbitDuration={"38s"}
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="text-emerald-300 size-6" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={216}
          shouldOrbit
          orbitDuration={"40s"}
          shouldspin
          spinDuration="4s"
        >
          <SparkleIcon className="text-emerald-300/20 size-6" />
        </HeroOrbit>
        <HeroOrbit
          size={740}
          rotation={146}
          shouldOrbit
          orbitDuration={"44s"}
          shouldspin
          spinDuration="4s"
        >
          <SparkleIcon className="text-emerald-300/20 size-4" />
        </HeroOrbit>
        <HeroOrbit size={790} rotation={-28} shouldOrbit orbitDuration={"46s"}>
          <div className="bg-emerald-300/20 rounded-full size-4" />
        </HeroOrbit>
        <HeroOrbit
          size={850}
          rotation={-72}
          shouldOrbit
          orbitDuration={"48s"}
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="text-emerald-300 " />
        </HeroOrbit>
      </div>
      <div className="contianer">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Personal peeking from side of laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="bg-green-500 size-2 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-semibold">
              Available for new Projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experinces
          </h1>
          <p className="mt-4 text-white/60 text-center md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border bg-white text-gray-900 rounded-xl px-6 h-12">
            <Hand />
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
