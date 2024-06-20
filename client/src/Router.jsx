import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "./App";
import Home from "./components/pages/Home";

import Tasks from "./components/pages/Tasks";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

 
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home/>
        },

        {
              path: "tasks",
              element: <Tasks/>,
            },
       
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
      ],
    },
  ]);
  
  export default router;
  