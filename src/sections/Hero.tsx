import heroImage from "@/assets/hero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex justify-center lg:justify-start items-center px-4 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative lg:max-w-2/3 flex flex-col items-center text-center lg:text-start lg:items-start">
        <span className="uppercase tracking-[0.3em] text-sm text-secondary font-medium">
          Welcome to Teduh Coffee
        </span>

        <h1 className="mt-4 text-white text-4xl md:text-6xl font-bold leading-tight">
          Temukan Teduh Pada
          <br />
          Setiap Tegukan
        </h1>

        <p className="mt-6 text-gray-200 max-w-xl leading-relaxed text-base md:text-lg">
          Teduh Coffee hadir sebagai ruang nyaman untuk menikmati kopi, berbagi
          cerita, dan menikmati waktu dengan suasana hangat, tenang, dan modern
          di tengah hiruk pikuk kota.
        </p>

        <a href="#">
          <button className="mt-8 cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:bg-secondary hover:text-primary transition-all duration-300">
            Explore Menu <IoIosArrowForward />
          </button>
        </a>
      </div>
    </section>
  );
}
