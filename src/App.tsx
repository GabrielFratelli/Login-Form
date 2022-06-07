import React from "react";
import { Router } from "./routes/";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}
