import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/langdingPages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import BuyerHome from "../pages/Buyer/BuyerHome";
import AddTask from "../pages/Buyer/AddTask";
import MyTasks from "../pages/Buyer/MyTasks";
import UpdateMyTask from "../pages/Buyer/UpdateMyTask";
import PurchaseCoin from "../pages/Buyer/PurchaseCoin";
import PaymentHistory from "../pages/Buyer/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <BuyerHome />,
      },
      {
        path: "/dashboard/add-new-task",
        element: <AddTask />,
      },
      {
        path: "/dashboard/my-task",
        element: <MyTasks />,
      },
      {
        path: "/dashboard/update-myTask/:id",
        element: <UpdateMyTask/>,
      },
      {
        path: "/dashboard/purchase-coin",
        element: <PurchaseCoin/>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory/>,
      },
    ],
  },
]);

export default router;
