import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerItems = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Github",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
];

const FooterSection = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t w-full border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <p className="text-white/40">© 2025. All rights reserved.</p>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row items-center gap-2"
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5"
                >
                  <span>{item.title}</span>
                  <ArrowUpRightIcon className="size-6" />
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
