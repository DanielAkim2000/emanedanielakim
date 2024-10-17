import reactimg from "@/assets/react.svg";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React from "react";
import CardProjet from "../components/card/CardProjet";

const Projets = () => {
    return (
        <div className="w-full bg-slate-700">
            <DivMaxWidth>
                <div className="flex flex-col items-start justify-center pt-52 pb-20 text-start gap-7 px-5">
                    <h1 className="text-5xl font-serif font-semibold">
                        Mes Projets
                    </h1>
                    <h5 className="text-xl">
                        Voici quelques projets que j&apos;ai réalisé
                    </h5>
                </div>
            </DivMaxWidth>
            <div className="w-full bg-slate-900">
                <DivMaxWidth className="py-28">
                    <div className="flex flex-row flex-wrap justify-between max-lg:justify-center gap-5 items-center w-full px-5">
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                        <CardProjet
                            title="Projet 1"
                            image={reactimg}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla ac nunc ultricies lacinia. Nullam nec nulla ac nunc
                            ultricies lacinia."
                            listTechno={["React", "Tailwind", "Next"]}
                        />
                    </div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Projets;
