import React from "react";

import { Outlet } from "react-router-dom";
import Container from "./Container";

const MainLayout = () => {
  return (
    <main className=" min-h-screen ">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default MainLayout;
