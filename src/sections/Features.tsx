import { Separator } from "@/components/ui/separator";
// import bijiKopiImage from "@/assets/about.png";

export default function Features() {
  return (
    <section
      className="relative px-4 py-20 lg:px-20 text-center bg-white overflow-x-hidden"
      id="features"
    >
      {/* <img
        src={bijiKopiImage}
        alt="Second About Image"
        className="absolute w-30 top-20 -left-8 rotate-40"
      /> */}
      <h1 className="text-5xl font-bold">Crafted for You</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 gap-10">
        <div className="relative flex flex-col items-center text-center">
          <img
            src="https://i.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg"
            alt="Espresso"
            className="w-20 h-20 rounded-full p-1 bg-secondary border border-primary"
          />

          <h2 className="text-2xl font-bold mt-4">Espresso</h2>

          <p className="mt-2 text-gray-500">
            Sajian kopi klasik dengan rasa bold dan aroma kuat untuk menemani
            harimu.
          </p>

          <div className="hidden lg:block absolute -right-5 -bottom-25 -translate-y-1/2 h-40">
            <Separator orientation="vertical" className="h-full bg-primary" />
          </div>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <img
            src="https://i.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg"
            alt="Cappuccino"
            className="w-20 h-20 rounded-full p-1 bg-secondary border border-primary"
          />

          <h2 className="text-2xl font-bold mt-4">Cappuccino</h2>

          <p className="mt-2 text-gray-500">
            Perpaduan espresso, susu, dan foam lembut dengan rasa creamy.
          </p>

          <div className="hidden lg:block absolute -right-5 -bottom-25 -translate-y-1/2 h-40">
            <Separator orientation="vertical" className="h-full bg-primary" />
          </div>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <img
            src="https://i.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg"
            alt="Cafe Latte"
            className="w-20 h-20 rounded-full p-1 bg-secondary border border-primary"
          />

          <h2 className="text-2xl font-bold mt-4">Cafe Latte</h2>

          <p className="mt-2 text-gray-500">
            Kopi susu hangat dengan tekstur lembut dan cita rasa yang ringan.
          </p>

          <div className="hidden lg:block absolute -right-5 -bottom-25 -translate-y-1/2 h-40">
            <Separator orientation="vertical" className="h-full bg-primary" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg"
            alt="Americano"
            className="w-20 h-20 rounded-full p-1 bg-secondary border border-primary"
          />

          <h2 className="text-2xl font-bold mt-4">Americano</h2>

          <p className="mt-2 text-gray-500">
            Espresso dengan tambahan air panas yang menghasilkan rasa ringan.
          </p>
        </div>
      </div>
    </section>
  );
}
