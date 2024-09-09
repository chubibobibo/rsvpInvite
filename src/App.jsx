import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";

import ThankYouPage from "./components/ThankYouPage";

import IndexContextProvider from "./context/IndexContextProvider";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:guest",
      element: <Index />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/thankyou/:guest",
      element: <ThankYouPage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
