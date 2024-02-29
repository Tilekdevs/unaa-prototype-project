import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ButtonScrollTop from "../components/ButtonScrollTop/ButtonScrollTop";
import ScrollToTop from "../components/ScrollTop/ScrollTop";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>

      <Footer />
      <ButtonScrollTop />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
