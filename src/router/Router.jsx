import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Appartment from "../pages/Appartment";
import About from "../pages/About";
import ErrorBoundary from "../pages/ErrorBoundary";

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
        element={<ErrorBoundary />}
      />
    </Route>
  )
);

export default browserRouter;
