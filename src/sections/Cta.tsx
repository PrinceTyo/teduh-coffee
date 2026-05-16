import ctaImage from "@/assets/cta.png";

export default function Cta() {
  return (
    <div
      className="relative h-116 lg:h-96 flex items-center justify-center lg:justify-start bg-fixed"
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="z-10 text-center lg:text-start lg:max-w-1/2 space-y-2 lg:space-y-4 px-4 md:px-20 flex flex-col items-center lg:items-start justify-center lg:justify-start">
        <h1 className="text-3xl lg:text-4xl text-white font-semibold">
          Secangkir Hangat
          <br />
          untuk Setiap Cerita
        </h1>
        <p className="text-white/80 text-md mt-4 max-w-lg leading-relaxed">
          Nikmati perpaduan kopi berkualitas dan suasana hangat yang
          menghadirkan kenyamanan dalam setiap momenmu.
        </p>
        <a href="#">
          <button className="mt-6 cursor-pointer py-3 px-8 bg-white rounded-lg text-primary font-medium text-lg hover:opacity-90 transition">
            Explore Menu
          </button>
        </a>
      </div>
    </div>
  );
}
