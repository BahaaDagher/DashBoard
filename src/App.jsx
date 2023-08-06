import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css"
import pages from "./utils/pages"

const router = createBrowserRouter(pages);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App




