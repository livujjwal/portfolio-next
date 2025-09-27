import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <div className="inline-flex items-center justify-center">
          <StarIcon className=" text-emerald-300 text-center" />
        </div>
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="mt-2 text-sm lg:text-base text-white/60 max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
