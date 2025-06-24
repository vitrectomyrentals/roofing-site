import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-rating-stars-component";
import VitrectomyCards from "../Components/cards"; // Updated import path
import VitrectomyInfo from "../Components/vitrectomy-rentals";
import ReviewBar from "../Components/review";
import Hero from "../Components/hero";
import RecoverySection from "../Components/recovery";
export async function getStaticProps() {
  return {
    props: {
      title:
        "Vitrectomy Bed & Chair Rentals | Face Down Recovery Equipment Toronto ",
      description:
        "Rent professional face down recovery equipment for post-vitrectomy surgery in Toronto & GTA. Specializing in recovery beds and chairs for optimal healing.",
    },
  };
}
export default function Index({ title, description }) {
  const packages = [
    {
      name: "Basic Package",
      price: "350",
      duration: "1 week",
      description: "Essential recovery equipment",
      image: "/a.jpg",
      features: [
        "Face Down Recovery Bed",
        "Recovery Chair with Mirror",
        "Adjustable Height System",
        "Memory Foam Padding",
        "Priority Support",
      ],
    },
    {
      name: "Complete Package",
      price: "420",
      duration: "10 days",
      description: "Our most popular recovery solution",
      image: "/b.JPG",
      features: [
        "Face Down Recovery Bed",
        "Recovery Chair with Mirror",
        "Premium Support Package",
        "Extended Duration Coverage",
        "Priority Support",
      ],
      featured: true,
    },
    {
      name: "Extended Package",
      price: "490",
      duration: "2 weeks",
      description: "Extended recovery support",
      image: "/bed2.jpg",
      features: [
        "Face Down Recovery Bed",
        "Recovery Chair with Mirror",
        "Premium Support Package",
        "Extended Duration",
        "Priority Support",
      ],
    },
  ];

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Vitrectomy Rentals Toronto",
    image: "https://vitrectomyrentals.ca/bed.jpg",
    description:
      "Professional face down recovery equipment rentals for post-vitrectomy surgery across the Greater Toronto Area. Specializing in medical-grade recovery beds and chairs.",
    "@id": "https://vitrectomyrentals.ca",
    url: "https://vitrectomyrentals.ca",
    telephone: "+1-289-633-9933",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "50 George Butchart Dr",
      addressLocality: "North York",
      addressRegion: "ON",
      postalCode: "M3K 0C9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7343,
      longitude: -79.4851,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Toronto",
      },
      {
        "@type": "City",
        name: "Mississauga",
      },
      {
        "@type": "City",
        name: "Brampton",
      },
      {
        "@type": "City",
        name: "Vaughan",
      },
      {
        "@type": "City",
        name: "Markham",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://goo.gl/maps/9eYNECCEJGTCc9qs5",
      "https://www.facebook.com/your-facebook-page",
      "https://www.instagram.com/your-instagram",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Vitrectomy Recovery Equipment Bundle",
    description:
      "Professional face down recovery equipment including specialized bed and chair for optimal post-vitrectomy recovery.",
    brand: {
      "@type": "Brand",
      name: "Vitrectomy Rentals Toronto",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      lowPrice: "200",
      highPrice: "490",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="vitrectomy rentals ontario, vitrectomy bed rental, face down recovery chair, medical recovery equipment Toronto, bed rental Ontario, vitrectomy recovery chair rental"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://vitrectomyrentals.ca/" />
        <meta
          property="og:image"
          content="https://vitrectomyrentals.ca/bed.jpg"
        />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://vitrectomyrentals.ca/bed.jpg"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([businessSchema, productSchema]),
          }}
        />

        <link rel="canonical" href="https://www.vitrectomyrentals.ca/" />
      </Head>
      <div className="relative">
        <Hero />

        <div
          className="relative py-24 sm:py-32 bg-black bg-cover bg-center-right"
          style={{
            backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, .6)), url('/bed.jpg')`,
          }}
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-4xl text-center" id="price">
              <div className="mb-8 rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md">
                <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-800">
                  Recovery Packages
                </span>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Choose Your Recovery Solution
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Professional recovery equipment packages tailored to your
                  needs
                </p>
              </div>
            </div>

            {/* Bundle Visualization */}

            {/* Special Bundle Banner */}
            <div className="mx-auto mb-12 max-w-4xl rounded-lg bg-purple-700 px-4 py-4 text-center text-white shadow-md">
              <h3 className="mb-2 text-2xl font-semibold">
                Special Bundle Offer!
              </h3>
              <p className="text-md px-12">
                Get the Bed and Chair together as a convenient, cost-saving
                package. Enjoy a comfortable facedown recovery experience with
                our bundle deal!
              </p>
            </div>

            {/* Package Cards */}
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-3xl bg-white p-8 transition-all duration-300 hover:shadow-2xl group ${
                    pkg.featured
                      ? "ring-2 ring-purple-600 shadow-xl lg:scale-105"
                      : "ring-1 ring-gray-200 hover:-translate-y-1"
                  }`}
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {pkg.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {pkg.duration}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold text-purple-600">
                        ${pkg.price}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {pkg.duration}
                      </span>
                    </div>

                    <ul className="space-y-4 text-sm text-gray-600">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-purple-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            />
                          </svg>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="tel:+1-2896339933"
                      className={`block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                        pkg.featured
                          ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl"
                          : "text-purple-600 ring-1 ring-purple-200 hover:bg-purple-50"
                      }`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Add-ons Section */}
            {/* Free Add-ons Section */}
            <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white shadow-md md:flex md:items-center md:gap-8">
              {/* Image Section */}
              <img
                src="/carpic.jpg"
                alt="Car Piece"
                className="h-64 w-full rounded-t-xl object-cover transition-transform duration-300 hover:scale-105 md:h-auto md:w-1/3 md:rounded-l-xl md:rounded-t-none"
              />

              {/* Text Content */}
              <div className="flex flex-col justify-between px-6 py-8 md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900">
                  Free Add-On with Bundle
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Enjoy a portable piece for the car and a 2-way mirror for TV
                  viewing with the chair. These essential add-ons are included{" "}
                  <span className="font-semibold">absolutely free</span> when
                  you rent the bundle, enhancing your recovery experience.
                </p>
                <p className="mt-6 text-sm text-gray-500">
                  *Prices exclude delivery and tax.
                </p>

                {/* Call to Action */}
                <div className="mt-8">
                  <a
                    href="tel:+1-2896339933"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-purple-600 px-6 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl sm:w-auto"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us: 289-633-9933
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
          </div>
        </div>

        {/* Equipment Features Section */}
        <div className="relative bg-white py-24">
          {/* Background Decoration */}
          <div className="absolute ">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50/50"></div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-x-20">
              {/* Content Side */}
              <RecoverySection />
            </div>
          </div>
        </div>
        {/* Trust Section */}
        <div className="relative isolate bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-purple-600">
                Why Choose Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Healthcare Professionals
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">5+</div>
                  <div className="mt-2 text-lg font-semibold text-gray-900">
                    Years Experience
                  </div>
                  <div className="mt-2 text-gray-600">
                    Serving the GTA community
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">500+</div>
                  <div className="mt-2 text-lg font-semibold text-gray-900">
                    Happy Clients
                  </div>
                  <div className="mt-2 text-gray-600">
                    Successfully recovered
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">24/7</div>
                  <div className="mt-2 text-lg font-semibold text-gray-900">
                    Support
                  </div>
                  <div className="mt-2 text-gray-600">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VitrectomyInfo />
        {/* Final CTA Section */}
        <div className="relative isolate overflow-hidden bg-gray-900">
          <section className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Start Your Recovery?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                  Contact us today to book your recovery equipment and ensure
                  the best possible recovery experience.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                  <a
                    href="tel:+1-2896339933"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    Call Now: 289-633-9933
                  </a>
                </div>
              </div>
            </div>
          </section>
          <Testimonials />

          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
            aria-hidden="true"
          >
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
        </div>
      </div>
    </>
  );
}

