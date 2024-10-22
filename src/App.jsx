import "@/App.css";
import Layout from "@/pages/layout/Layout";
import "animate.css";
import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const Home = lazy(() => import("@/pages/Home"));
const Projets = lazy(() => import("@/pages/Projets"));
const Contact = lazy(() => import("@/pages/Contact"));
const Projet = lazy(() => import("@/pages/Projet"));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projets" element={<Projets />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projets/:id" element={<Projet />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
