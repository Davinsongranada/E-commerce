import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SingIn from "../SingIn/SingIn";
import Navbar from "../../Components/Navbar/Navbar"
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount/> },
    { path: "/my-order", element: <MyOrder/> },
    { path: "/my-orders", element: <MyOrders/> },
    { path: "/sing-in", element: <SingIn/> },
    { path: "/*", element: <NotFound/> }
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
    </BrowserRouter>
  );
};

export default App;
