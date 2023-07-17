import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import NotFound from "./pages/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
