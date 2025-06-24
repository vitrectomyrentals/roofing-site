import React, { useState } from "react";
import Head from "next/head";

const faqData = [
  {
    question: "Which areas do you serve?",
    answer:
      "We currently serve the Greater Toronto Area. Please call to ask about delivery or pick up.",
  },
  {
    question: "What if I accidentally damage the equipment?",
    answer:
      "In the event that a table gets damaged, we acknowledge that accidents can occur and regular wear and tear is expected during equipment usage. If you encounter any damage to a table, kindly contact us promptly to report the incident. Depending on the nature of the damage, repair costs may be applied to the credit card we have on record. You will be informed and receive prior notification before any charges are made.",
  },
  {
    question: "What if there is a problem with my equipment?",
    answer:
      "In the event that you come across any issue with your table, it is important not to use it. We make every effort to ensure that all tables are in a safe and functional condition prior to delivery. If you notice a problem, we kindly request you to contact us immediately so we can address the issue. ",
  },
  {
    question: "What is our liability policy?",
    answer:
      "Vitrectomy Rentals assumes no liability for any accidents or injuries sustained while using our equipment. Clients are responsible for ensuring safe and proper use of the equipment at all times. By renting our equipment, clients acknowledge and accept full responsibility for any potential risks or injuries that may occur during use.",
  },
  {
    question: "How may I pay for my rental equipment?",
    answer: "We accept E-transfer and all major credit cards.",
  },
  {
    question: "Does my insurance cover the rentals?",
    answer:
      "The coverage for rental costs under your insurance policy depends on your specific insurance provider and the details of your coverage. Some insurance companies may provide full or partial coverage for recovery equipment rentals. Upon renting the equipment, you will receive a detailed receipt that can be submitted to your insurance provider for reimbursement. To further support your insurance claim, we recommend obtaining a prescription or note from your doctor as additional evidence that the equipment is essential for your recovery.",
  },
  {
    question: "What is included in my rental?",
    answer:
      "Your rental package includes the following items: facedown equipment, covers for face cushions, and a 2-way mirror for watching TV or reading.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQ | Vitrectomy Rentals</title>
        <title>
          FAQ | Vitrectomy Rentals - Insurance, Policies, and Posturing
        </title>
        <meta
          name="description"
          content="Frequently asked questions about insurance, rental policies, equipment usage, and posturing after surgery. Get detailed answers here."
        />{" "}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              FAQ (How it works)
            </h1>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-xl font-semibold">
                If you have any other questions, please feel free to call or
                email us.
              </h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
