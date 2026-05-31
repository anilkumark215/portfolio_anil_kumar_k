import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      "service_uys9d1n" ,//Replase with your EmailJS Service ID
      "template_ursgml9", //Replase with your EmailJs Templete ID
       form.current,
       "zuS90G8tUwoF2al0z" //Replace with your EmailJS Public Key

    )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      {/* <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700"> */}
      {/* Contact Details */}
<div className="mb-8 text-center">
  <h3 className="text-2xl font-semibold text-white mb-4">
    Get In Touch
  </h3>

  {/* <div className="flex flex-col gap-3 text-gray-300">
    <a
      href="mailto:kavali.anil.dev@gmail.com"
      className="hover:text-purple-400 transition"
    >
      📧 kavali.anil.dev@gmail.com
    </a>

    <a
      href="tel:+919573303129"
      className="hover:text-purple-400 transition"
    >
      📞 +91 9573303129
    </a>
  </div> */}

  <div className="w-full max-w-md mb-8 flex flex-col gap-4">

  {/* Email Box */}
  <a
    href="mailto:kavali.anil.dev@gmail.com"
    className="bg-[#0d081f] p-4 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 transition block"
  >
    <div className="text-sm text-gray-400 mb-1">Email</div>
    <div className="text-white font-medium">
      📧 kavali.anil.dev@gmail.com
    </div>
  </a>

  {/* Phone Box */}
  <a
    href="tel:+919573303129"
    className="bg-[#0d081f] p-4 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 transition block"
  >
    <div className="text-sm text-gray-400 mb-1">Phone</div>
    <div className="text-white font-medium">
      📞 +91 9573303129
    </div>
  </a>

</div>
</div>

{/* Contact Form */}
<div className="mt-4 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;