import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { navbarData } from "@/lib/data/navbarData";
import { footerData } from "@/lib/data/footerData";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar {...navbarData} />
      <main>{children}</main>
      <Footer {...footerData} />
    </div>
  );
}
