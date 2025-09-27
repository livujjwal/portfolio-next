import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRigthIcon from "../assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

type Results = {
  title: string;
};

interface PortfolioProjects {
  id: number;
  company: string;
  year: string;
  title: string;
  link: string;
  image: StaticImageData;
  results: Results[];
}

const portfolioProjects: PortfolioProjects[] = [
  {
    id: 1,
    title: "CollegeHai",
    company: "Makunai Global Technologies Private Limited",
    year: "2025",
    link: "collegehai.com",
    image: aiStartupLandingPage,
    results: [
      {
        title: "Makunai Global Technologies Private Limited 1",
      },
      {
        title: "Makunai Global Technologies Private Limited 2",
      },
      {
        title: "Makunai Global Technologies Private Limited 3",
      },
    ],
  },
  {
    id: 2,
    title: "CollegeHai",
    company: "Makunai Global Technologies Private Limited",
    year: "2025",
    link: "collegehai.com",
    image: lightSaasLandingPage,
    results: [
      {
        title: "Makunai Global Technologies Private Limited 4",
      },
      {
        title: "Makunai Global Technologies Private Limited 5",
      },
      {
        title: "Makunai Global Technologies Private Limited 6",
      },
    ],
  },
  {
    id: 3,
    title: "CollegeHai",
    company: "Makunai Global Technologies Private Limited",
    year: "2025",
    link: "collegehai.com",
    image: darkSaasLandingPage,
    results: [
      {
        title: "Makunai Global Technologies Private Limited 7 ",
      },
      {
        title: "Makunai Global Technologies Private Limited 8",
      },
      {
        title: "Makunai Global Technologies Private Limited 9",
      },
    ],
  },
  {
    id: 4,
    title: "CollegeHai",
    company: "Makunai Global Technologies Private Limited",
    year: "2025",
    link: "collegehai.com",
    image: aiStartupLandingPage,
    results: [
      {
        title: "Makunai Global Technologies Private Limited 10",
      },
      {
        title: "Makunai Global Technologies Private Limited 11",
      },
      {
        title: "Makunai Global Technologies Private Limited 12",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          description="See how I transformed concepts into engaging digital experinces"
          eyebrow="Real-World Results"
          title="Featured Projects"
        ></SectionHeader>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project: PortfolioProjects, index) => (
            <Card
              key={project.id}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-white/50 text-sm md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl inline-flex items-center justify-center gap-2 font-semibold mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRigthIcon className="h-4 w-8" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
