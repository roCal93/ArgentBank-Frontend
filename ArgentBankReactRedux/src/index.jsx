import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './app/App.jsx'
import Home from './pages/home/Home.jsx'
import SignIn from './pages/sign-in/SignIn.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import User from './pages/user/User.jsx'
import Transaction from './pages/transaction/Transaction.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
