// import { ThemeProvider } from "./components/theme-provider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/layout";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Journey from "./pages/Journey";
import MyProject from "./pages/MyProject";
import Stack from "./pages/Stack";
import Error from "./pages/Error";
import certificates from "./pages/Certificates";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about-me",
        element: (
            <About />
        ),
      },
      {
        path: "/contact",
        element: (
            <Contact />
        ),
      },
      {
        path: "/journey",
        element: (
            <Journey />
        ),
      },
      {
        path: "/my-project",
        element: (
            <MyProject />
        ),
      },
      {
        path: "/stack",
        element: (
            <Stack />
        ),
      },
      {
        path: "/certificates",
        element: (
            <certificates />
        ),
      },
      {
        path: "/error",
        element: (
            <Error />
        ),
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //   <RouterProvider router={router} />
    // </ThemeProvider>
  );
}

export default App;