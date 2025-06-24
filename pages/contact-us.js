import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import axios from "axios";

const Sub = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setErrorMessage(null);
    setState("LOADING");

    try {
      const response = await axios.post("/api/msg", {
        name,
        email,
        phone,
        message,
      });
      if (response.status === 200) {
        setState("SUCCESS");
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setState("ERROR");
      setErrorMessage(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Send Us a Message
      </h2>
      {state === "SUCCESS" && (
        <p className="text-green-500">Thank you! We'll contact you shortly.</p>
      )}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={subscribe}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          disabled={state === "LOADING"}
        >
          {state === "LOADING" ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Vitrectomy Rentals Ontario</title>
        <meta
          name="description"
          content="Get in touch with Vitrectomy Rentals for high-quality face-down recovery equipment across Ontario. Call us or send a message today."
        />
        <meta
          name="keywords"
          content="Vitrectomy Rentals Ontario, contact vitrectomy rentals, recovery bed rental, face down recovery chair rental, Ontario medical rentals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vitrectomy Rentals Ontario" />
        <meta
          property="og:title"
          content="Contact Us | Vitrectomy Rentals Ontario"
        />
        <meta
          property="og:description"
          content="Contact Vitrectomy Rentals for face-down recovery equipment rentals. Serving Toronto, Ontario, and more."
        />
        <meta
          property="og:url"
          content="https://www.vitrectomyrentals.ca/contact-us"
        />
        <meta
          property="og:image"
          content="https://www.vitrectomyrentals.ca/contact-banner.jpg"
        />
        <link
          rel="canonical"
          href="https://www.vitrectomyrentals.ca/contact-us"
        />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-10944717747"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10944717747');
          `,
        }}
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-12">
            Contact Us
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Image
                  src="/retinala.jpg"
                  alt="Contact Us"
                  width={400}
                  height={300}
                  className="rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Have questions? We're here to help. Reach out to us via phone,
                  email, or by filling out the contact form.
                </p>
                <div className="flex items-center text-lg mb-4">
                  <PhoneIcon className="text-blue-600 mr-2" />
                  <a
                    href="tel:+12896339933"
                    className="text-gray-700 hover:underline"
                  >
                    (289) 633-9933
                  </a>
                </div>
                <div className="flex items-center text-lg">
                  <EmailIcon className="text-blue-600 mr-2" />
                  <a
                    href="mailto:info@vitrectomyrentals.ca"
                    className="text-gray-700 hover:underline"
                  >
                    info@vitrectomyrentals.ca
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Sub />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
