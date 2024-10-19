import { ProjetContext } from "@/context/projetContext";
import { useContext } from "react";

export const useProjetContext = () => {
    const context = useContext(ProjetContext);
    if (!context) {
        //in french
        throw new Error("useProjet must be used within a ProjetProvider");
    }
    return context;
};
