import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import Counter from "components/counter/Counter.tsx";
import Home from "components/pages/HomePage/Home.ts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/counter', element: <Counter />},
    ],
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);