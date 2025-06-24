import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

// Animated FAQ Card Component
const InfoCard = ({ title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] perspective-1000"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="absolute inset-0 p-6 bg-white rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsFlipped(true)}
          >
            <div className="h-full flex flex-col items-center justify-between">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mt-4 mb-2 line-clamp-2">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-purple-600 mt-auto">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute inset-0 p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg border border-purple-100 cursor-pointer"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsFlipped(false)}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                {title}
              </h3>
              <div className="flex-grow overflow-auto text-gray-600 leading-relaxed">
                {content}
              </div>
              <div className="mt-4 flex items-center gap-2 text-purple-600">
                <svg
                  className="w-4 h-4 transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-sm font-medium">Go back</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const VitrectomyRentals = () => {
  const faqData = [
    {
      title: "What is the purpose of a vitrectomy?",
      content: "A vitrectomy is a surgical procedure that involves removing the gel-like substance called the vitreous humor from the eye. This procedure is performed to treat various eye conditions and improve vision. The surgeon carefully removes the vitreous and replaces it with a clear solution to maintain the eye's shape and promote healing.",
    },
    {
      title: "Why is posturing necessary after a vitrectomy?",
      content: "Posturing is crucial after a vitrectomy because it helps position the bubble that is placed in your eye during surgery. This bubble needs to be positioned correctly to effectively seal any retinal breaks or support the macula. The specific posturing requirements depend on your condition and the location of the treatment in your eye.",
    },
    {
      title: "How can you prepare for posturing after a vitrectomy?",
      content: "To prepare for posturing after a vitrectomy, consider renting specialized equipment before your surgery. It's recommended to have your recovery equipment ready at home before the procedure. You should also arrange for help with daily activities, prepare your living space, and gather entertainment options that can be enjoyed while maintaining the required position.",
    },
    {
      title: "What are the guidelines for daily activities?",
      content: "During the posturing period, face-down positioning is necessary during waking hours. You should maintain the prescribed position for the specified duration, typically taking short breaks every hour. Using specialized equipment can help maintain proper positioning while allowing you to perform some daily activities comfortably.",
    },
  ];

  return (
    <>
      <Head>
        <title>Vitrectomy Recovery Equipment Rentals | Face-Down Recovery Solutions</title>
        <meta name="description" content="Specialized vitrectomy recovery equipment rentals in Toronto. Face-down recovery beds and chairs for optimal post-surgery healing. Expert support for your recovery journey." />
        <meta name="keywords" content="vitrectomy recovery, face-down equipment, medical rentals, eye surgery recovery, Toronto medical equipment, vitrectomy bed rental, recovery chair rental" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Vitrectomy Recovery Equipment Rentals | Face-Down Recovery Solutions" />
        <meta property="og:description" content="Specialized vitrectomy recovery equipment rentals in Toronto. Face-down recovery beds and chairs for optimal post-surgery healing." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.vitrectomyrentals.ca//vitrectomy-rentals" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vitrectomy Rentals" />
        <link rel="canonical" href="https://www.vitrectomyrentals.ca/vitrectomy-rentals" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10944717747"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10944717747');
            `,
          }}
        />
      </Head>
<div className="min-h-screen bg-gradient-to-b from-white via-white to-black">
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
          

          <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-16">
            {/* Bed Rental Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl mb-12 md:mb-0 flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-purple-800 mb-3">
                    Bed Rental
                  </h2>
                  <p className="text-lg text-purple-600 font-medium">Facedown Recovery Solution</p>
                </div>
                
                <div className="relative mb-8 group">
                  <img 
                    src="/bed.jpg" 
                    alt="Specialized Vitrectomy Recovery Bed"
                    className="w-full object-cover h-64 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Are you in the process of recovering from a vitrectomy procedure that requires you to maintain a facedown position? Our specialized bed rental ensures proper positioning and maximum comfort during your recovery period.
                </p>
                
                <div className="bg-purple-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Adjustable height with memory foam comfort layer
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Perfect complement to chair rental for 24-hour comfort
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Essential for proper face-down sleeping position
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/price">
                <a className="inline-flex items-center justify-center w-full bg-purple-600 text-white text-lg font-medium py-4 px-6 rounded-xl hover:bg-purple-700 transition-colors duration-300">
                  View Rental Options
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </Link>
            </div>

            {/* Chair Rental Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-purple-800 mb-3">
                    Chair Rental
                  </h2>
                  <p className="text-lg text-purple-600 font-medium">Facedown Recovery Solution</p>
                </div>

                <div className="relative mb-8 group">
                  <img 
                    src="/chair-9599SM.jpg" 
                    alt="Specialized Vitrectomy Recovery Chair"
                    className="w-full object-cover h-64 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">Key Benefits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Ergonomic design for extended comfort during recovery
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Includes 2-Way Mirror for entertainment access
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Flexible positioning options for daily activities
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Enhanced comfort features for extended use
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/price">
                <a className="inline-flex items-center justify-center w-full bg-purple-600 text-white text-lg font-medium py-4 px-6 rounded-xl hover:bg-purple-700 transition-colors duration-300">
                  View Rental Options
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="tel:+1-2896339933">
              <a className="inline-flex items-center gap-2 text-xl font-medium text-white bg-purple-600 px-8 py-4 rounded-xl hover:bg-purple-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now to Reserve: 289-633-9933
              </a>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-screen-lg mx-auto px-4">
          <hr className="border-t border-gray-300 my-16" />
        </div>
<div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-purple-900 mb-6">
              Vitrectomy Recovery Equipment Rentals
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Specialized face-down recovery equipment designed for optimal healing after vitrectomy surgery. Choose from our comfortable bed and chair options for a supported recovery experience.
            </p>
          </div>

        {/* FAQ Section (remains the same) */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding Vitrectomy Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about the essential aspects of vitrectomy recovery and how
              proper positioning can help ensure optimal healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {faqData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <InfoCard {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    
      
    </>
  );
};

export default VitrectomyRentals;
