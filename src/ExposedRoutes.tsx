import React from "react";
import {Routes, Route} from "react-router-dom";

// Components
import UserList from "./Components/UserList";
import CreateEditUser from "./Components/CreateEditUser";

const ExposedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user" element={<CreateEditUser />} />
      <Route path="*" element={<UserList />} />
    </Routes>
  );
};

export default ExposedRoutes;
