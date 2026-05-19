import Navbar from "@/components/bakery/Navbar";
import HeroSection from "@/components/bakery/HeroSection";
import MenuPricingAbout from "@/components/bakery/MenuPricingAbout";
import OrderContactFooter from "@/components/bakery/OrderContactFooter";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", color: "var(--text-main)" }}>
      <Navbar scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <MenuPricingAbout scrollTo={scrollTo} />
      <OrderContactFooter scrollTo={scrollTo} />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
