import About from "@/sections/About";
import Cta from "@/sections/Cta";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Menu from "@/sections/Menu";
import Philosophy from "@/sections/Philosophy";
import Reason from "@/sections/Reason";
import { heroData } from "@/lib/data/heroData";
import { featuresData } from "@/lib/data/featuresData";
import { aboutData } from "@/lib/data/aboutData";
import { reasonData } from "@/lib/data/reasonData";
import { philosophyData } from "@/lib/data/philosophyData";
import { ctaData } from "@/lib/data/ctaData";
import { menuData } from "@/lib/data/menuData";

export default function Home() {
  return (
    <>
      <Hero {...heroData} />
      <Features {...featuresData} />
      <About {...aboutData} />
      <Reason {...reasonData} />
      <Philosophy {...philosophyData} />
      <Cta {...ctaData} />
      <Menu {...menuData} />
    </>
  );
}
