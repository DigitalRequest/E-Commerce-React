import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Product from './routes/Product.jsx';
import ProductPopup from './assets/ProductPopup.jsx';
import ProductCreator from './routes/ProductCreator.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Home />, <ProductPopup visible={false} />]
  },
  {
    path: "/products/:id",
    element: <Product />
  },
  {
    path: "/productCreator",
    element: <ProductCreator />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
