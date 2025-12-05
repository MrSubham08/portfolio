"use client";

import { Player } from "@lottiefiles/react-lottie-player"; // optional Lottie

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "YOUR_KEY",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();
    alert(result.success ? "✅ Message sent successfully!" : "❌ Something went wrong!");

    if (result.success) e.target.reset();
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-transparent text-white py-20 flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE – Animation (hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          {/* Lottie Animation */}
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_touohxv0.json"
            style={{ height: "360px", width: "360px" }}
          />
        </div>

        {/* RIGHT SIDE – Contact Form */}
        <div className="w-full md:w-1/2 max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] text-center md:text-left">
            Get In <span className="text-purple-400">Touch</span>
          </h2>

          <p className="text-slate-300 mb-10 text-center md:text-left">
            Fill out the form below and I’ll get back to you ASAP.
          </p>

          <form
            className="glass-card p-8 flex flex-col gap-6 backdrop-blur-xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="glass-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="glass-input"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="glass-input resize-none"
            ></textarea>
            <button type="submit" className="glass-button w-full">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
