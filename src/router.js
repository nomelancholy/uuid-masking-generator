import { createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>oops, error</div>,
  },
]);

export default router;
