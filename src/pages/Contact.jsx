import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting form");
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">

      {/* Page Header */}
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-200 max-w-2xl">
            Get in touch with Chauhan Properties for industrial and commercial
            property enquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A2540]">
              Get In Touch
            </h2>

            <p className="mt-4 text-gray-600">
              We are available to assist you with industrial plots, warehouses
              and commercial properties in Sahibabad and nearby areas.
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>📍 Sahibabad Industrial Area, Ghaziabad</p>
              <p>📞 <a href="tel:9891714666" className="text-[#F97316] font-semibold">9891714666</a></p>
              <p>✉️ <a href="mailto:shiv.chauhan0402@gmail.com" className="text-[#F97316] font-semibold">shiv.chauhan0402@gmail.com</a></p>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow">
              <iframe
                title="Chauhan Properties Location"
                src="https://www.google.com/maps?q=Sahibabad%20Industrial%20Area&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-[#0A2540]">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input type="hidden" name="subject" value="New Property Enquiry - Chauhan Properties" />
              <input type="hidden" name="from_name" value="Chauhan Properties Website" />

              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your Requirement"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F97316] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Submit Enquiry
              </button>

              {status && (
                <p className="text-sm text-center mt-3 text-gray-600">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
