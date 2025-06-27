import React from 'react';

const Extra = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto mt-12 mb-36 px-6 py-16 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-xl text-center">
      <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Welcome to StoveStories</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Where every flame has a flavor and every dish tells a story. Discover heartfelt memories, hidden family recipes, and shared moments that make cooking special.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-3">🧑‍🍳</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Homegrown Passion</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Real people, real kitchens, real love behind every recipe shared.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Global Flavors</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Travel the world through spices, aromas, and traditional cooking stories.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-3">🔥</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">From Stove to Soul</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            More than meals—StoveStories brings warmth, laughter, and connection to the table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
