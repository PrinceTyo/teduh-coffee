import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section
      className="px-4 py-20 lg:px-20 flex items-center justify-between gap-20 bg-white"
      id="about"
    >
      <div className="w-1/2 space-y-6">
        <p className="uppercase tracking-[0.3em] text-sm font-medium text-primary">
          Our Story
        </p>
        <h1 className="text-5xl font-semibold">
          Made with Heart, Served with Love
        </h1>
        <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl">
          Setiap cangkir di Teduh Coffee diracik dengan penuh perhatian untuk
          menghadirkan rasa yang hangat, nyaman, dan berkesan. Dari biji kopi
          pilihan hingga suasana yang menenangkan, kami percaya bahwa kopi
          terbaik selalu datang dari hati.
        </p>
        <Separator className="bg-primary -mt-4" />
        <a href="#">
          <button className="mt-2 cursor-pointer py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:bg-secondary hover:text-primary transition-all duration-300">
            Discover More
          </button>
        </a>
      </div>
      <div className="w-1/2">
        <img
          src="https://i.pinimg.com/1200x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg"
          alt="About Image"
          className="w-full h-126 object-cover rounded-b-full rounded-tl-full p-2 border border-primary"
        />
      </div>
    </section>
  );
}
