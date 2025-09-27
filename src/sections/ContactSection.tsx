import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-28">
      <div className="container">
        <div className="w-full bg-gradient-to-r from-emerald-300 to-sky-400 px-19 py-8 rounded-3xl text-center md:text-left text-gray-900 relative z-0 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col">
              <button className="text-white bg-gray-900 inline-flex px-6 h-12 rounded-xl items-center mt-8 gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
