import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/langdingPages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AddTask from "../pages/Buyer/AddTask";
import MyTasks from "../pages/Buyer/MyTasks";
import UpdateMyTask from "../pages/Buyer/UpdateMyTask";
import PurchaseCoin from "../pages/Buyer/PurchaseCoin";
import PaymentHistory from "../pages/Buyer/PaymentHistory";
import TaskList from "../pages/Worker/TaskList";
import TaskDetails from "../pages/Worker/TaskDetails";
import MySubmission from "../pages/Worker/MySubmission";
import PrivateRoute from "./PrivateRoute";
import WithDrawals from "../pages/Worker/WithDrawals";
import BuyerRoute from "./BuyerRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageTasks from "../pages/Admin/ManageTasks";
import HomeShowRoleBase from "../components/HomeShowRoleBase";

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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // buyer routes
      {
        index: true,
        element: <HomeShowRoleBase/>,
      },
      {
        path: "/dashboard/add-new-task",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <AddTask />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-task",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <MyTasks />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-myTask/:id",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <UpdateMyTask />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/purchase-coin",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <PurchaseCoin />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <PaymentHistory />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      // worker routes
      {
        path: "/dashboard/tasklist",
        element: (
          <PrivateRoute>
            <TaskList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/task-details/:id",
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-submissions",
        element: (
          <PrivateRoute>
            <MySubmission />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/withdrawals",
        element: (
          <PrivateRoute>
            <WithDrawals />
          </PrivateRoute>
        ),
      },
      // admin routes
      {
        path: "/dashboard/manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-task",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageTasks/>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
