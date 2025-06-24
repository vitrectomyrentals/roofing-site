"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const reviewData = [
  {
    text: "Nothing can really make 7 days of face-down posturing comfortable, but Rav and his team made it as easy as humanly...",
    author: "Alison E.",
  },
  {
    text: "Thank you for your service unfortunately I was dealing with back issues during the healing process. The chair with...",
    author: "Michael S.",
  },
  {
    text: "Excellent service with this company. Fast response! Was told they didn&apos;t deliver in our area but at a small extra cost,...",
    author: "Fran H.",
  },
  {
    text: "Equipment was clean and comfortable. The gentlemen I dealt with were polite and friendly. They were very flexible to...",
    author: "Margo H.",
  },
];

export default function ReviewBar() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviewData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <Link href="#reviews" className="block">
      <div className="bg-black text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center">
        <div className="relative h-4 w-4 mr-2">
          <Image
            alt="Google Logo"
            src="/google-g-logo.svg" // Move this to your public folder
            fill
            sizes="16px"
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xs font-semibold mr-2">Verified Reviews</span>
        <span className="text-yellow-400 text-xs mr-1">★★★★★</span>
        <span className="text-xs text-zinc-300 mr-2">(30)</span>
        <span className="text-xs italic mr-2 md:inline hidden">
          &quot;{truncateText(reviewData[currentReview].text, 12)}&quot;
        </span>
        <span className="text-xs">- {reviewData[currentReview].author}</span>
      </div>
    </Link>
  );
}
