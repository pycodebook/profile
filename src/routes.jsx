import { createBrowserRouter, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import ResearchProject from "./pages/ResearchProject";
import RootLayout from "./layouts/RootLayout";
import BlogDetails from "./pages/Blogs/BlogDetails";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/blogs" replace />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path:"blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/research-project",
        element: <ResearchProject />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
