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

const Home = () => {
    return (
        <div className="w-full">
            <DivMaxWidth className="py-5">
                <div className="flex justify-start gap-[30rem] w-full h-screen max-md:text-center max-md:justify-center">
                    <div className="self-center text-left max-md:text-center flex flex-col gap-3 top-10 sticky">
                        <h1 className="text-4xl text-yellow-500 max-md:text-2xl font-semibold mt-10">
                            Bonjour, je suis
                        </h1>
                        <div className="flex flex-col md:ml-[-0.5em] font-serif max-md:flex-row max-md:gap-4 justify-center">
                            <h1 className="text-8xl  font-bold max-md:text-6xl max-sm:text-5xl">
                                Emane
                            </h1>
                            <h1 className="text-8xl  font-bold  max-md:text-6xl max-sm:text-5xl">
                                Daniel
                            </h1>
                        </div>
                        <p className="text-2xl text-nowrap">
                            Développeur web full stack
                        </p>
                    </div>
                    <div className="self-end h-auto max-md:hidden">
                        <img
                            src={Myimg}
                            alt="myimg"
                            className="object-fill img-akim"
                        />
                    </div>
                </div>
            </DivMaxWidth>
            <div className="w-full bg-slate-700">
                <DivMaxWidth className="py-28 text-left ">
                    <div className="mb-10">
                        <p className="text-lg text-yellow-500 font-semibold">
                            Mes compétences
                        </p>
                        <h2 className="text-4xl text-white font-serif font-semibold">
                            Services
                        </h2>
                    </div>
                    <div className="flex flex-row justify-between gap-10 max-sm:flex-col">
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
                <DivMaxWidth className="py-28 text-left ">
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
