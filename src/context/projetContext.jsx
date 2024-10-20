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
                "Betkit est un outil qui permet de générez les nombres de combinaisons et côtes possibles pour un ensemble de matchs de football , basket-ball, tennis et rugby sélectionnés.",
            image: [betkit1, betkit2, betkit3],
            id: 1,
            objectif:
                "Créer un outil qui permet de générer les combinaisons et côtes possibles pour un ensemble de matchs de football, basket-ball, tennis et rugby sélectionnés.",
            textBottom1:
                "Betkit est un outil qui permet de générer les nombres de combinaisons et côtes possibles pour un ensemble de matchs de football, basket-ball, tennis et rugby sélectionnés.",
            textBottom2:
                "L'objectif de la mission était de partir d'une maquette que j'ai réalisée sur Figma et de développer une application web avec React et Tailwind. Le but était de permettre aux utilisateurs de générer les combinaisons et côtes possibles pour un ensemble de matchs de football, basket-ball, tennis et rugby sélectionnés.",
            blocks: {
                block1: {
                    title: "Composition des pages blocs par blocs",
                    text: "Afin d'être le plus fidèle possible aux maquettes et de permettre une gestion des textes les pages ont été décomposées en blocs administrables et interchangeables à l'aide du module ACF. La principale difficulté du projet était l'absence de maquette mobile ce qui a nécessité pas mal d'improvisation mais mes connaissances en design m'ont permis d'adapter les différentes pages en fonction des différentes résolutions d'écrans.",
                },
                block2: {
                    title: "Gestion des matchs",
                    text: "Les utilisateurs peuvent ajouter, modifier et supprimer des matchs de football, basket-ball, tennis et rugby. Ils peuvent également ajouter des côtes à ces matchs.",
                },
                block3: {
                    title: "Gestion des combinaisons",
                    text: "Les utilisateurs peuvent ajouter, modifier et supprimer des combinaisons de matchs. Ils peuvent également ajouter des côtes à ces combinaisons.",
                },
            },
            link: "https://betkit.netlify.app/",
        },
        {
            listTechno: ["React", "Symfony", "MySQL", "Bootstrap"],
            title: "Bewved",
            subtitle: "Site pour des formateurs",
            description:
                "Bewved est un site pour des formateurs qui listerons leurs formations et les apprenants pourrons s'inscrire à ces formations.",
            image: [bewvedimg, bewvedimg2, bewvedimg3],
            id: 2,
            objectif:
                "Créer un site pour des formateurs qui listerons leurs formations et les apprenants pourrons s'inscrire à ces formations.",
            textBottom1:
                "Dans le cadre d'une refonte de la plateforme dédiée aux enseignants, j'ai travaillé sur la création du nouveau site de formation pédagogique. Ce site, développé en React pour le front-end et Symfony pour le back-end",
            textBottom2:
                "L'objectif de la mission était de partir d'une maquette que j'ai réalisée sur Figma et de développer une application web avec React et Symfony. Le but était de permettre aux enseignants une gestion simple et efficace de leur parcours de formation,",
            blocks: {
                block1: {
                    title: "Composition des pages blocs par blocs",
                    text: "Afin d'être le plus fidèle possible aux maquettes et de permettre une gestion des textes les pages ont été décomposées en blocs administrables et interchangeables à l'aide du module ACF. La principale difficulté du projet était l'absence de maquette mobile ce qui a nécessité pas mal d'improvisation mais mes connaissances en design m'ont permis d'adapter les différentes pages en fonction des différentes résolutions d'écrans.",
                },
                block2: {
                    title: "Gestion des formations",
                    text: "Les enseignants peuvent ajouter, modifier et supprimer des formations, des modules, des quiz et des vidéos. Ils peuvent également ajouter des apprenants à leurs formations et suivre leur progression.",
                },
                block3: {
                    title: "Gestion des apprenants",
                    text: "Les enseignants peuvent ajouter, modifier et supprimer des apprenants à leurs formations. Ils peuvent également suivre la progression des apprenants dans les formations.",
                },
            },
            link: "https://bewved.onrender.com",
        },
        {
            listTechno: ["React", "Symfony", "PostegreSQL"],
            title: "Garage V Parrot",
            subtitle: "Site vitrine pour un garage automobile ",
            description:
                "C'est un site vitrine pour un garage automobile, il permet de présenter les services et les produits du garage.",
            image: [garageparrotimg, garageparrotimg2, garageparrotimg3],
            id: 3,
            objectif:
                "Créer un site vitrine pour un garage automobile, il permet de présenter les services et les produits du garage.",
            textBottom1:
                "Dans le cadre d'une refonte de la plateforme dédiée aux enseignants, j'ai travaillé sur la création du nouveau site de formation pédagogique. Ce site, développé en React pour le front-end et Symfony pour le back-end",
            textBottom2:
                "L'objectif de la mission était de partir d'une maquette que j'ai réalisée sur Figma et de développer une application web avec React et Symfony. Le but était de permettre aux enseignants une gestion simple et efficace de leur parcours de formation,",
            blocks: {
                block1: {
                    title: "Composition des pages blocs par blocs",
                    text: "Afin d'être le plus fidèle possible aux maquettes et de permettre une gestion des textes les pages ont été décomposées en blocs administrables et interchangeables à l'aide du module ACF. La principale difficulté du projet était l'absence de maquette mobile ce qui a nécessité pas mal d'improvisation mais mes connaissances en design m'ont permis d'adapter les différentes pages en fonction des différentes résolutions d'écrans.",
                },
                block2: {
                    title: "Gestion des services",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des services, des produits et des promotions. Ils peuvent également ajouter des employés et des clients.",
                },
                block3: {
                    title: "Gestion des employés",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des employés. Ils peuvent également ajouter des services et des produits à ces employés.",
                },
            },
            link: null,
        },
        {
            listTechno: ["PHP POO", "MySQL"],
            title: "KGB",
            subtitle: "Site de gestion de missions pour l'agence KGB",
            description:
                "KGB est un ecf qui m'a été donné au cours de ma formation, ce site liste les missions de l'agence KGB.Les administrateurs peuvent ajouter, modifier et supprimer des missions, des agents et des contacts etc.",
            image: [kgbimg, kgbimg2, kgbimg3],
            id: 4,
            objectif:
                "Créer un site qui liste les missions de l'agence KGB.Les administrateurs peuvent ajouter, modifier et supprimer des missions, des agents et des contacts etc.",
            textBottom1:
                "Dans le cadre d'une refonte de la plateforme dédiée aux enseignants, j'ai travaillé sur la création du nouveau site de formation pédagogique. Ce site, développé en React pour le front-end et Symfony pour le back-end",
            textBottom2:
                "L'objectif de la mission était de partir d'une maquette que j'ai réalisée sur Figma et de développer une application web avec React et Symfony. Le but était de permettre aux enseignants une gestion simple et efficace de leur parcours de formation,",
            blocks: {
                block1: {
                    title: "Composition des pages blocs par blocs",
                    text: "Afin d'être le plus fidèle possible aux maquettes et de permettre une gestion des textes les pages ont été décomposées en blocs administrables et interchangeables à l'aide du module ACF. La principale difficulté du projet était l'absence de maquette mobile ce qui a nécessité pas mal d'improvisation mais mes connaissances en design m'ont permis d'adapter les différentes pages en fonction des différentes résolutions d'écrans.",
                },
                block2: {
                    title: "Gestion des missions",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des missions, des agents et des contacts. Ils peuvent également ajouter des tâches à ces missions.",
                },
                block3: {
                    title: "Gestion des agents",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des agents. Ils peuvent également ajouter des missions et des contacts à ces agents.",
                },
            },
            link: null,
        },
        {
            listTechno: ["Wordpress", "Elementor"],
            title: "Pobalu",
            subtitle: "Site vitrine pour l'artiste Pierre Olivier",
            description:
                "Pobalu est un site vitrine pour l'artiste Pierre Olivier qui lui permet de présenter ses différentes séries de peintures.",
            image: [pobaluimg, pobaluimg2, pobaluimg3],
            id: 5,
            objectif:
                "Créer un site vitrine pour l'artiste Pierre Olivier qui lui permet de présenter ses différentes séries de peintures.",
            textBottom1:
                "Dans le cadre d'une refonte de la plateforme dédiée aux enseignants, j'ai travaillé sur la création du nouveau site de formation pédagogique. Ce site, développé en React pour le front-end et Symfony pour le back-end",
            textBottom2:
                "L'objectif de la mission était de partir d'une maquette que j'ai réalisee sur Figma et de développer une application web avec React et Symfony. Le but était de permettre aux enseignants une gestion simple et efficace de leur parcours de formation,",
            blocks: {
                block1: {
                    title: "Composition des pages blocs par blocs",
                    text: "Afin d'être le plus fidèle possible aux maquettes et de permettre une gestion des textes les pages ont été décomposées en blocs administrables et interchangeables à l'aide du module ACF. La principale difficulté du projet était l'absence de maquette mobile ce qui a nécessité pas mal d'improvisation mais mes connaissances en design m'ont permis d'adapter les différentes pages en fonction des différentes résolutions d'écrans.",
                },
                block2: {
                    title: "Gestion des séries",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des séries de peintures. Ils peuvent également ajouter des tableaux à ces séries.",
                },
                block3: {
                    title: "Gestion des tableaux",
                    text: "Les administrateurs peuvent ajouter, modifier et supprimer des tableaux. Ils peuvent également ajouter des séries de peintures à ces tableaux.",
                },
            },
            link: "https://pobalu.com",
        },
        {
            listTechno: ["Javascript"],
            title: "Jeux de dé",
            subtitle: "Création d'un jeu de dé",
            description:
                "C'est un jeu de dé qui permet de lancer un dé et de voir le résultat, il se joue a deux sur le même écrans, le premier joueur a atteindre les 100points à gagné la partie.",
            image: [jeuxdeimg, jeuxdeimg2, jeuxdeimg3],
            id: 6,
            objectif:
                "Créer un jeu de dé qui permet de lancer un dé et de voir le résultat, il se joue a deux sur le même écrans, le premier joueur a atteindre les 100points à gagné la partie.",
            textBottom1:
                "Dans le cadre d'une refonte de la plateforme dédiée aux enseignants, j'ai travaillé sur la création du nouveau site de formation pédagogique. Ce site, développé en React pour le front-end et Symfony pour le back-end",
            textBottom2:
                "L'objectif de la mission était de partir d'une maquette que j'ai réalisee sur Figma et de développer une application web avec React et Symfony. Le but était de permettre aux enseignants une gestion simple et efficace de leur parcours de formation,",
            blocks: {
                block1: {
                    title: "Composition des pages blocs par blocs",
                    text: "Afin d'être le plus fidèle possible aux maquettes et de permettre une gestion des textes les pages ont été décomposées en blocs administrables et interchangeables à l'aide du module ACF. La principale difficulté du projet était l'absence de maquette mobile ce qui a nécessité pas mal d'improvisation mais mes connaissances en design m'ont permis d'adapter les différentes pages en fonction des différentes résolutions d'écrans.",
                },
                block2: {
                    title: "Gestion des parties",
                    text: "Les joueurs peuvent lancer un dé et voir le résultat. Ils peuvent également ajouter des points à leur score.",
                },
                block3: {
                    title: "Gestion des scores",
                    text: "Les joueurs peuvent ajouter des points à leur score. Ils peuvent également voir le score de leur adversaire.",
                },
            },
            link: "https://danielakim2000.github.io/jeuxavexjs",
        },
    ]); // Liste des projets

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
