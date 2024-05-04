
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
// import Accounts from './components/Accounts/Accounts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch(`http://localhost:5000/users`),
  },
  // {
  //   path: "/accounts",
  //   element: <Accounts />,
  //   loader: () => fetch(`http://localhost:5000/accounts`),
  // },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
