import React from 'react';
import ReactDOM from 'react-dom/client';
// import do estilo global
import { StyleGlobal } from './StyleGlobal.jsx';
// import do modulo de rotas od react-rout-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Card, CardLogin } from './Components/Card/Card.jsx';
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <CardLogin />
    },
    {
      path: "/Cadastrar",
      element: <Card />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleGlobal></StyleGlobal>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
