"use client";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 border border-[#858894] bg-[#121727] rounded-[10px] px-[17px] lg:px-[41px]">
      <button
        className="flex items-center justify-between w-full font-medium text-left text-gray-900 focus:outline-none h-[30px] lg:h-[45px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-orbitron text-[#e9e9e9] text-sm lg:text-lg">
          {question}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 text-white ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-5" : "max-h-0"
        }`}
      >
        <p className="pt-2 pb-1 text-[#858894] font-spaceGrotesk font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
};

function FAQ() {
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee for all our products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders, depending on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's delivery status.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-[54px] w-[95%] lg:w-10/12 mx-auto bg-">
      <div className="lg:w-[561px] col-span-2 lg:col-span-1">
        <h1 className="text-[#e9e9e9] font-orbitron text-2xl text-center lg:text-left lg:text-[32px]">
          Frequently asked questions
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#7D3EAF] to-[#E7499F] block">
            about Scavengerhunt
          </span>
        </h1>
        <p className="text-center lg:text-left mt-[26px] lg:mt-4 text-[#858894] font-spaceGrotesk">
          Can’t find the answers you are looking for?{" "}
          <span className="block text-white lg:inline-block">
            Reach out on our{" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Discord
            </a>
          </span>
        </p>
      </div>
      <div className="col-span-2 space-y-5 lg:col-span-1">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
