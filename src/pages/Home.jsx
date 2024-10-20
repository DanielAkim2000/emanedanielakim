import Myimg from "@/assets/Subject.png";
import CardCompétences from "@/components/card/CardCompétences";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React from "react";

import elementorimg from "@/assets/elementor.svg";
import expressimg from "@/assets/express.svg";
import nextimg from "@/assets/next.svg";
import nodeimg from "@/assets/nodejs.svg";
import reactimg from "@/assets/react.svg";
import symfonyimg from "@/assets/symfony.svg";
import tailwindimg from "@/assets/tailwind.svg";
import wordpressimg from "@/assets/wordpress.svg";
import CardProjet from "@/components/card/CardProjet";
import Carrousel from "@/components/caroussel/Carrousel";
import { useProjetContext } from "../hooks/useProjetContext";

const Home = () => {
    const competenceRef = React.useRef(null);
    const projetsRef = React.useRef(null);
    const { projets } = useProjetContext();

    const [reload, setReload] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);

    const [isVisible, setIsVisible] = React.useState({
        competence: false,
        projets: false,
    });

    console.log(isVisible);

    React.useEffect(() => {
        if (!competenceRef || !projetsRef) {
            setReload(!reload);
        }
        // setTimeout(() => {
        //     setLoading(false);
        // }, 1500);

        // return () => {
        //     setLoading(true);
        // };
    }, [reload]);

    React.useEffect(() => {
        let competenceCurrent = competenceRef?.current;
        let projetsCurrent = projetsRef?.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                },
                { threshold: 0.3 }
            );
        });

        if (competenceRef.current) observer.observe(competenceRef.current);
        if (projetsRef.current) observer.observe(projetsRef.current);

        return () => {
            if (competenceCurrent) observer.unobserve(competenceCurrent);
            if (projetsCurrent) observer.unobserve(projetsCurrent);
        };
    }, []);

    return (
        <div className="w-full bg-akim">
            <DivMaxWidth className="">
                <div className="flex justify-start gap-[30rem] w-full h-screen max-md:text-center max-lg:justify-center">
                    <div className="self-center text-left max-lg:text-center flex flex-col gap-3 top-10 sticky pb-20">
                        <h1 className="text-4xl text-yellow-500 max-md:text-2xl font-semibold mt-10 animate__animated animate__fadeInUp animate-delay-fast">
                            Bonjour, je suis
                        </h1>
                        <div className="flex flex-col lg:ml-[-0.5rem] font-serif max-lg:flex-row max-lg:gap-4 justify-center">
                            <h1 className="text-8xl  font-bold max-md:text-6xl max-sm:text-[2.5rem] animate__animated animate__fadeInUp animate-delay-medium">
                                Emane
                            </h1>
                            <h1 className="text-8xl  font-bold  max-md:text-6xl max-sm:text-[2.5rem] animate__animated  animate__fadeInUp animate-delay-medium">
                                Daniel
                            </h1>
                        </div>
                        <p className="text-2xl text-nowrap animate__animated animate__fadeInUp animate-delay-slow">
                            Développeur web full stack
                        </p>
                    </div>
                    <div className="self-end h-auto max-lg:hidden pb-1 sticky top-20">
                        <img
                            src={Myimg}
                            alt="myimg"
                            className="object-fill img-akim animate__animated animate__fadeInUp animate-delay-medium"
                        />
                    </div>
                </div>
            </DivMaxWidth>
            <div className="w-full bg-slate-700 flex justify-center">
                <DivMaxWidth className="py-28 text-left">
                    <div className="mb-10" ref={competenceRef} id="competence">
                        <p
                            className={`text-lg text-yellow-500 font-semibold animate__animated ${
                                isVisible.competence &&
                                " animate__fadeInUp animate-delay-fast"
                            } `}
                        >
                            Mes compétences
                        </p>
                        <h2
                            className={`text-4xl text-white font-serif font-semibold animate__animated  ${
                                isVisible.competence &&
                                " animate__fadeInUp animate-delay-medium"
                            }`}
                        >
                            Services
                        </h2>
                    </div>
                    <div
                        className={`flex flex-row justify-between gap-10 max-sm:flex-col animate__animated ${
                            isVisible.competence &&
                            " animate__fadeInUp animate-delay-slow"
                        }`}
                    >
                        <CardCompétences
                            images={{
                                image1: symfonyimg,
                                image2: nodeimg,
                                image3: expressimg,
                            }}
                            title="Backend ExpressJs ou Symfony"
                            description="Je crée des API RESTful sécurisées et performantes pour vos applications web."
                        />
                        <CardCompétences
                            images={{
                                image1: nextimg,
                                image2: tailwindimg,
                                image3: reactimg,
                            }}
                            title="Front-end ReactJs et NextJs"
                            description="Grâce à ReactJs et NextJs, je crée des interfaces utilisateur modernes et réactives."
                        />
                        <CardCompétences
                            images={{
                                image1: wordpressimg,
                                image2: elementorimg,
                            }}
                            title="Wordpress et Elementor"
                            description="Je crée des sites web vitrines et des blogs avec Wordpress et Elementor."
                        />
                    </div>
                </DivMaxWidth>
            </div>
            <div className="w-full">
                <DivMaxWidth className="py-28 text-left ">
                    <div className="mb-10" ref={projetsRef} id="projets">
                        <p
                            className={`text-lg text-yellow-500 font-semibold animate__animated ${
                                isVisible.projets &&
                                "animate__fadeInUp animate-delay-fast"
                            }`}
                        >
                            Mes differents
                        </p>
                        <h2
                            className={`text-4xl text-white font-serif font-semibold animate__animated ${
                                isVisible.projets &&
                                "animate__fadeInUp animate-delay-medium"
                            }`}
                        >
                            Projets
                        </h2>
                    </div>
                    <div
                        className={`animate__animated ${
                            isVisible.projets &&
                            "animate__fadeInUp animate-delay-fast"
                        }`}
                    >
                        <Carrousel>
                            {projets?.map((projet) => (
                                <CardProjet key={projet.id} projet={projet} />
                            ))}
                        </Carrousel>
                    </div>

                    <div className="flex flex-row flex-nowrap"></div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Home;
