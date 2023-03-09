import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Appartment from "../pages/Appartment";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import RootLayout from "../layout/RootLayout";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}
    >
      <Route
        index
        element={<Home />}
        component={Appartment}
      />
      <Route
        path='/appartments/:id'
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
