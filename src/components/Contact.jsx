"use client";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "43ccad5c-ae1f-4987-b8d2-cba4bdad4d6c", // 🔑 replace with your Web3Forms key
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("✅ Message sent successfully!");
      e.target.reset();
    } else {
      alert("❌ Something went wrong. Try again later.");
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-900 via-purple-950 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-center">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-center text-slate-300 mb-10 max-w-xl mx-auto">
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/30 border border-purple-700 rounded-2xl p-8 shadow-lg flex flex-col gap-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Enter your message"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}
