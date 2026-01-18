import propertiesData from "../data/data.json";

const Properties = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">

      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Our Properties</h1>
          <p className="mt-4 text-gray-200 max-w-2xl">
            Explore verified industrial and commercial properties in prime
            locations of Sahibabad.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {propertiesData.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.png";
                  }}
                />
              </div>

              <div className="p-6">
                <span className="text-xs bg-[#0A2540]/10 text-[#0A2540] px-3 py-1 rounded-full fonti rounded-full font-semibold">
                  {property.type}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-[#0A2540]">
                  {property.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  📍 {property.location}
                </p>

                <p className="mt-2 text-gray-600 text-sm">
                  📐 Area: {property.area}
                </p>

                <p className="mt-3 font-semibold text-[#F97316]">
                  {property.price}
                </p>

                <a
                  href="tel:9891714666"
                  className="block mt-5 text-center bg-[#F97316] text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A2540]">
            Need Custom Industrial Property?
          </h2>
          <p className="mt-4 text-gray-600">
            Call us for site visit and best deals.
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

export default Properties;
