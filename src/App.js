import logo from './logo.svg';
import './App.css';
import Navbar from './components/A_Navbar';
import Footer from './components/Footer';
import F1_container from './components/Container_1';
import Home from './Sites/Home/home';
import Blog from './Sites/Blogs/blog';
import Shop_1 from './Sites/shop_1';
import Shop_2 from './Sites/shop_2';
import Course_1 from './Sites/Course_1';
import Course_2 from './Sites/Course_2';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
    {
      path: "/shop_1",
      element: <Shop_1/>,
    },
    {
      path: "/shop_2",
      element: <Shop_2/>,
    },
    {
      path: "/Course_1",
      element: <Course_1/>,
    },
    {
      path: "/Course_2",
      element: <Course_2/>,
    },
    // {
    //   path: "/Course_3",
    //   element: <Course_3/>,
    // },
  ]);

  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;



