import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = ["Home", "Menu", "Pricing", "About", "Order"];

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export default function Navbar({ scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "rgba(255,247,249,0.92)", borderColor: "var(--blush-light)" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <button onClick={() => handleScroll("home")} className="flex flex-col items-start leading-none">
          <span className="font-script text-3xl" style={{ color: "var(--blush-deep)" }}>Soft Blush</span>
          <span className="text-xs tracking-[0.25em] uppercase font-sans" style={{ color: "var(--text-soft)", marginTop: "-2px" }}>Bakery</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link.toLowerCase())}
              className="text-sm tracking-wide font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--text-soft)" }}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleScroll("order")}
          className="hidden md:block px-5 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105"
          style={{ backgroundColor: "var(--blush)", color: "#fff" }}
        >
          Order Now
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t px-5 py-6 flex flex-col gap-4" style={{ backgroundColor: "var(--cream)", borderColor: "var(--blush-light)" }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link.toLowerCase())}
              className="text-left text-base font-medium py-1"
              style={{ color: "var(--text-main)" }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleScroll("order")}
            className="mt-2 px-5 py-3 rounded-full text-sm font-medium w-full"
            style={{ backgroundColor: "var(--blush)", color: "#fff" }}
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
