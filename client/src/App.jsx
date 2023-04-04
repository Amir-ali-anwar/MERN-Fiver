import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
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
      element: <Layout />
    },
  ]);
  return <RouterProvider router={router} />
}

export default App
