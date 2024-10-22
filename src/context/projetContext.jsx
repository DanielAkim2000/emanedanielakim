import Proptypes from "prop-types";
import { createContext, useMemo, useState } from "react";
import betkit1 from "../assets/betkit1.png";
import betkit2 from "../assets/betkit2.png";
import betkit3 from "../assets/betkit3.png";
import bewvedimg from "../assets/bewved.png";
import bewvedimg2 from "../assets/bewved2.png";
import bewvedimg3 from "../assets/bewved3.png";
import garageparrotimg from "../assets/garageparrot.png";
import garageparrotimg2 from "../assets/garageparrot2.png";
import garageparrotimg3 from "../assets/garageparrot3.png";
import jeuxdeimg from "../assets/jeuxde.png";
import jeuxdeimg2 from "../assets/jeuxde2.png";
import jeuxdeimg3 from "../assets/jeuxde3.png";
import kgbimg from "../assets/kgb.png";
import kgbimg2 from "../assets/kgb2.png";
import kgbimg3 from "../assets/kgb3.png";
import pobaluimg from "../assets/pobalu1.png";
import pobaluimg2 from "../assets/pobalu2.png";
import pobaluimg3 from "../assets/pobalu3.png";

const ProjetContext = createContext();

const ProjetProvider = ({ children }) => {
    const [projets, setProjets] = useState([
        {
            listTechno: ["React", "Tailwind"],
            title: "Betkit",
            subtitle: "Outil de génération de combinaisons et côtes",
            description:
                "Betkit est une plateforme qui permet aux utilisateurs de calculer automatiquement les combinaisons et les côtes pour des paris sportifs sur le football, le basket-ball, le tennis et le rugby.",
            image: [betkit1, betkit2, betkit3],
            id: 1,
            objectif:
                "Développer un outil capable de générer des combinaisons et côtes possibles pour plusieurs matchs sélectionnés de différents sports.",
            textBottom1:
                "Betkit facilite le calcul des probabilités et combinaisons pour les paris sportifs. L'outil permet aux utilisateurs de sélectionner des matchs de football, basket-ball, tennis et rugby, puis de générer des résultats basés sur ces sélections.",
            textBottom2:
                "L'objectif était de transformer une maquette réalisée sous Figma en une application fonctionnelle à l'aide de React et Tailwind. Le défi principal consistait à fournir une interface intuitive pour générer des combinaisons de paris sur divers sports, tout en assurant une expérience utilisateur fluide et réactive.",
            blocks: {
                block1: {
                    title: "Structure modulaire des pages",
                    text: "Les pages de Betkit sont conçues en blocs pour une gestion flexible et modulable du contenu. L'absence de maquettes mobiles m'a poussé à improviser, mais mes compétences en design m'ont permis de créer des pages responsive et adaptées à différentes résolutions.",
                },
                block2: {
                    title: "Gestion des matchs",
                    text: "Les utilisateurs peuvent ajouter, modifier ou supprimer des matchs de différents sports, tout en attribuant des côtes à chacun d'entre eux.",
                },
                block3: {
                    title: "Gestion des combinaisons",
                    text: "L'application permet également de créer, éditer et supprimer des combinaisons de matchs, avec la possibilité de modifier les côtes associées.",
                },
            },
            link: "https://betkit.netlify.app/",
        },
        {
            listTechno: ["React", "Symfony", "MySQL", "Bootstrap"],
            title: "Bewved",
            subtitle: "Plateforme pour les formateurs",
            description:
                "Bewved est une plateforme dédiée aux formateurs pour gérer leurs formations et permettre aux apprenants de s'inscrire et suivre leur progression.",
            image: [bewvedimg, bewvedimg2, bewvedimg3],
            id: 2,
            objectif:
                "Développer une plateforme permettant aux formateurs de gérer leurs formations, et aux apprenants de s'inscrire et suivre leur parcours.",
            textBottom1:
                "J'ai participé à la refonte d'une plateforme de formation pédagogique en utilisant React pour l'interface utilisateur et Symfony pour le back-end. L'objectif était d'offrir une gestion simplifiée des parcours de formation pour les enseignants et formateurs.",
            textBottom2:
                "En partant d'une maquette Figma, j'ai conçu et développé une plateforme web où les enseignants peuvent gérer facilement leurs formations, ajouter des modules et suivre la progression des apprenants.",
            blocks: {
                block1: {
                    title: "Structure en blocs",
                    text: "Les pages ont été conçues pour être modifiées facilement en blocs modulables et interchangeables, avec une gestion facilitée via ACF. L'absence de maquette mobile m'a conduit à adapter le design selon les différents formats d'écran.",
                },
                block2: {
                    title: "Gestion des formations",
                    text: "Les formateurs peuvent ajouter, modifier et supprimer des formations, modules, quiz et vidéos, tout en suivant la progression des apprenants inscrits.",
                },
                block3: {
                    title: "Suivi des apprenants",
                    text: "Les enseignants peuvent gérer les apprenants, suivre leur progression et les associer à des formations spécifiques.",
                },
            },
            link: null,
        },
        {
            listTechno: ["React", "Symfony", "PostgreSQL"],
            title: "Garage V Parrot",
            subtitle: "Site vitrine pour un garage automobile",
            description:
                "Site vitrine présentant les services et produits d'un garage automobile. L'objectif est d'informer les clients potentiels et de faciliter la prise de contact.",
            image: [garageparrotimg, garageparrotimg2, garageparrotimg3],
            id: 3,
            objectif:
                "Créer une vitrine en ligne pour un garage automobile afin de présenter ses services, ses promotions et ses produits.",
            textBottom1:
                "J'ai conçu ce site en partant d'une maquette Figma pour offrir une vitrine moderne et réactive. Développé avec React et Symfony, ce projet permet au garage de mettre en avant ses services et promotions.",
            textBottom2:
                "Le défi principal était de développer un site simple et efficace, permettant aux administrateurs de gérer aisément les services, produits et promotions. Une attention particulière a été portée sur l'optimisation pour tous types d'écrans.",
            blocks: {
                block1: {
                    title: "Structure des pages",
                    text: "Les pages sont segmentées en blocs modulaires, ce qui permet aux administrateurs de gérer facilement le contenu et de l'adapter en fonction des promotions ou services offerts.",
                },
                block2: {
                    title: "Gestion des services",
                    text: "Les administrateurs peuvent gérer la liste des services proposés, les promotions en cours, ainsi que les produits du garage.",
                },
                block3: {
                    title: "Gestion des employés",
                    text: "L'administration permet également de gérer les employés et de les associer à des services spécifiques.",
                },
            },
            link: null,
        },
        {
            listTechno: ["PHP POO", "MySQL"],
            title: "KGB",
            subtitle: "Gestion des missions de l'agence KGB",
            description:
                "KGB est un projet réalisé dans le cadre d'un examen, permettant de gérer les missions, agents et contacts d'une agence fictive.",
            image: [kgbimg, kgbimg2, kgbimg3],
            id: 4,
            objectif:
                "Développer un système complet de gestion des missions, agents et contacts pour l'agence KGB.",
            textBottom1:
                "Ce projet ECF m'a permis de mettre en œuvre mes compétences en PHP orienté objet pour développer un système complet de gestion des missions et des agents.",
            textBottom2:
                "À partir d'une maquette Figma, j'ai développé une application web robuste qui permet aux administrateurs de gérer facilement les agents, missions et contacts de l'agence.",
            blocks: {
                block1: {
                    title: "Structure modulaire",
                    text: "Le site est structuré de manière modulaire avec des blocs administrables, permettant une gestion flexible des missions et des contacts.",
                },
                block2: {
                    title: "Gestion des missions",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des missions. Chaque mission peut être associée à des agents et des contacts.",
                },
                block3: {
                    title: "Gestion des agents",
                    text: "Les administrateurs peuvent gérer la liste des agents et les assigner à différentes missions.",
                },
            },
            link: null,
        },
        {
            listTechno: ["Wordpress", "Elementor"],
            title: "Pobalu",
            subtitle: "Site vitrine pour un artiste",
            description:
                "Pobalu est un site vitrine permettant à l'artiste Pierre Olivier de présenter ses séries de peintures au grand public.",
            image: [pobaluimg, pobaluimg2, pobaluimg3],
            id: 5,
            objectif:
                "Développer un site vitrine permettant à l'artiste de présenter ses œuvres de manière élégante et accessible.",
            textBottom1:
                "Le site permet à l'artiste de gérer facilement ses œuvres et de les exposer en ligne, tout en offrant une navigation fluide pour les visiteurs.",
            textBottom2:
                "Conçu sur WordPress avec Elementor, le site offre une grande flexibilité de gestion, permettant à l'artiste de mettre en avant ses créations sans complexité technique.",
            blocks: {
                block1: {
                    title: "Gestion des séries",
                    text: "Les séries de peintures sont classées et présentées de manière dynamique, permettant une gestion simple des œuvres par l'artiste.",
                },
                block2: {
                    title: "Gestion des tableaux",
                    text: "Chaque tableau peut être associé à une série spécifique, facilitant l'organisation et la présentation des œuvres.",
                },
                block3: {
                    title: "Gestion des expositions",
                    text: "Les administrateurs peuvent créer, modifier ou supprimer des expositions et associer des séries et des tableaux à ces événements pour les mettre en valeur sur le site.",
                },
            },
            link: "https://pobalu.com",
        },
        {
            listTechno: ["Javascript"],
            title: "Jeu de dé",
            subtitle: "Un jeu de dé à deux joueurs",
            description:
                "Ce jeu permet à deux joueurs de s'affronter en lançant un dé à tour de rôle. Le premier à atteindre 100 points gagne la partie.",
            image: [jeuxdeimg, jeuxdeimg2, jeuxdeimg3],
            id: 6,
            objectif:
                "Créer un jeu simple où deux joueurs peuvent lancer un dé et accumuler des points jusqu'à 100 pour remporter la victoire.",
            textBottom1:
                "Ce jeu à deux joueurs est conçu en JavaScript. Les joueurs lancent un dé et peuvent accumuler des points ou passer leur tour. Le premier joueur à atteindre 100 points gagne.",
            textBottom2:
                "Le projet met en œuvre les concepts de programmation orientée objet et de gestion des événements utilisateur en JavaScript.",
            blocks: {
                block1: {
                    title: "Gestion des scores",
                    text: "Les scores de chaque joueur sont mis à jour en temps réel, permettant une compétition fluide et dynamique.",
                },
                block2: {
                    title: "Gestion des tours",
                    text: "Les joueurs passent leur tour après chaque lancer, et les règles du jeu sont appliquées pour garantir une expérience équilibrée.",
                },
                block3: {
                    title: "Suivi des parties",
                    text: "Les joueurs peuvent suivre le déroulement des parties, voir l'évolution du score et relancer une nouvelle partie une fois le jeu terminé.",
                },
            },
            link: "https://danielakim2000.github.io/jeuxavecjs/",
        },
    ]);
    // Liste des projets

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
