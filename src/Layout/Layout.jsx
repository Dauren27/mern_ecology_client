import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <main style={{minHeight:"50vh"}}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
