const Home = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#0F3A5F] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted Industrial <br />
              Property Consultants
            </h1>
            <p className="mt-6 text-gray-200 text-lg">
              We deal in industrial plots, warehouses and commercial properties
              in Sahibabad & nearby industrial areas.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:9891714666"
                className="bg-[#F97316] px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://www.indospace.in/wp-content/uploads/2019/12/Types-of-Industrial-Real-Estate-Heres-All-You-Need-to-Know-2.jpg"
              alt="Industrial Property"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A2540]">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            Complete industrial property solutions under one roof
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {[
              "Industrial Plots",
              "Warehouses",
              "Factory Setup",
              "Commercial Shops",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#0A2540]">
                  {service}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Verified properties with proper documentation and clear title.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-[#0A2540]">
              Why Choose Chauhan Properties?
            </h2>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ 10+ Years of Industry Experience</li>
              <li>✔ Trusted Local Market Expertise</li>
              <li>✔ Transparent Dealings</li>
              <li>✔ Assistance in Legal & Documentation</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.indospace.in/wp-content/uploads/2022/12/Ambala-Rajpura-Industrial-areaAmbala-Rajpura-Industrial-area_thumnail.webp"
              alt="Industrial Area"
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#F97316] py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Looking for Industrial Property?
        </h2>
        <p className="mt-4">
          Contact Chauhan Properties today for best deals.
        </p>

        <a
          href="tel:9891714666"
          className="inline-block mt-6 bg-white text-[#F97316] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Call 9891714666
        </a>
      </section>

    </div>
  );
};

export default Home;
