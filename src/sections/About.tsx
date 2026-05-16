import { CiCoffeeCup } from "react-icons/ci";
import { LuCroissant } from "react-icons/lu";

export default function About() {
  return (
    <section
      className="px-4 pt-20 lg:px-20 flex items-center justify-between gap-20 bg-white"
      id="about"
    >
      <div className="relative w-1/2">
        <div className="flex gap-6">
          <img
            src="https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg"
            alt="About Image"
            className="w-96 h-136 object-cover"
          />
          <div className="w-56 h-74 text-center bg-primary flex flex-col items-center justify-center text-white p-4 space-y-4">
            <h2 className="text-6xl font-bold">10+</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/1200x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg"
          alt="About Image"
          className="absolute w-80 h-56 bottom-0 right-0 object-cover"
        />
      </div>
      <div className="w-1/2 space-y-6">
        <p className="uppercase tracking-[0.3em] text-sm font-medium text-primary">
          Our Story
        </p>
        <h1 className="text-5xl font-bold">
          Made with Heart, Served with Love
        </h1>
        <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl">
          Setiap cangkir di Teduh Coffee diracik dengan penuh perhatian untuk
          menghadirkan rasa yang hangat, nyaman, dan berkesan. Dari biji kopi
          pilihan hingga suasana yang menenangkan, kami percaya bahwa kopi
          terbaik selalu datang dari hati.
        </p>
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-md p-3">
            <CiCoffeeCup className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Premium Coffee</h2>
            <p>
              Diseduh dari biji kopi pilihan untuk menghadirkan rasa yang kaya,
              hangat, dan berkesan di setiap tegukan.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-md p-3">
            <LuCroissant className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Fresh Pastry</h2>
            <p>
              Pastry hangat dengan tekstur lembut yang dibuat untuk melengkapi
              momen santaimu bersama kopi favorit.
            </p>
          </div>
        </div>
        <a href="#">
          <button className="mt-2 cursor-pointer py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:bg-primary/90 transition-all duration-300">
            Discover More
          </button>
        </a>
      </div>
    </section>
  );
}
