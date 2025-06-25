import { createBrowserRouter } from "react-router";
import RootLayOut from "../RootLayOut/RootLayOut";
import Home from "../pages/Home";
import AllRecipes from "../component/AllRecipes";
import AddRecipe from "../component/AddRecipe";
import MyRecipe from "../component/MyRecipe";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import RecipeDetails from "../component/RecipeDetails";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../component/Loader";

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://assignment-10-server-blond-ten.vercel.app/sortrecipe'),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home
      },
      {
        path: '/allrecipes',
        Component: AllRecipes
      },
      {
        path: '/addrecipe',
        element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
      },
      {
        path: '/myrecipes',
        loader: () => fetch('https://assignment-10-server-blond-ten.vercel.app/recipe'),
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute><MyRecipe></MyRecipe></PrivateRoute>
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/recipedetails/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-blond-ten.vercel.app/recipe/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
      },
    ]


  }
])

export default router