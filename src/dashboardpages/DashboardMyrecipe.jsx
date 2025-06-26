import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;
    setLoading(true);
    fetch('https://assignment-10-server-blond-ten.vercel.app/recipe')
      .then(res => res.json())
      .then(data => {
        setRecipes(data.filter(recipe => recipe.email === userEmail));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userEmail]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <p className="text-xl font-semibold mb-2">No recipes found 😕</p>
        <p>Try adding some new recipes!</p>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mb-5 p-6 md:py-10">
      <h1 className="text-3xl font-semibold mb-6 text-gray-500">My Recipes</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Likes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Categories</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recipes.map((recipe, index) => (
              <tr key={recipe._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-semibold">{recipe.title}</td>
                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-16 h-16 rounded object-cover border"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{recipe.likes}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 hidden md:table-cell">
                  {Array.isArray(recipe.categories) && recipe.categories.length > 0
                    ? recipe.categories.join(', ')
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecipes;
