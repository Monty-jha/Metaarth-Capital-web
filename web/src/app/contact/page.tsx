"use client";
import { Section } from "@/components/Section";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Apply route-scoped theme to extend yellow to footer and remove gaps
  useEffect(() => {
    document.body.classList.add("contact-theme");
    return () => document.body.classList.remove("contact-theme");
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server error. Please try again later.");
      }
      
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }
      setStatus(data.message || "Thank you. We will get back to you shortly.");
      // Reset form safely using ref
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err: any) {
      console.error("Contact form error:", err);
      setStatus(err.message || "Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#ca8a04] min-h-screen pb-20">
      <Section className="py-16 text-white">
        <h1 className="section-title font-serif !text-black">
          Get in <span className="underline decoration-black underline-offset-4">Touch</span>
        </h1>
        <div className="grid lg:grid-cols-12 gap-10 mt-8">
          {/* Left panel: info */}
          <motion.div className="lg:col-span-5 rounded-3xl p-8 text-lg md:text-xl leading-relaxed" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-black/70 italic">Contact</h2>
            <p >Have questions about our services or want to discuss your investment needs? Our team is ready to assist you.</p>
            <div className="mt-6 space-y-5 text-[15px]">
              <div>
                <div className="font-semibold text-xl md:text-2xl text-black/70 italic">Headquarters</div>
                <div >METAARTH FINSERVE PRIVATE LIMITED
                  7, Ground Floor, Saran Chamber- II, Park Road, Hazrataganj,
                  Lucknow - 226001
                  India</div>
              </div>
              <div>
                <div className="font-semibold text-xl md:text-2xl text-black/70 italic">Phone</div>
                <div>+91 9839906754
                  +91 8104958203
                  +91 8299559257</div>
              </div>
              <div>
                <div className="font-semibold text-xl md:text-2xl text-black/70 italic">Email</div>
                <div>metaarthfinserve@gmail.com</div>
              </div>
            </div>
          </motion.div>

          {/* Right panel: card with form */}
          <motion.form ref={formRef} className="lg:col-span-7 bg-white text-black rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.45)] space-y-4" onSubmit={onSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ scale: 1.01 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Name" className="rounded-md border p-3" />
              <input name="email" required type="email" placeholder="Email" className="rounded-md border p-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="phone" placeholder="Phone" className="rounded-md border p-3" />
              <input name="subject" required placeholder="Subject" className="rounded-md border p-3" />
            </div>
            <textarea name="message" required placeholder="Message" className="rounded-md border p-3 h-32 w-full transition shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary !bg-[#dc3545] hover:!bg-[#c12f3e]" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</motion.button>
            {status && <p className="muted mt-2 text-[#dc3545]">{status}</p>}
          </motion.form>
        </div>

         {/* Map embed */}
          <motion.div className="mt-10 overflow-hidden rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.45)]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ scale: 1.01 }}>
           <iframe
             title="Metaarth Capital Location"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.4936938969537!2d80.9492012!3d26.8431613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd14fe668413%3A0xd1619899d33cef11!2sDFMS%20Investments%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1758532982042!5m2!1sen!2sin"
             width="100%"
             height="360"
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             style={{ border: 0 }}
             allowFullScreen
           />
          </motion.div>
      </Section>
    </div>
  );
}



