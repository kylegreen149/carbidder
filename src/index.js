import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import CarPage from "./components/CarPage"
import AddCarForm from './components/AddCarForm';
import MyBids from './components/MyBids';
import Car from './components/Car';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CarPage />
      },
      {
        path: "/add_car",
        element: <AddCarForm />
      },
      {
        path: "/my_bids",
        element: <MyBids />
      },
      {
        path: "/cars/:id",
        element: <Car />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
