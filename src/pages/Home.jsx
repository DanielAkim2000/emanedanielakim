import Myimg from "@/assets/Subject.png";
import CardCompétences from "@/components/card/CardCompétences";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React from "react";

import nextimg from "@/assets/next.svg";
import reactimg from "@/assets/react.svg";
// import expressimg from "@/assets/express.svg";
// import nodeimg from "@/assets/nodejs.svg";
// import symfonyimg from "@/assets/symfony.svg";
import tailwindimg from "@/assets/tailwind.svg";
import CardProjet from "@/components/card/CardProjet";
import Carrousel from "@/components/caroussel/Carrousel";
import { useEffect } from "react";

const Home = () => {
    const competenceRef = React.useRef(null);
    const projetsRef = React.useRef(null);

    const [reload, setReload] = React.useState(false);

    const [isVisible, setIsVisible] = React.useState({
        competence: false,
        projets: false,
    });

    console.log(isVisible);

    useEffect(() => {
        if (!competenceRef || !projetsRef) {
            setReload(!reload);
        }
    }, [reload]);

    useEffect(() => {
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
                { threshold: 0.5 }
            );
        });

        if (competenceRef.current) observer.observe(competenceRef.current);
        if (projetsRef.current) observer.observe(projetsRef.current);
    }, [competenceRef, projetsRef]);

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
            <div className="w-full bg-slate-700">
                <DivMaxWidth
                    className="py-28 text-left"
                    ref={competenceRef}
                    id="competence"
                >
                    <div className="mb-10">
                        <p
                            className={`text-lg text-yellow-500 font-semibold animate__animated ${
                                isVisible?.competence &&
                                "animate__fadeInUp animate-delay-fast"
                            } `}
                        >
                            Mes compétences
                        </p>
                        <h2
                            className={`text-4xl text-white font-serif font-semibold animate__animated ${
                                isVisible?.competence &&
                                "animate__fadeInUp animate-delay-medium"
                            }`}
                        >
                            Services
                        </h2>
                    </div>
                    <div
                        className={`flex flex-row justify-between gap-10 max-sm:flex-col ${
                            isVisible.competence &&
                            "animate__fadeInUp animate-delay-slow"
                        }`}
                    >
                        <CardCompétences
                            images={{
                                image1: reactimg,
                                image2: tailwindimg,
                                image3: nextimg,
                            }}
                            title="Front-end ReactJs et NextJs"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                        />
                        <CardCompétences
                            images={{
                                image1: reactimg,
                                image2: tailwindimg,
                                image3: nextimg,
                            }}
                            title="Front-end ReactJs et NextJs"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                        />
                        <CardCompétences
                            images={{
                                image1: reactimg,
                                image2: tailwindimg,
                                image3: nextimg,
                            }}
                            title="Front-end ReactJs et NextJs"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                        />
                    </div>
                </DivMaxWidth>
            </div>
            <div className="w-full">
                <DivMaxWidth
                    className="py-28 text-left "
                    ref={projetsRef}
                    id="projets"
                >
                    <div className="mb-10">
                        <p className="text-lg text-yellow-500 font-semibold">
                            Mes differents
                        </p>
                        <h2 className="text-4xl text-white font-serif font-semibold">
                            Projets
                        </h2>
                    </div>
                    <Carrousel>
                        <CardProjet
                            name="Projet 1"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                            listTechno={["React", "Tailwind", "Next"]}
                            image={reactimg}
                        />
                        <CardProjet
                            name="Projet 1"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                            listTechno={["React", "Tailwind", "Next"]}
                            image={reactimg}
                        />
                        <CardProjet
                            name="Projet 1"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                            listTechno={["React", "Tailwind", "Next"]}
                            image={reactimg}
                        />
                        <CardProjet
                            name="Projet 1"
                            description="J'utilise les technologies les plus récentes pour créer des applications web modernes."
                            listTechno={["React", "Tailwind", "Next"]}
                            image={reactimg}
                        />
                    </Carrousel>
                    <div className="flex flex-row flex-nowrap"></div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Home;
