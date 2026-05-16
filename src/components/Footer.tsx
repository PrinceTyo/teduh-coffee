import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import logoImage from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary px-4 py-20 md:px-20 space-y-10 text-white">
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 justify-between gap-10 md:gap-20">
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
            <img src={logoImage} alt="Logo" className="h-16" />
            <h1 className="font-semibold text-3xl">Teduh Coffee</h1>
          </div>
          <blockquote className="italic">
            Teduh Coffee menghadirkan ruang hangat untuk menikmati kopi, berbagi
            cerita, Hadir untuk menemani setiap momen kamu dan menemukan
            ketenangan dalam setiap tegukan.
          </blockquote>
          <div className="flex items-center gap-x-2">
            <a href="">
              <FaWhatsapp size={22} />
            </a>
            <a href="">
              <FaInstagram size={22} />
            </a>
            <a href="">
              <FaFacebook size={22} />
            </a>
            <a href="">
              <FaPinterest size={22} />
            </a>
            <a href="">
              <RiTwitterXFill size={22} />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Opening Hours</h1>

          <div className="space-y-1">
            <dl className="flex items-center gap-3">
              <dt>Monday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">08.00 - 22.00</dd>
            </dl>

            <dl className="flex items-center gap-3">
              <dt>Tuesday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">08.00 - 22.00</dd>
            </dl>

            <dl className="flex items-center gap-3">
              <dt>Wednesday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">08.00 - 22.00</dd>
            </dl>

            <dl className="flex items-center gap-3">
              <dt>Thursday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">08.00 - 22.00</dd>
            </dl>

            <dl className="flex items-center gap-3">
              <dt>Friday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">08.00 - 23.00</dd>
            </dl>

            <dl className="flex items-center gap-3">
              <dt>Saturday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">09.00 - 23.00</dd>
            </dl>

            <dl className="flex items-center gap-3">
              <dt>Sunday</dt>
              <Separator className="flex-1 bg-white/20" />
              <dd className="text-white/80">CLOSED</dd>
            </dl>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>
          <p className="text-md text-white/80">
            Jl. Ijen Boulevard No. 12, Banyuwangi, Indonesia
          </p>
          <p className="text-md text-white/80">+62 881-1661-7171</p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              teduhcoffee@gmail.com
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              www.teduhcoffee.com
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              @teduhcoffee
            </a>
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Nusa Trip</h1>
          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#about"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              About
            </a>
          </p>
          <p>
            <a
              href="#reason"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Reason
            </a>
          </p>
          <p>
            <a
              href="#reason"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Philosophy
            </a>
          </p>
          <p>
            <a
              href="#menu"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Menu
            </a>
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between text-lg md:text-md">
        <p className="text-white/80 w-full md:w-3/4 lg:w-full">
          © 2024 Teduh Coffee Shop. All rights reserved.
        </p>
        <div className="flex items-center justify-start md:justify-end gap-x-3 w-full">
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-secondary transition duration-300"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-secondary transition duration-300"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
