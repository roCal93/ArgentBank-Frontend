import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './app/App.jsx'
import Home from './pages/home/Home.jsx'
import SignIn from './pages/sign-in/SignIn.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import User from './pages/user/User.jsx'
import Transaction from './pages/transaction/Transaction.jsx'
import { Provider } from 'react-redux' // Importing Provider to connect the Redux store
import store from './app/store.js' // Importing the Redux store

// Creating a browser router with defined routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/transaction/:id',
        element: <Transaction />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

// Rendering the application into the root HTML node
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      {/* Providing the Redux store to the app */}
      <RouterProvider router={router} />{' '}
      {/* Setting up the router for navigation */}
    </Provider>
  </React.StrictMode>
)
