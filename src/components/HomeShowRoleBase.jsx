import React from "react";
import useRole from "../hooks/useRole";
import WorkerHome from "../pages/Worker/WorkerHome";
import BuyerHome from "../pages/Buyer/BuyerHome";
import AdminHome from "../pages/Admin/AdminHome";

const HomeShowRoleBase = () => {
  const [role, isLoading] = useRole();
  return (
    <>
      {role === "Worker" && <WorkerHome />}
      {role === "Buyer" && <BuyerHome />}
      {role === "Admin" && <AdminHome/>}
    </>
  );
};

export default HomeShowRoleBase;
