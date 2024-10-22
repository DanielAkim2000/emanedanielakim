import App from "@/App.jsx";
import "@/index.css";
import "animate.css";
import { createRoot } from "react-dom/client";
import { ProjetProvider } from "./context/projetContext";

createRoot(document.getElementById("root")).render(
    <ProjetProvider>
        <App />
    </ProjetProvider>
);
