import React from 'react';
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import Home from "./pages/home.tsx";
import Support from "./pages/support.tsx";
import Blog from "./pages/blog.tsx";
import BlogPost from "./pages/blog-post.tsx";
import Product from "./pages/product.tsx";
import Pricing from "./pages/pricing.tsx";
import PricingCollaboration from "./pages/pricing-collaboration.tsx";
import Login from "./pages/login.tsx";
import Dashboard from "./pages/dashboard.tsx";
import WebinarSpace from "./pages/webinar-space.tsx";
import Subscriptions from "./pages/subscriptions.tsx";
import Account from "./pages/account.tsx";
import Billing from "./pages/billing.tsx";
import Security from "./pages/security.tsx";
import CheckoutSuccess from "./pages/checkout-success.tsx";
import Admin from "./pages/admin.tsx";
import Legal from "./pages/legal.tsx";
import { About } from "./pages/about.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/pricing/collaboration",
        element: <PricingCollaboration />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <BlogPost />,
      },
      {
        path: "/security",
        element: <Security />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/webinar-space",
        element: <WebinarSpace />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/checkout/success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
], {
  basename: "/Laurenn"
});