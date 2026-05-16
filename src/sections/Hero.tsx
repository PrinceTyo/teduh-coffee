import { IoIosArrowForward } from "react-icons/io";

type HeroProps = {
  image: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function Hero({
  image,
  badge,
  title,
  description,
  buttonText,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex justify-center lg:justify-start items-center px-4 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative lg:max-w-2/3 flex flex-col items-center text-center lg:text-start lg:items-start">
        <span className="uppercase tracking-[0.3em] text-sm text-secondary font-medium">
          {badge}
        </span>

        <h1 className="md:w-3/4 mt-4 text-white text-4xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-6 text-gray-200 max-w-xl leading-relaxed text-base md:text-lg">
          {description}
        </p>

        <a href="#">
          <button className="mt-8 cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:bg-secondary hover:text-primary transition-all duration-300">
            {buttonText} <IoIosArrowForward />
          </button>
        </a>
      </div>
    </section>
  );
}
