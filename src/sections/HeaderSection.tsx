import Link from "next/link";
import React from "react";

const HeaderSection = () => {
  return (
    <div className="flex justify-center items-center fixed top-5 mx-auto w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href={"#"} className="nav-item">
          Home
        </Link>
        <Link href={"#"} className="nav-item">
          About
        </Link>
        <Link href={"#"} className="nav-item">
          Projects
        </Link>
        <Link href={"#"} className="nav-item">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default HeaderSection;
