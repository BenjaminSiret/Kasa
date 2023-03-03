import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Appartment from "../pages/Appartment";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='appartment/:id'
        element={<Appartment />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Route>
  )
);

export default browserRouter;
