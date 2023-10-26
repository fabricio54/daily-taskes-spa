import React from 'react';
import ReactDOM from 'react-dom/client';
// import do estilo global
import { StyleGlobal } from './StyleGlobal.jsx';
// import do modulo de rotas od react-rout-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Card, CardLogin } from './Components/Card/Card.jsx';
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { Codigo } from "./Components/Card/Codigo.jsx";
import { Taske } from './Components/Card/Taske.jsx';
import { Dastboard } from './Pages/Destbord/Destboard.jsx';
import { Section } from './Components/Card/CardStyled.jsx';
import { EditTask } from './Components/Card/EditTask.jsx';

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
    },
    {
      path: "/Codigo",
      element: <Codigo />
    },
    {
      path: "/dastboard",
      element: <Dastboard />
    },
    {
      path: "/createtaske",
      element: <Taske />
    },
    {
      path: "/editartask/:id",
      element: <EditTask />,
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleGlobal></StyleGlobal>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
