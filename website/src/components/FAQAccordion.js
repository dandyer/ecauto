'use client';

import { useState } from 'react';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-blue-900 pr-4 text-sm md:text-base">{question}</span>
        <span className="text-orange-500 text-xl shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
