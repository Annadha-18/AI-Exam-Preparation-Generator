import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What file formats can I upload?",
      answer:
        "You can upload PDF, DOCX, and TXT files for AI-based question generation.",
    },
    {
      question: "Can I generate MCQs from my notes?",
      answer:
        "Yes. The application generates MCQs, short-answer, and long-answer questions based on your uploaded notes.",
    },
    {
      question: "Can I take quizzes multiple times?",
      answer:
        "Yes. You can generate new quizzes and practice as many times as you want.",
    },
    {
      question: "Will my quiz history be saved?",
      answer:
        "Yes. Once you log in, your quiz history and scores will be stored in your dashboard.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Find answers to the most common questions about ExamAI.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;