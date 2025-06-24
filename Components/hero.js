"use client";

import { useState, useEffect, useMemo } from "react";
import ReviewBar from "./review";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = useMemo(() => ["/b.JPG", "/a.jpg", "/bed.jpg"], []);
  const features = [
    "Easy to use equipment",
    "Comfortable design",
    "Delivered and setup professionally",
  ];
  const recoveryTypes = [
    {
      name: "Vitrectomy Recovery",
      desc: "Specialized equipment for optimal recovery",
    },
    {
      name: "Face-Down Positioning",
      desc: "Ergonomic support for post-surgery comfort",
    },
    { name: "Retinal Detachment", desc: "Proper positioning for healing" },
    { name: "Macular Hole Surgery", desc: "Precise alignment for recovery" },
  ];

  useEffect(() => {
    // Preload images using the built-in Image API
    images.forEach((imageSrc) => {
      const preloadImage = new window.Image();
      preloadImage.src = imageSrc;
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const getNextIndex = (current) => (current + 1) % images.length;

  return (
    <div className="relative min-h-[100%] w-full bg-gradient-to-br from-black to-blue-900">
      <div className="h-[100%] grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left Slider - Desktop Only */}
        <div className="hidden lg:block relative overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform duration-1000 ease-out"
            style={{
              transform: `translateX(-${getNextIndex(currentImage) * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative h-full w-full flex-shrink-0">
                <Image
                  src={image}
                  alt={`Recovery equipment slide ${index + 1}`}
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                  quality={90}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 min-h-[80vh] flex items-center md:justify-center md:text-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
            {/* Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center rounded-full bg-blue-100/90 px-6 py-2.5">
                <span className="flex items-center gap-2 text-base font-semibold text-blue-900">
                  🏆 Canada&apos;s Top Choice For Quality Roofing
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto mb-8 leading-tight">
              Blue Roofs
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              We install, replace, and repair roofs across the GTA with craftsmanship you can trust.
              <br />
              Do It Right With Blue Roofs.
            </p>

            <div className="max-w-xl mx-auto mb-12">
              <ReviewBar />
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-2xl mx-auto mb-12">
              <Link
                href="/#price"
                className="flex-1 inline-flex items-center justify-center rounded-lg bg-white 
                  px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 
                  hover:bg-blue-50 hover:-translate-y-0.5"
              >
                Bed + Chair Packages
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <a
                href="tel:+1-2896339933"
                className="flex-1 inline-flex items-center justify-center rounded-lg 
                  px-8 py-4 text-lg font-semibold text-white transition-all duration-300 
                  hover:-translate-y-0.5 border border-white/20 hover:bg-white/10"
              >
                <Phone className="mr-3 h-5 w-5" />
                289-633-9933
              </a>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-14 max-w-lg mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 justify-center"
                >
                  <CheckCircle
                    className="h-5 w-5 text-blue-300"
                    strokeWidth={2.5}
                  />
                  <span className="text-lg text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Recovery Types Section */}
            <div className="max-w-3xl mx-auto">
              <p className="text-base text-blue-100 text-center mb-4">
                Recovery Equipment For:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {recoveryTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-700/30
                      transition-all duration-300 hover:bg-blue-800/40 hover:border-blue-700/40"
                  >
                    <div className="text-lg font-medium text-white mb-1">
                      {type.name}
                    </div>
                    <div className="text-sm text-blue-200/80">
                      {type.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Slider */}
        <div className="absolute inset-0 lg:relative">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="absolute inset-0 flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-full w-full flex-shrink-0"
                >
                  <Image
                    src={image}
                    alt={`Recovery equipment slide ${index + 1}`}
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                    quality={90}
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-transparent lg:from-transparent lg:via-blue-900/20 lg:to-blue-900/40" />
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 
              ${currentImage === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
