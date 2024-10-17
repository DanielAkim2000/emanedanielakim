import Footer from "@/pages/layout/Footer";
import Header from "@/pages/layout/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="relative w-full flex flex-col items-center  m-auto">
            <Header />
            <main className="w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
