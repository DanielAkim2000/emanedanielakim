import "@/App.css";
import Home from "@/pages/Home";
import Layout from "@/pages/layout/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projets" element={<div>Projets</div>} />
                    <Route path="contact" element={<div>Contact</div>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
