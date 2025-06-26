import React from 'react';
import {
  MdHelpOutline,
  MdEmail,
  MdLockOutline,
  MdAddPhotoAlternate,
  MdEditNote,
  MdSpaceDashboard,
} from 'react-icons/md';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const cozyTopics = [
  {
    icon: <MdLockOutline size={24} className="icon-bounce" />,
    bg: 'bg-yellow-100 text-yellow-700',
    title: 'Login Help',
    desc: 'Can’t get in? Don’t worry — we’ll help you reset things in a few easy steps.',
  },
  {
    icon: <MdAddPhotoAlternate size={24} className="icon-bounce" />,
    bg: 'bg-pink-100 text-pink-700',
    title: 'Photo Upload',
    desc: 'Upload your food moments — JPG, PNG or WebP up to 2MB. We’ll handle the rest.',
  },
  {
    icon: <MdEditNote size={24} className="icon-bounce" />,
    bg: 'bg-green-100 text-green-700',
    title: 'Recipe Editing',
    desc: 'Update, tweak, or remove your recipes with just a few clicks from your dashboard.',
  },
  {
    icon: <MdSpaceDashboard size={24} className="icon-bounce" />,
    bg: 'bg-indigo-100 text-indigo-700',
    title: 'Dashboard Tips',
    desc: 'Feeling stuck? A quick refresh or internet check usually solves the hiccup!',
  },
  {
    icon: <MdHelpOutline size={24} className="icon-bounce" />,
    bg: 'bg-blue-100 text-blue-700',
    title: 'General Questions',
    desc: 'Explore FAQs or drop us a message — we’re always happy to help.',
  },
];

const Support = () => {
  return (
    <>
      <style>{`
        .icon-bounce {
          animation: bounce 3s infinite ease-in-out;
          display: inline-block;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .card-glow:hover {
          box-shadow:
            0 4px 15px rgba(59, 130, 246, 0.3),
            0 0 15px rgba(59, 130, 246, 0.2);
        }
      `}</style>

      <section className="bg-gradient-to-br  from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-14 max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 tracking-wide leading-tight">
            🍲 How can we make your cooking journey smoother?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
            From your first recipe to your favorite creations, we’re here every step of the way.
          </p>
        </div>

        {/* Help Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cozyTopics.map((topic, i) => (
            <div
              key={i}
              className="card-glow bg-white dark:bg-gray-800 p-7 rounded-3xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-400 border border-transparent hover:border-blue-400 cursor-pointer"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-5 ${topic.bg} shadow-md`}
              >
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 tracking-wide">
                {topic.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-800 mt-24 p-10 rounded-3xl shadow-xl max-w-5xl mx-auto transition-all">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-5 tracking-wide">
            💌 Still need help? Reach out anytime!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg tracking-wide leading-relaxed">
            We love hearing from you. Whether it’s a question or just to say hi, we’re here for you — usually replying within a day.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base text-gray-800 dark:text-gray-200">
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <MdEmail className="text-red-500 text-xl" />
                <a href="mailto:rahmanshahrintarin@gmail.com" className="hover:underline font-medium">
                  rahmanshahrintarin@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaFacebook className="text-blue-600 text-xl" />
                <a
                  href="https://www.facebook.com/profile.php?id=61570044629513"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium"
                >
                  Facebook Page
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaLinkedin className="text-blue-700 text-xl" />
                <a
                  href="https://www.linkedin.com/in/shahrin-tarin/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium"
                >
                  LinkedIn
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaGithub className="text-gray-900 dark:text-white text-xl" />
                <a
                  href="https://github.com/ShahrinTarin"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold mb-3 text-lg">🕒 Support Hours</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li>Mon–Fri: 10 AM – 6 PM BST</li>
                <li>Sat–Sun: Closed (but we peek sometimes!)</li>
                <li>Response time: usually within 12–24 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
