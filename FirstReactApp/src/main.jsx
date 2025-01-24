import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import store from "./store"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyButton from "./components/common/buttonComponents/ButtonComponent.jsx"
import Counter from "./components/counter/Counter.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MyButton /> },
      { path: '/counter', element: <Counter /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);