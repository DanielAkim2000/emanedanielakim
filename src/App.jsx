import "@/App.css";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Layout from "@/pages/layout/Layout";
import Projets from "@/pages/Projets";
import "animate.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projets" element={<Projets />} />
                    <Route path="contact" element={<Contact />} />
                    {/* <Route path="projets/:id" element={<Projets />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
