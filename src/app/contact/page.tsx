"use client";

import { useState, FormEvent, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "246a3bc3-80eb-47b3-9681-394a9ec71942");
    //formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Message sent");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a192f]"> 
      
      {/* Photo collage inspired by the artist's design */}
      <div className="contact-collage" aria-hidden="true">
        <div className="contact-photo contact-photo-one" />
        <div className="contact-photo contact-photo-two" />
        <div className="contact-photo contact-photo-three" />
        <div className="contact-photo contact-photo-four" />
      </div>
      {/* Contact form */}
      <section className="relative z-10 flex flex-col items-center w-full py-20 px-4 mt-8 md:mt-16">
        <div className="flex flex-col items-center w-full mb-8">
          <label className="block text-white font-lavishly text-[64px] md:text-[100px] font-normal text-center leading-none">
            Contact Alex Willow
          </label>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col items-center w-full space-y-4 max-w-md">
          
          <div className="w-full">
            <input type="text" name="name" required className="w-full bg-white/90 px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-[#444] font-inter text-[14px]" placeholder="Name" />
          </div>

          <div className="w-full">
            <input type="email" name="email" required className="w-full bg-white/90 px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-[#444] font-inter text-[14px]" placeholder="Email" />
          </div>

          <div className="w-full">
            <textarea name="message" required rows={4} className="w-full bg-white/90 px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-[#444] font-inter text-[14px]" placeholder="Message" />
          </div>

          <div className="w-full flex justify-center mt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-3 rounded-full font-inter font-semibold text-[15px] transition-all ${
                status === "loading" 
                  ? "bg-gray-400 cursor-not-allowed text-white" 
                  : "bg-white text-black hover:bg-green-600 hover:text-white shadow-lg active:scale-95"
              }`}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
          </div>

          {status === "success" && <p className="mt-2 text-center text-green-400 font-medium">{message}</p>}
          {status === "error" && <p className="mt-2 text-center text-red-400 font-medium">{message}</p>}
        </form>
      </section>
      <style jsx>{`
        .contact-collage { position: fixed; inset: 0; display: grid; grid-template-columns: 29% 43% 28%; grid-template-rows: 48% 52%; background: #263b50; }
        .contact-photo { background-size: cover; background-position: center; }
        .contact-photo-one { grid-row: 1 / 3; background-image: url('/gallery-tree.jpg'); }
        .contact-photo-two { background-image: url('/shows-tree.jpg'); }
        .contact-photo-three { background-image: url('/gallery-sunset.jpg'); }
        .contact-photo-four { grid-column: 2 / 4; background-image: url('/contact-field.jpg'); }
        .contact-collage::after { content: ''; position: absolute; inset: 0; background: rgba(7, 16, 27, .6); }
        @media (max-width: 600px) {
          .contact-collage { grid-template-columns: 1fr 1fr; grid-template-rows: 45% 55%; }
          .contact-photo-one { grid-row: 1; }
          .contact-photo-three { display: none; }
          .contact-photo-four { grid-column: 1 / 3; }
        }
      `}</style>
    </main>
  );
}