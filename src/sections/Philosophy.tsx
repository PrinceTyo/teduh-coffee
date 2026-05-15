import philosophyImage from "@/assets/philosophy.png";
import bijiKopiImage from "@/assets/about.png";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCroissant } from "react-icons/lu";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { PiBread, PiCoffeeBold } from "react-icons/pi";

export default function Philosophy() {
  return (
    <section className="px-4 pb-20 lg:px-20 bg-white" id="philosophy">
      <div className="relative flex flex-col items-center justify-center space-y-2">
        <img
          src={bijiKopiImage}
          alt="Second About Image"
          className="absolute w-30 -top-10 -right-8 rotate-40"
        />
        <img
          src={bijiKopiImage}
          alt="Second About Image"
          className="absolute w-30 -top-10 -left-8 -rotate-40"
        />
        <span className="uppercase tracking-[0.3em] text-sm font-medium text-primary">
          what happens here
        </span>
        <h2 className="text-4xl font-bold text-black leading-tight">
          Coffe Build Your Base
        </h2>
        <div className="mt-1 w-30 h-1 bg-primary"></div>
      </div>
      <div className="flex items-center justify-around mt-10">
        <div className="w-1/3 space-y-12">
          <div className="flex items-center text-end gap-6">
            <div className="flex flex-col items-end">
              <h2 className="uppercase font-bold text-xl text-primary">
                Croissant
              </h2>
              <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div>
              <LuCroissant className="h-16 w-16 text-primary" />
            </div>
          </div>

          <div className="flex items-center text-end gap-6">
            <div className="flex flex-col items-end">
              <h2 className="uppercase font-bold text-xl text-primary">
                French Toast
              </h2>
              <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div>
              <PiBread className="h-16 w-16 text-primary" />
            </div>
          </div>

          <div className="flex items-center text-end gap-6">
            <div className="flex flex-col items-end">
              <h2 className="uppercase font-bold text-xl text-primary">
                Pancakes
              </h2>
              <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div>
              <LuCroissant className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>

        <div>
          <img src={philosophyImage} alt="Philosophy Image" className="h-106" />
        </div>

        <div className="w-1/3 space-y-12">
          <div className="flex items-center text-start gap-6">
            <div>
              <MdOutlineCoffeeMaker className="h-16 w-16 text-primary" />
            </div>
            <div className="flex flex-col items-star">
              <h2 className="uppercase font-bold text-xl text-primary">
                Turkish Coffee
              </h2>
              <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="flex items-center text-start gap-6">
            <div>
              <CiCoffeeCup className="h-16 w-16 text-primary" />
            </div>
            <div className="flex flex-col items-star">
              <h2 className="uppercase font-bold text-xl text-primary">
                Coffee To Go
              </h2>
              <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="flex items-center text-start gap-6">
            <div>
              <PiCoffeeBold className="h-16 w-16 text-primary" />
            </div>
            <div className="flex flex-col items-star">
              <h2 className="uppercase font-bold text-xl text-primary">
                Morning Coffee
              </h2>
              <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
