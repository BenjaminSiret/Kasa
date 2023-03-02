import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './styles/index.css';
import Root from './layout/Root';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';


const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route >
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
)

