import React from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

function createBundleData(oneweek, tendays, twoweeks) {
  return { oneweek, tendays, twoweeks };
}

const bundlePrices = createBundleData("$350", "$420", "$490");

const PricingCard = ({ period, price }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-medium text-gray-800 mb-4">{period}</h3>
    <p className="text-4xl font-bold text-purple-600 mb-2">{price}</p>
    <p className="text-sm text-gray-500">per bundle</p>
  </div>
);

export default function Prices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <Head>
        <title>Pricing | Vitrectomy Rentals</title>
        <meta
          name="description"
          content="Transparent pricing for face-down recovery equipment rentals. Explore cost-saving bundles for beds and chairs."
        />
        <meta
          name="keywords"
          content="vitrectomy rentals, pricing, face-down recovery equipment, bed and chair rental bundles"
        />
        <meta property="og:title" content="Pricing | Vitrectomy Rentals" />
        <meta
          property="og:description"
          content="Affordable pricing for face-down recovery equipment rentals. Rent high-quality recovery beds and chairs with bundle offers."
        />
        <meta
          property="og:url"
          content="https://www.vitrectomyrentals.ca/price"
        />
        <meta
          property="og:image"
          content="https://www.vitrectomyrentals.ca/pricing-banner.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.vitrectomyrentals.ca/price" />
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

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-600 mb-6">
            Pricing Options
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover affordable recovery equipment rentals tailored to your
            needs. See our cost saving bundle below.
          </p>
        </div>

        {/* Bundle Showcase */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/a.jpg"
                alt="Bed Rental"
                width={400}
                height={300}
                className="w-80 h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Bed Rental
                </h3>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
            <span className="text-3xl font-bold text-purple-600">+</span>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/b.JPG"
                alt="Chair Rental"
                width={400}
                height={300}
                className="w-80 h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Chair Rental
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offer and Pricing */}
        <div className="relative mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-75"></div>
          <div className="relative bg-white rounded-xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-purple-800 text-center mb-6">
              Special Bundle Offer!
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Save big with our bundle! Rent both the bed and chair
              together for an unmatched recovery experience tailored to your
              needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard period="1 Week" price={bundlePrices.oneweek} />
              <PricingCard period="10 Days" price={bundlePrices.tendays} />
              <PricingCard period="2 Weeks" price={bundlePrices.twoweeks} />
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
              *Prices exclude tax*
            </p>
          </div>
        </div>
        {/* Complimentary Add-Ons */}
        <div className="relative bg-purple-50 rounded-lg p-8 mb-16 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-purple-800">
              Complimentary Add-Ons
            </h3>
            <p className="text-gray-600 text-sm">
              Enhance your recovery experience with these free extras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src="/carpic.jpg"
                alt="Complimentary Add-On"
                width={280}
                height={180}
                className="rounded-lg shadow-lg object-cover transform hover:scale-105 transition-all duration-200"
              />
            </div>
            {/* Add-On Details */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-600 flex-shrink-0 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM10 16l-4-4 1.414-1.414L10 13.172l6.586-6.586L18 8l-8 8z" />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    Portable car transfer piece for enhanced mobility.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-600 flex-shrink-0 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM10 16l-4-4 1.414-1.414L10 13.172l6.586-6.586L18 8l-8 8z" />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    2-way mirror for comfortable TV viewing.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-600 flex-shrink-0 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM10 16l-4-4 1.414-1.414L10 13.172l6.586-6.586L18 8l-8 8z" />
                  </svg>
                  <p className="text-gray-700 text-sm">
                    Professional setup and installation available.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Call to Reserve */}
        <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-lg shadow-lg text-center mx-auto max-w-md">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-white text-purple-600 font-bold text-sm px-3 py-1 rounded-full shadow">
            We’re here to help!
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            Need Assistance?
          </h3>
          <p className="text-purple-200 text-sm mb-6">
            Contact us now to reserve your recovery equipment or get answers to
            your questions!
          </p>
          <a
            href="tel:+1-2896339933"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg transform transition-all hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            Call (289) 633-9933
          </a>
        </div>
      </div>
    </div>
  );
}
