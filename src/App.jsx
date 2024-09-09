import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";

import ThankYouPage from "./components/ThankYouPage";

import IndexContextProvider from "./context/IndexContextProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/:guest",
      element: <Index />,
    },
    {
      path: "/thankyou/:guest",
      element: <ThankYouPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
