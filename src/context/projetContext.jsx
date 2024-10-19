import Proptypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const ProjetContext = createContext();

const ProjetProvider = ({ children }) => {
    const [projets, setProjets] = useState([]); // Liste des projets

    const value = useMemo(
        () => ({ projets, setProjets }),
        [projets, setProjets]
    );

    return (
        <ProjetContext.Provider value={value}>
            {children}
        </ProjetContext.Provider>
    );
};

export { ProjetContext, ProjetProvider };

ProjetProvider.propTypes = {
    children: Proptypes.node.isRequired,
};
