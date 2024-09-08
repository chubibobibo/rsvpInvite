import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/:guest",
      element: <Index />,
    },
    {
      path: "/thankyou",
      element: <ThankYouPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
