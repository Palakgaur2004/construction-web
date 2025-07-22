"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [mode, setMode] = useState(null); // "booking" | "quote"

  return (
    <main className="bg-slate-200">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact BuilderPro"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Tell us what you need — book a site visit or request a custom quote.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setMode("booking")}
              className={`flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition ${
                mode === "booking"
                  ? "bg-white text-black"
                  : "bg-rose-600 hover:bg-rose-700 text-white"
              }`}
            >
              <Calendar className="h-5 w-5" />
              Book Site Visit
            </button>
            <button
              onClick={() => setMode("quote")}
              className={`flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition border-2 ${
                mode === "quote"
                  ? "bg-white text-black border-white"
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Form Area */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6">
          {!mode && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              Select an option above to proceed.
            </motion.p>
          )}

          <AnimatePresence mode="wait">
            {mode === "booking" && (
              <motion.div
                key="booking"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
              >
                <BookingForm />
              </motion.div>
            )}

            {mode === "quote" && (
              <motion.div
                key="quote"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
              >
                <QuoteForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

/* ---------- Booking Form ---------- */
function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");   // success message
  const [error, setError] = useState("");       // error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSuccess("Your booking is confirmed! 🎉");
      e.target.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Schedule a Site Visit</h2>
      <Input label="Full Name" name="name" required />
      <Input label="Phone" name="phone" type="tel" required />
      <Input label="Email" name="email" type="email" required />
      <Input label="Project Address" name="address" required />
      <Input label="Preferred Date" name="date" type="date" required />
      <Input label="Preferred Time" name="time" type="time" required />
      {success && (
        <div className="text-green-600 text-center font-semibold">{success}</div>
      )}
      {error && (
        <div className="text-red-600 text-center font-semibold">{error}</div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-rose-600 py-3 text-white font-semibold hover:bg-rose-700"
      >
        {loading ? "Submitting..." : "Confirm Booking"}
      </button>
    </form>
  );
}

/* ---------- Quote Form ---------- */
function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");   
  const [error, setError] = useState("");       

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSuccess("Your message was sent! 📩");
      e.target.reset();
    } catch (err) {
      setError("Failed to send request. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Request a Quote</h2>
      <Input label="Name" name="name" required />
      <Input label="Email" name="email" type="email" required />
      <Input label="Phone" name="phone" type="tel" required />
      <Input label="Message / Project Details" name="message" isTextArea />
      {success && (
        <div className="text-green-600 text-center font-semibold">{success}</div>
      )}
      {error && (
        <div className="text-red-600 text-center font-semibold">{error}</div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-rose-600 py-3 text-white font-semibold hover:bg-rose-700"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

/* ---------- Reusable Input ---------- */
function Input({ label, isTextArea = false, ...props }) {
  const classes =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-3";
  const El = isTextArea ? "textarea" : "input";
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <El rows={isTextArea ? 4 : undefined} className={classes} {...props} />
    </div>
  );
}
