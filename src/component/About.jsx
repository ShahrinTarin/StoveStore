import React from 'react';
import { FaHeart, FaUtensils, FaUsers } from 'react-icons/fa';
import about from '../assets/StoveStories.png'
const About = () => {
  return (
    <>
      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-radius: 1.5rem;
          transition: all 0.3s ease-in-out;
        }
        .glass:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      {/* Main About Section */}
      <section className="md:w-9/12 w-11/12 mx-auto my-16 px-4 py-16 rounded-3xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-all duration-500 shadow-lg">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-200 mb-4 tracking-tight">
            🍲 Welcome to <span className="text-amber-500">StoveStories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A cozy space where food lovers unite to share, discover, and celebrate warm home-cooked memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4 glass p-5">
              <FaUtensils className="text-amber-500 text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Our Purpose</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">
                  We believe every kitchen holds a story. StoveStories lets you preserve your traditions, secret ingredients, and culinary joy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass p-5">
              <FaHeart className="text-red-400 text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Made With Love</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">
                  Every feature is designed with heart — from recipe sharing to your dashboard experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass p-5">
              <FaUsers className="text-green-500 text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">By the Community</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">
                  More than a platform — we’re a family of storytellers, cooks, and taste lovers uplifting each other.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] md:h-[360px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={about}
              alt="Cooking inspiration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Journey Section with Flex */}
      <section className="md:w-9/12 w-11/12 mx-auto my-16 px-4 py-14 rounded-3xl bg-white/70 dark:bg-slate-800 shadow-lg backdrop-blur-md transition-all duration-500">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-200">
            🛤️ Our Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto text-base md:text-lg">
            From a spark in the kitchen to a global recipe haven — see how StoveStories came to life.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex-1 glass p-6 border-l-4 border-blue-400">
            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300">2022 — The Spark</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mt-2">
              It began with handwritten recipes and the urge to archive grandma’s secret flavors. We dreamed of a cozy digital kitchen for everyone.
            </p>
          </div>

          <div className="flex-1 glass p-6 border-l-4 border-amber-400">
            <h4 className="text-xl font-semibold text-amber-600 dark:text-amber-300">2023 — The Launch</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mt-2">
              A humble launch with love — StoveStories grew as a recipe-sharing space built by and for home cooks.
            </p>
          </div>

          <div className="flex-1 glass p-6 border-l-4 border-green-400">
            <h4 className="text-xl font-semibold text-green-600 dark:text-green-300">2024 — Community Blooms</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mt-2">
              With thousands of cooks and shared dishes, our cozy kitchen grew into a global family of food lovers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
