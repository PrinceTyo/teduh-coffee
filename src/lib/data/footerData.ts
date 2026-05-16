import logoImage from "@/assets/logo.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export const footerData = {
  brand: {
    logo: logoImage,
    title: "Teduh Coffee",
    description:
      "Teduh Coffee menghadirkan ruang hangat untuk menikmati kopi, berbagi cerita, dan menemukan ketenangan dalam setiap tegukan. Hadir untuk menemani setiap momen dengan suasana yang nyaman dan penuh kehangatan.",
    socials: [
      {
        icon: FaWhatsapp,
        link: "#",
      },
      {
        icon: FaInstagram,
        link: "#",
      },
      {
        icon: FaFacebook,
        link: "#",
      },
      {
        icon: FaPinterest,
        link: "#",
      },
      {
        icon: RiTwitterXFill,
        link: "#",
      },
    ],
  },

  openingHours: [
    {
      day: "Monday",
      time: "08.00 - 22.00",
    },
    {
      day: "Tuesday",
      time: "08.00 - 22.00",
    },
    {
      day: "Wednesday",
      time: "08.00 - 22.00",
    },
    {
      day: "Thursday",
      time: "08.00 - 22.00",
    },
    {
      day: "Friday",
      time: "08.00 - 23.00",
    },
    {
      day: "Saturday",
      time: "09.00 - 23.00",
    },
    {
      day: "Sunday",
      time: "CLOSED",
    },
  ],

  contactInfo: {
    address: "Jl. Ijen Boulevard No. 12, Banyuwangi, Indonesia",
    phone: "+62 881-1661-7171",
    email: "teduhcoffee@gmail.com",
    website: "www.teduhcoffee.com",
    instagram: "@teduhcoffee",
  },

  quickLinks: [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Reason",
      link: "#reason",
    },
    {
      name: "Philosophy",
      link: "#philosophy",
    },
    {
      name: "Menu",
      link: "#menu",
    },
  ],

  copyright: "© 2024 Teduh Coffee Shop. All rights reserved.",

  policies: [
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Terms of Use",
      link: "#",
    },
  ],
};
