import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css"
import pages from "./utils/pages"
import SideBar from './components/sidebar/sidebar';

const router = createBrowserRouter(pages);

const App = () => {
  return (
    <>
    <SideBar/>
    <RouterProvider router={router} />
    </>
  )
}

export default App




