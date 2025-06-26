import React, { useEffect, useState, useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { AuthContext } from '../provider/AuthProvider';

const Dashboardoverview = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    fetch('https://assignment-10-server-blond-ten.vercel.app/recipe')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error('Failed to fetch recipes:', err));
  }, []);

  const myItems = recipes.filter(recipe => recipe.email === userEmail);

  const chartData = [...recipes]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 10)
    .map(item => ({
      title: item.title.length > 10 ? item.title.slice(0, 10) + '...' : item.title,
      likes: item.likes,
    }));

  const myTopRecipe = myItems.length
    ? myItems.sort((a, b) => b.likes - a.likes)[0]
    : null;

  return (
    <div className="p-6 md:py-10 md:w-11/12 mx-auto">
      <h1 className="text-3xl text-gray-600 font-semibold mb-6">📊 Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-10">
        <div className="bg-blue-100 p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Recipes</p>
          <h2 className="text-3xl font-bold text-blue-700">{recipes.length}</h2>
        </div>
        <div className="bg-green-100 p-5 rounded-xl shadow">
          <p className="text-gray-500">My Recipes</p>
          <h2 className="text-3xl font-bold text-green-700">{myItems.length}</h2>
        </div>
        <div className="bg-pink-100 p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Likes</p>
          <h2 className="text-3xl font-bold text-pink-700">{recipes.reduce((sum, r) => sum + r.likes, 0)}</h2>
        </div>
      </div>

      {/* Chart + User Info */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Bar Chart */}
        <div className="flex-1 bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">🔥 Top 10 Liked Recipes</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="likes" fill="#32476e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Info */}
        <div className="w-full lg:w-80 bg-white p-6 rounded-xl shadow flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">👤 Logged-in User</h2>
          <img
            src={user?.photoURL || 'https://i.pravatar.cc/100'}
            alt="User avatar"
            className="w-24 h-24 rounded-full object-cover border shadow mb-4"
          />
          <div className="space-y-2 text-gray-700 text-center">
            <p><strong>Name:</strong> {user?.displayName || 'N/A'}</p>
            <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
            <p><strong>UID:</strong> {user?.uid || 'N/A'}</p>
            <p><strong>Created:</strong> {user?.metadata?.creationTime || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-gray-100  text-gray-700 p-5 rounded-xl shadow-xl mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📈 My Activity Summary</h2>
        <p><strong>Total My Recipes:</strong> {myItems.length}</p>
        <p><strong>Average Likes:</strong> {myItems.length ? (myItems.reduce((sum, r) => sum + r.likes, 0) / myItems.length).toFixed(1) : 0}</p>
        <p><strong>Top Liked Recipe:</strong> {myTopRecipe?.title || 'N/A'}</p>
      </div>

      {/* Recent My Recipes */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📝 Recent My Recipes</h2>
        <ul className="divide-y">
          {myItems.slice(0, 5).map(item => (
            <li key={item._id} className="py-3">
              <p className="font-medium text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">Likes: {item.likes}</p>
            </li>
          ))}
          {myItems.length === 0 && (
            <li className="text-gray-500">No recipes found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboardoverview;
