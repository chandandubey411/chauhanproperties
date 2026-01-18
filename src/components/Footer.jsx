const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-gray-200">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Chauhan <span className="text-[#F97316]">Properties</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Trusted industrial and commercial property consultants in
            Sahibabad. We specialize in industrial plots, warehouses and
            factory units with complete transparency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#F97316] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/properties" className="hover:text-[#F97316] transition">
                Properties
              </a>
            </li>
            <li>
              <a href="/industrial" className="hover:text-[#F97316] transition">
                Industrial Area
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#F97316] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#F97316] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Industrial Plots</li>
            <li>Warehouses</li>
            <li>Factory Units</li>
            <li>Commercial Shops</li>
            <li>Property Consulting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h4>
          <p className="text-sm">
            📍 Sahibabad Industrial Area, Ghaziabad
          </p>
          <p className="mt-2 text-sm">
            📞 <a href="tel:9891714666" className="hover:text-[#F97316]">9891714666</a>
          </p>
          <p className="mt-2 text-sm">
            ✉️ <a href="mailto:shiv.chauhan0402@gmail.com" className="hover:text-[#F97316]">
              shiv.chauhan0402@gmail.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Chauhan Properties. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
