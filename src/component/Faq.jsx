import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
  {
    q: "How can I share my own recipe on StoveStories?",
    a: "To share a recipe, log in to your account and go to the \"Add Recipe\" section from the dashboard. Fill in the form with your recipe details and submit — it will be added to the community!",
  },
  {
    q: "Can I edit or delete a recipe after posting it?",
    a: "Yes, go to \"My Recipes\" in your dashboard to view, edit, or delete your submitted recipes anytime.",
  },
  {
    q: "How are recipes ranked or sorted on StoveStories?",
    a: "Recipes are sorted by popularity (based on likes) and recency. The most liked ones are featured in the Top Recipes chart on the dashboard.",
  },
  {
    q: "Do I need an account to view recipes?",
    a: "No, anyone can browse recipes. But to add, like, or manage your own recipes, you'll need to create an account and log in.",
  },
  {
    q: "Is StoveStories free to use?",
    a: "Absolutely! StoveStories is a free platform for all food lovers to share, discover, and enjoy recipes from around the world.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }
        .glass-card {
          backdrop-filter: blur(10px);
          background: rgba(240 248 255 / 0.75); /* aliceblue with transparency */
          border: 1px solid rgba(173 216 230 / 0.4); /* lightblue border */
          box-shadow:
            0 8px 32px rgba(0, 0, 139, 0.12);
          border-radius: 1.25rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass-card:hover {
          transform: scale(1.03);
          box-shadow:
            0 12px 36px rgba(0, 0, 139, 0.25);
        }
        .question-text {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
          color: #1E40AF; /* blue-800 */
          cursor: pointer;
        }
        .question-text::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #60A5FA, #3B82F6); /* blue-400 to blue-500 */
          box-shadow: 0 0 10px #3B82F6;
          transition: width 0.4s ease;
        }
        .question-text:hover::after {
          width: 80px;
        }
        .answer-text {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          line-height: 1.6;
          color: #2563EB; /* blue-600 */
        }
        .arrow-icon {
          color: #3B82F6; /* blue-500 */
          transition: transform 0.3s ease, opacity 0.3s ease;
          font-size: 2.25rem;
        }
        .arrow-icon.open {
          transform: rotate(180deg);
          opacity: 1;
        }
        .arrow-icon.closed {
          opacity: 0.7;
        }
        .faq-bg {
          background: linear-gradient(135deg, #DBEAFE, #BFDBFE);
          border-radius: 2rem;
          padding: 4rem 2rem;
          max-width: 100%; /* allows width control by wrapper */
          margin: 2rem auto 4rem;
          box-shadow:
            0 10px 30px rgba(96, 165, 250, 0.25),
            inset 0 0 30px rgba(191, 219, 254, 0.5);
        }
      `}</style>

      <main className="md:w-9/12 w-11/12  mx-auto faq-bg">
        <h1 className="text-center text-4xl font-extrabold text-blue-900 mb-14 tracking-wide">
          <span className="text-blue-500">Frequently</span> Asked Questions
        </h1>

        <div className="space-y-8">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card cursor-pointer p-6"
                onClick={() => toggleIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleIndex(idx);
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                aria-labelledby={`faq-title-${idx}`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    id={`faq-title-${idx}`}
                    className="question-text"
                  >
                    {item.q}
                  </h3>
                  <MdKeyboardArrowDown
                    className={`arrow-icon ${isOpen ? "open" : "closed"}`}
                    aria-hidden="true"
                  />
                </div>

                <div
                  id={`faq-panel-${idx}`}
                  className="answer-text mt-4 overflow-hidden"
                  style={{
                    animation: isOpen ? "slideFadeIn 0.4s ease forwards" : "none",
                    maxHeight: isOpen ? "1000px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                    transition: "max-height 0.4s ease, opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Faq;
