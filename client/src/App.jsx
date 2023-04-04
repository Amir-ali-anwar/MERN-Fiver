import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css'

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />
}

export default App
