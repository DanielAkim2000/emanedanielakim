import betkit3 from "@/assets/betkit2.png";
import CardProjet from "@/components/card/CardProjet";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React, { useEffect } from "react";
import bewvedimg from "../assets/bewved.png";
import garageparrotimg from "../assets/garageparrot.png";
import jeuxdeimg from "../assets/jeuxde.png";
import kgbimg from "../assets/kgb.png";
import pobaluimg from "../assets/pobalu.png";

const Projets = () => {
    const projetRef = React.useRef(null);
    const cardsRef = React.useRef(null);
    const [reload, setReload] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState({
        projet: false,
    });

    useEffect(() => {
        if (!projetRef || !cardsRef) {
            setReload(!reload);
        }
    }, [reload]);

    useEffect(() => {
        let projetCurrent = projetRef?.current;
        let cardsCurrent = cardsRef?.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible({ ...isVisible, projet: true });
                    }
                },
                { threshold: 0.6 }
            );
        });

        if (projetRef.current) observer.observe(projetRef.current);
        if (cardsRef.current) observer.observe(cardsRef.current);

        return () => {
            if (projetCurrent) observer.unobserve(projetCurrent);
            if (cardsCurrent) observer.unobserve(cardsCurrent);
        };
    }, []);

    return (
        <div className="w-full bg-slate-700">
            <DivMaxWidth>
                <div
                    className="flex flex-col items-start justify-center pt-52 pb-20 text-start gap-7 px-5"
                    ref={projetRef}
                    id="projet"
                >
                    <h1
                        className={`text-5xl font-serif font-semibold animate__animated ${
                            isVisible.projet &&
                            "animate__fadeInUp animate-delay-fast"
                        }`}
                    >
                        Mes Projets
                    </h1>
                    <h5
                        className={`text-xl animate__animated ${
                            isVisible.projet &&
                            "animate__fadeInUp animate-delay-medium"
                        }`}
                    >
                        Voici quelques projets que j&apos;ai réalisé
                    </h5>
                </div>
            </DivMaxWidth>
            <div className="w-full bg-slate-900">
                <DivMaxWidth className="py-28">
                    <div
                        className={`flex flex-row flex-wrap justify-center  gap-5 items-center w-full px-5 `}
                    >
                        <CardProjet
                            title="Betkit"
                            image={betkit3}
                            description="
                                Betkit est un outil qui permet de générez les nombres de combinaisons et côtes possibles pour un ensemble de matchs de football , basket-ball, tennis et rugby sélectionnés.
                            "
                            listTechno={["React", "Tailwind"]}
                        />
                        <CardProjet
                            title="Bewved"
                            image={bewvedimg}
                            description="Bewved est un site pour des formateurs qui listerons leurs formations et les apprenants pourrons s'inscrire à ces formations."
                            listTechno={[
                                "React",
                                "Symfony",
                                "MySQL",
                                "Bootstrap",
                            ]}
                        />
                        <CardProjet
                            title="Garage V Parrot"
                            image={garageparrotimg}
                            description="C'est un site vitrine pour un garage automobile, il permet de présenter les services et les produits du garage."
                            listTechno={["React", "Symfony", "PostegreSQL"]}
                        />
                        <CardProjet
                            title="KGB"
                            image={kgbimg}
                            description="KGB est un ecf qui m'a été donné au cours de ma formation, ce site liste les missions de l'agence KGB.Les administrateurs peuvent ajouter, modifier et supprimer des missions, des agents et des contacts etc."
                            listTechno={["PHP POO", "MySQL"]}
                        />
                        <CardProjet
                            title="Pobalu"
                            image={pobaluimg}
                            description="Pobalu est un site vitrine pour l'artiste Pierre Olivier qui lui permet de présenter ses différentes séries de peintures."
                            listTechno={["Wordpress", "Elementor"]}
                        />
                        <CardProjet
                            title="Jeux de dé"
                            image={jeuxdeimg}
                            description="C'est un jeu de dé qui permet de lancer un dé et de voir le résultat, il se joue a deux sur le même écrans, le premier joueur a atteindre les 100points à gagné la partie."
                            listTechno={["Javascript"]}
                        />
                        {/* <CardProjet
                            title="FamasApp"
                            image={famasApp}
                            description="FamasApp est une application de location de voiture, elle permet de lister les voitures disponibles à la location, les utilisateurs peuvent s'inscrire et réserver une voiture."
                            listTechno={["ReactNative", "ExpressJs", "MongoDB"]}
                        /> */}
                    </div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Projets;
