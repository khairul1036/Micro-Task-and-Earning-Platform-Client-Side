import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/langdingPages/Home/Home";
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
import WorkerRoute from "./WorkerRoute";
import NotFound from "../pages/NotFound/NotFound";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound/>,
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
      {
        // path: "/dashboard/tasklist",
        path: "/tasklist",
        element: (
          // <PrivateRoute>
          //   <WorkerRoute>
          <TaskList />
          //   </WorkerRoute>
          // </PrivateRoute>
        ),
      },
      {
        // path: "/dashboard/task-details/:id",
        path: "/task-details/:id",
        element: (
          <PrivateRoute>
            {/* //   <WorkerRoute> */}
            <TaskDetails />
            {/* //   </WorkerRoute> */}
          </PrivateRoute>
        ),
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
        element: <HomeShowRoleBase />,
      },
      {
        path: "/dashboard/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
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
      // {
      //   // path: "/dashboard/tasklist",
      //   path: "/tasklist",
      //   element: (
      //     // <PrivateRoute>
      //     //   <WorkerRoute>
      //         <TaskList />
      //     //   </WorkerRoute>
      //     // </PrivateRoute>
      //   ),
      // },
      // {
      //   // path: "/dashboard/task-details/:id",
      //   path: "/dashboard/task-details/:id",
      //   element: (
      //     // <PrivateRoute>
      //     //   <WorkerRoute>
      //         <TaskDetails />
      //     //   </WorkerRoute>
      //     // </PrivateRoute>
      //   ),
      // },
      {
        path: "/dashboard/my-submissions",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              <MySubmission />
            </WorkerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/withdrawals",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              <WithDrawals />
            </WorkerRoute>
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
              <ManageTasks />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
