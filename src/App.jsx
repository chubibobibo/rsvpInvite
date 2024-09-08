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
      element: (
        <IndexContextProvider>
          <Index />
        </IndexContextProvider>
      ),
    },
    {
      path: "/thankyou/:guest",
      element: (
        <IndexContextProvider>
          <ThankYouPage />
        </IndexContextProvider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
