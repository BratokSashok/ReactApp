import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import store from './store'
import { Provider} from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Counter from "components/counter/counter";
import Home from "components/pages/HomePage/Home";


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