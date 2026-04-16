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
      
      {/* Background layer */}
      <div 
        className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-[url('/contact_background.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      >
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
    </main>
  );
}