class Testimonials extends Component {
  render() {
    return (
      <div
        id="reviews"
        className="testimonials-wrapper bg-gradient-to-b from-white to-purple-50 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from those who trusted us with their recovery and experienced
              our premium services.
            </p>
          </div>

          {/* Google Reviews Badge */}
          <div className="flex justify-center mb-8">
            <a
              href="https://goo.gl/maps/9eYNECCEJGTCc9qs5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M13 7h-2v5h5v-2h-3z" fill="#4285F4" />
              </svg>
              <span className="text-gray-700 font-medium">
                View us on Google
              </span>
            </a>
          </div>

          {/* Testimonial Carousel */}
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
            swipeable={true}
            className="testimonial-carousel"
          >
            {/* Review Card 1 */}
            <div className="px-4 py-2">
              <div className="bg-white rounded-3xl shadow-lg p-8 mx-auto max-w-3xl transform transition-transform duration-500 hover:scale-[1.05] hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Alison E.
                    </h3>
                    <ReactStars
                      count={5}
                      size={20}
                      value={5}
                      activeColor="#ffd700"
                      edit={false}
                      className="mt-1"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nothing can really make 7 days of face-down posturing
                  comfortable, but Rav and his team made it as easy as humanly
                  possible. The service, communication, and equipment were all
                  top-notch. Highly recommend!
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Verified Customer
                  </span>
                  <svg
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="px-4 py-2">
              <div className="bg-white rounded-3xl shadow-lg p-8 mx-auto max-w-3xl transform transition-transform duration-500 hover:scale-[1.05] hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Michael S.
                    </h3>
                    <ReactStars
                      count={5}
                      size={20}
                      value={5}
                      activeColor="#ffd700"
                      edit={false}
                      className="mt-1"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Thank you for your service. Unfortunately, I was dealing with
                  back issues during the healing process, but the chair with
                  face support was a lifesaver. Great service and highly
                  recommended!
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Verified Customer
                  </span>
                  <svg
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="px-4 py-2">
              <div className="bg-white rounded-3xl shadow-lg p-8 mx-auto max-w-3xl transform transition-transform duration-500 hover:scale-[1.05] hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Fran H.
                    </h3>
                    <ReactStars
                      count={5}
                      size={20}
                      value={5}
                      activeColor="#ffd700"
                      edit={false}
                      className="mt-1"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Excellent service with this company. Fast response, and even
                  though they didn’t deliver to my area initially, they made an
                  exception. The team was extremely polite and professional. A+
                  service!
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Verified Customer
                  </span>
                  <svg
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
