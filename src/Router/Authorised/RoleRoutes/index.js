import React from "react";
import AdminRoleRoutes from "./AdminRoleRoutes";
import UserRoleRoutes from "./UserRoleRoutes";

const RoleRoutes = () => {
  const isAdmin = () => {
    return false;
  };

  const isUser = () => {
    return true;
  };

  return (
    <div>
      <>
        <h1>Header</h1>
        {isUser() && <UserRoleRoutes />}
        {isAdmin() && <AdminRoleRoutes />}
      </>
    </div>
  );
};

export default RoleRoutes;
