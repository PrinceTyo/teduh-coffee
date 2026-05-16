import philosophyImage from "@/assets/philosophy.png";
import coffeeBeanDecoration from "@/assets/about.png";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCroissant, LuDonut } from "react-icons/lu";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { PiBread, PiCoffeeBold } from "react-icons/pi";

export const philosophyData = {
  badge: "What Happens Here",

  title: "Coffee Build Your Base",

  ornamentImage: coffeeBeanDecoration,

  image: philosophyImage,

  leftItems: [
    {
      title: "Croissant",
      description:
        "Pastry renyah dengan aroma butter yang hangat dan menggoda. Cocok dinikmati bersama kopi favorit untuk menemani waktu santaimu.",
      icon: LuCroissant,
    },

    {
      title: "French Toast",
      description:
        "Roti lembut dengan sentuhan manis yang menghadirkan rasa nyaman di setiap gigitan. Disajikan hangat untuk melengkapi suasana yang tenang.",
      icon: PiBread,
    },

    {
      title: "Donut",
      description:
        "Donut lembut dengan rasa manis yang pas untuk menemani waktu santai kamu bersama secangkir kopi yang masih hangat.",
      icon: LuDonut,
    },
  ],

  rightItems: [
    {
      title: "Turkish Coffee",
      description:
        "Kopi dengan karakter rasa kuat dan aroma khas yang autentik. Diseduh untuk menghadirkan pengalaman meminum kopi yang lebih berkesan.",
      icon: MdOutlineCoffeeMaker,
    },

    {
      title: "Coffee To Go",
      description:
        "Kopi praktis yang siap menemani aktivitas harianmu kapan saja. Tetap menghadirkan cita rasa yang premium dalam setiap tegukan.",
      icon: CiCoffeeCup,
    },

    {
      title: "Morning Coffee",

      description:
        "Awali hari dengan secangkir kopi hangat yang menenangkan. Aroma dan rasanya dibuat untuk memberikan energi di setiap pagi.",

      icon: PiCoffeeBold,
    },
  ],
};
