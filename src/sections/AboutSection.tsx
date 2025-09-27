"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React, { useRef } from "react";
import BookCover from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CardHeader from "@/components/CardHeader";
import MapImage from "@/assets/images/map.png";
import EmojiSmile from "@/assets/images/memoji-smile.png";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "65%",
    top: "5%",
  },
  {
    title: "Cricket",
    emoji: "🏏",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photograpy",
    emoji: "📸",
    left: "10%",
    top: "35%",
  },
  {
    title: "Travelling",
    emoji: "🧳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Running",
    emoji: "🏃‍♂️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Hiking",
    emoji: "🚶‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, what inspire me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div className="">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                  className=""
                ></CardHeader>
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={BookCover} alt="Book Cover" />
                </div>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div className="">
                <CardHeader
                  className=""
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional
              digital experiences."
                ></CardHeader>
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  ItemsWrapperClassName="animate-move-left"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  ItemsWrapperClassName="animate-move-right"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my intersets and hobbies beyond the digital realm."
                className=""
              ></CardHeader>
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center absolute gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="Map Image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:contain[''] after:absolute after:outline-2 after:outline-offset-2 after:rouded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full -z-20 bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image src={EmojiSmile} alt="Emoji Smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
