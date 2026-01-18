const About = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">About Chauhan Properties</h1>
          <p className="mt-4 text-gray-200 max-w-2xl">
            Trusted industrial property consultants delivering reliable and
            transparent real estate solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A2540]">Who We Are</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Chauhan Properties is a professionally managed real estate
              consultancy specializing in industrial and commercial properties
              across Sahibabad and nearby industrial zones. With years of
              experience in the local market, we help businesses find the right
              property that matches their operational and investment needs.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We deal in verified industrial plots, warehouses, factory units
              and commercial spaces. Our approach is simple — honest advice,
              transparent documentation and long-term client relationships.
            </p>
            {/* Mission & Values */}
            <section className="bg-white py-7">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center">
                <div className="p-6 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-gray-600 text-sm">
                    To provide reliable industrial property solutions with
                    complete transparency and professional service.
                  </p>
                </div>

                <div className="p-6 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-gray-600 text-sm">
                    To become the most trusted industrial real estate consultant
                    in Sahibabad and surrounding regions.
                  </p>
                </div>

                <div className="p-6 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Our Values
                  </h3>
                  <p className="mt-4 text-gray-600 text-sm">
                    Integrity, transparency, customer satisfaction and long-term
                    partnerships.
                  </p>
                </div>
              </div>
            </section>
            {/* Why Choose Us */}
            <section className="py-7">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#0A2540] text-center">
                  Why Choose Chauhan Properties
                </h2>

                <div className="mt-8 grid md:grid-cols-2 gap-8 text-center">
                  {[
                    "Local Market Expertise",
                    "Verified Properties",
                    "Transparent Dealings",
                    "Complete Documentation Support",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                      <p className="font-semibold text-[#0A2540]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Image */}
          <div>
            <img
              src="/about-industrial.jpg"
              alt="About Chauhan Properties"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A2540] text-center">
            Why Choose Chauhan Properties
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {[
              "Local Market Expertise",
              "Verified Properties",
              "Transparent Dealings",
              "Complete Documentation Support",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-[#0A2540]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F97316] py-16 text-white text-center">
        <h2 className="text-3xl font-bold">Looking for Industrial Property?</h2>
        <p className="mt-4">
          Get in touch with Chauhan Properties for expert guidance.
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

export default About;
