import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <homePage/>
        },
      ]
    }
  ]);

}
export default App;
