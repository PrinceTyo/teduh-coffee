import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type MenuItem = {
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
};

type MenuProps = {
  badge: string;
  title: string;
  totalCustomers: string;
  customerText: string;
  items: MenuItem[];
};

export default function Menu({
  badge,
  title,
  totalCustomers,
  customerText,
  items,
}: MenuProps) {
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
              {badge}
            </span>

            <h1 className="max-w-full md:max-w-3/4 lg:max-w-full text-2xl md:text-3xl lg:text-4xl font-semibold">
              {title}
            </h1>
          </div>

          <div className="relative flex flex-col md:flex-col-reverse items-start md:items-end lg:flex-row lg:items-center gap-2 mt-6 lg:mt-0">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl font-semibold">{totalCustomers}</h1>

              <p className="text-gray-700">{customerText}</p>
            </div>

            <div className="flex items-center gap-x-1">
              <CarouselPrevious className="static translate-x-0 translate-y-0 md:ms-10" />

              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </div>

        <CarouselContent className="-ml-1">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <div className="rounded-lg w-full md:w-80 bg-white shadow-md max-w-[98%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-lg h-70 object-cover w-full"
                  />

                  <div className="p-6 space-y-4">
                    <h1 className="text-xl font-semibold">{item.title}</h1>

                    <p>{item.description}</p>

                    <div className="space-y-2">
                      <Separator />

                      <div className="flex items-center">
                        <p className="font-medium me-1">{item.rating}</p>

                        {[...Array(5)].map((_, starIndex) => (
                          <FaStar key={starIndex} className="text-yellow-500" />
                        ))}

                        <p className="ms-2 text-gray-500">
                          ({item.reviews} reviews)
                        </p>
                      </div>

                      <Separator />
                    </div>

                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold text-gray-800">
                        {item.price}
                      </h1>

                      <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                        <IoIosArrowRoundForward size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
