import React from "react";
import Header from "../components/Header/Header";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default Layout;
