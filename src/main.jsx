import App from "@/App.jsx";
import "@/index.css";
import "animate.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjetProvider } from "./context/projetContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProjetProvider>
            <App />
        </ProjetProvider>
    </StrictMode>
);
