import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./styles";

export const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Outlet />
    </Container>
  );
};
