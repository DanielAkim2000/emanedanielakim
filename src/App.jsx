import "@/App.css";
import Home from "@/pages/Home";
import Layout from "@/pages/layout/Layout";
import Projets from "@/pages/Projets";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projets" element={<Projets />} />
                    <Route path="contact" element={<div>Contact</div>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
