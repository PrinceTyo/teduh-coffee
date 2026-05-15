import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Separator } from "../components/ui/separator";
// import baliImage from "@/assets/destinations/bali.jpg";
// import borobudurImage from "@/assets/destinations/borobudur.jpg";
// import bromoImage from "@/assets/destinations/bromo.jpg";
// import komodoImage from "@/assets/destinations/komodo.jpg";
// import rakumImage from "@/assets/destinations/rakum.jpg";
// import rampatImage from "@/assets/destinations/rampat.jpg";
// import ijenImage from "@/assets/destinations/ijen.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Menu() {
  return (
    <section className="px-4 py-20 md:px-20" id="menu">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div className="space-y-2 md:space-y-4">
            <span className="uppercase tracking-[0.3em] text-sm font-medium text-primary">
              Our Menu
            </span>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Crafted for Every Coffee Lover
            </h1>
          </div>

          <div className="relative flex flex-col md:flex-col-reverse items-start md:items-end lg:flex-row lg:items-center gap-2 mt-6 lg:mt-0">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl font-semibold">+10K</h1>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div className="flex items-center gap-x-1">
              <CarouselPrevious className="static translate-x-0 translate-y-0 md:ms-10" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </div>
        {/* Kopi Susu */}
        <CarouselContent className="-ml-1">
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white shadow-md">
                <img
                  src="https://i.pinimg.com/736x/4e/cd/1a/4ecd1a763640073c4095febc35fff733.jpg"
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-semibold">Kopi Susu</h1>
                  <p>
                    Perpaduan espresso dan susu creamy dengan rasa lembut yang
                    menenangkan.
                  </p>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <p className="ms-2 text-gray-500">(231 reviews)</p>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 19.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Americano */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white shadow-md">
                <img
                  src="https://i.pinimg.com/1200x/d6/f2/e9/d6f2e9113aa8f9aef8b59a8e28bd7255.jpg"
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-semibold">Americano</h1>
                  <p>
                    Kopi hitam dengan karakter bold dan aroma khas yang ringan
                    untuk dinikmati.
                  </p>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <p className="ms-2 text-gray-500">(231 reviews)</p>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 20.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Cappucino */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white shadow-md">
                <img
                  src="https://i.pinimg.com/736x/4d/e4/0c/4de40c8bbd7ca5c9a76587faf386d444.jpg"
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-semibold">Cappucino</h1>
                  <p>
                    Espresso dengan foam susu halus yang menghadirkan rasa
                    creamy dan hangat.
                  </p>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <p className="ms-2 text-gray-500">(231 reviews)</p>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 18.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Caramel Latte */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white shadow-md">
                <img
                  src="https://i.pinimg.com/1200x/56/3f/2c/563f2ca6c53a247a7001413f844081b9.jpg"
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-semibold">Caramel Latte</h1>
                  <p>
                    Perpaduan latte lembut dengan sentuhan caramel manis yang
                    memanjakan.
                  </p>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <p className="ms-2 text-gray-500">(231 reviews)</p>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 30.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Mocha */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white shadow-md">
                <img
                  src="https://i.pinimg.com/1200x/b1/8d/50/b18d50fa62686644792732a3f609275f.jpg"
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-semibold">Mocha</h1>
                  <p>
                    Kombinasi kopi dan cokelat dengan rasa manis yang kaya,
                    pekat dan lembut.
                  </p>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <p className="ms-2 text-gray-500">(231 reviews)</p>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 29.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Hazelnut Latte */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white shadow-md">
                <img
                  src="https://i.pinimg.com/736x/70/19/e4/7019e4b3fbe9c54a6cc83bc915068f42.jpg"
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-semibold">Hazelnut Latte</h1>
                  <p>
                    Latte creamy dengan aroma hazelnut yang hangat, menenangkan
                    dan rasa yang creamy.
                  </p>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center">
                      <p className="font-medium me-1">4.9</p>
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <p className="ms-2 text-gray-500">(231 reviews)</p>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 32.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
