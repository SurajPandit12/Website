"use client";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setResultType("info");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "dae51535-761a-47c4-a10f-400daaf489d3");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        setResultType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult(data.message || "Error submitting the form");
        setResultType("error");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      setResultType("error");
    }

    setTimeout(() => {
      setResult("");
      setResultType("");
    }, 5000);
  };

  return (
    <section className="py-16 px-4 relative" id="contact">
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="w-full max-w-[600px] lg:w-[550px] mx-auto lg:mx-0">
            <form
              name="contact-form"
              onSubmit={onSubmit}
              className="bg-neutral-800/30 p-6 md:p-8 rounded-2xl border border-neutral-700/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-medium text-white mb-6">
                Let's Get in Touch!
              </h2>

              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-0 py-2.5 text-sm bg-transparent border-0 border-b-2 border-indigo-800/50 focus:border-violet-600 focus:outline-none peer text-white"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-0 py-2.5 text-sm bg-transparent border-0 border-b-2 border-indigo-800/50 focus:border-violet-600 focus:outline-none peer text-white"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-0 py-2.5 text-sm bg-transparent border-0 border-b-2 border-indigo-800/50 focus:border-violet-600 focus:outline-none peer resize-none text-white"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Message
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 py-2.5 px-6 rounded-lg text-white font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Result Message */}
              {result && (
                <div
                  className={`mt-4 p-3 rounded-lg text-sm flex items-center gap-2 ${
                    resultType === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : resultType === "error"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  }`}
                >
                  {resultType === "success" && (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  {resultType === "error" && (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{result}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="w-full max-w-[600px] lg:w-[300px]">
            <div className="bg-neutral-800/30 p-6 rounded-2xl border border-neutral-700/50 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">
                Contact Info
              </h3>

              {/* Email */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Email
                </p>
                <a
                  href="mailto:my.surajpandit@gmail.com"
                  className="flex items-center gap-2 text-sm text-neutral-300 hover:text-violet-400 transition-colors group"
                >
                  <Mail
                    size="18px"
                    className="text-violet-500 group-hover:scale-110 transition-transform"
                  />
                  <span>my.surajpandit@gmail.com</span>
                </a>
              </div>

              {/* Response Time */}
              <div className="border-t border-neutral-700/50 pt-4">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Response Time
                </p>
                <p className="text-sm text-neutral-400">
                  Typically within{" "}
                  <span className="text-violet-400 font-medium">
                    24-48 hours
                  </span>
                </p>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-neutral-600 mt-4 italic">
                Your information will be kept confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
