const Industrial = () => {
  const industrialAreas = [
    {
      name: "Sahibabad Industrial Area",
      description:
        "Well-connected industrial hub with easy access to NH-24, Delhi and Ghaziabad.",
      features: [
        "Wide Roads",
        "Power & Water Supply",
        "Industrial Zoning",
        "Excellent Connectivity",
      ],
    },
    {
      name: "Site IV Industrial Area",
      description:
        "Preferred location for factories, warehouses and MSME units.",
      features: [
        "Approved Industrial Plots",
        "Close to Railway Station",
        "Labour Availability",
        "Legal Clear Properties",
      ],
    },
    {
      name: "GPP Industrial Area",
      description:
        "Suitable for small to medium manufacturing units and storage facilities.",
      features: [
        "Affordable Rates",
        "Good Infrastructure",
        "Commercial Access",
        "Local Market Nearby",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB]">

      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Industrial Areas</h1>
          <p className="mt-4 text-gray-200 max-w-2xl">
            We deal in verified industrial plots and properties across prime
            industrial locations in Sahibabad and nearby areas.
          </p>
        </div>
      </section>

      {/* Industrial Areas List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {industrialAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0A2540]">
                {area.name}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {area.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {area.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <a
                href="tel:9891714666"
                className="inline-block mt-6 bg-[#F97316] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A2540]">
            Need Industrial Property in Sahibabad?
          </h2>
          <p className="mt-4 text-gray-600">
            Call us for site visits, pricing details and legal assistance.
          </p>

          <a
            href="tel:9891714666"
            className="inline-block mt-6 bg-[#0A2540] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0F3A5F] transition"
          >
            Call 9891714666
          </a>
        </div>
      </section>

    </div>
  );
};

export default Industrial;
