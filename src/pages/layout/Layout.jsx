import LoaderApp from "@/components/loader/LoaderApp";
import Footer from "@/pages/layout/Footer";
import Header from "@/pages/layout/Header";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="relative w-full flex flex-col items-center  m-auto">
            <Header />
            <Suspense fallback={<LoaderApp />}>
                <main className="w-full">
                    <Outlet />
                </main>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Layout;
