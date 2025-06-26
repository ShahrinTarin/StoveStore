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
import Dashboardoverview from "../pages/Dashboardoverview";
import Dashboardlayout from "../Dashboardlayout/Dashboardlayout";
import DashboardMyrecipe from "../dashboardpages/DashboardMyrecipe";
import Dashboardallrecipe from "../dashboardpages/DashboardAllrecipe";
import Faq from "../component/Faq";
import Support from "../component/Support";
import About from "../component/About";



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
        path: '/faq',
        Component: Faq,
      },
      {
        path: '/support',
        Component:Support,
      },
      {
        path: '/about',
        Component:About,
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


  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboardlayout></Dashboardlayout></PrivateRoute>,
    children: [
      {
        index: true,
        element: <Dashboardoverview></Dashboardoverview>,
      },
      {
        path: '/dashboard/myrecipes',
        Component: DashboardMyrecipe,
      },
      {
        path: '/dashboard/about',
        Component: About,
      },
      {
        path: '/dashboard/faq',
        Component: Faq,
      },
      {
        path: '/dashboard/support',
        Component:Support,
      },
      {
        path: '/dashboard/allrecipe',
        Component: Dashboardallrecipe
      },
      {
        path: '/dashboard/addrecipe',
        Component: AddRecipe
      },
    ]
  }


])

export default router