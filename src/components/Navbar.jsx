import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Industrial", path: "/industrial" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" className="h-16"></img>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 font-medium hover:text-[#0A2540] transition"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9891714666"
              className="bg-[#F97316] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 font-medium hover:text-[#0A2540]"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:9891714666"
              className="bg-[#F97316] text-white text-center py-2 rounded-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
