import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import Store from "../store/Store";

export default function RootLayout() {
  return (
    <>
      <Provider store={Store} >
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}
