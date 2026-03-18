import { useState } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is NeuraFlow?",
    answer:
      "NeuraFlow is an AI-powered platform that helps automate workflows, analyze data, and improve team productivity.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time based on your needs.",
  },
  {
    question: "Do you offer support?",
    answer:
      "We offer email support on all plans and priority support for Pro and Enterprise users.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, you can try NeuraFlow for free before committing to a paid plan.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900"
            >
              {/* question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left cursor-pointer"
              >
                <span className="text-lg">{faq.question}</span>

                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-2xl"
                >
                  +
                </motion.span>
              </button>

              {/* answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-4 text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
