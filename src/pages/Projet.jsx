import React from "react";
import { useParams } from "react-router-dom";
import flecheimg from "../assets/fleche.svg";
import DivMaxWidth from "../components/container/DivMaxWidth";
import { useProjetContext } from "../hooks/useProjetContext";

const Projet = () => {
    const id = parseInt(useParams()?.id);
    const { projets } = useProjetContext();
    let projet = projets?.find((projet) => projet.id === id);
    const projetRef = React.useRef(null);
    const [reload, setReload] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState({
        projet: false,
    });
    const [isHover, setIsHover] = React.useState(false);

    React.useEffect(() => {
        if (!projetRef) {
            setReload(!reload);
        }
    }, [reload]);

    React.useEffect(() => {
        let projetCurrent = projetRef?.current;
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

        return () => {
            if (projetCurrent) observer.unobserve(projetCurrent);
        };
    }, []);

    return (
        <div
            style={{
                position: "relative",
                height: "100%", // ajustez la hauteur selon vos besoins
                width: "100%",
                filter: "brightness(0.8)",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${projet?.image[0]})`,
            }}
        >
            <DivMaxWidth>
                <div
                    className="flex flex-col items-start justify-center pt-52 pb-20 text-start gap-7"
                    ref={projetRef}
                    id="projet"
                >
                    <h1
                        className={`text-5xl font-serif font-semibold animate__animated ${
                            isVisible.projet &&
                            "animate__fadeInUp animate-delay-fast"
                        }`}
                    >
                        {projet?.title}
                    </h1>
                    <h5
                        className={`text-xl animate__animated ${
                            isVisible.projet &&
                            "animate__fadeInUp animate-delay-medium"
                        }`}
                    >
                        {projet?.subtitle}
                    </h5>
                </div>
            </DivMaxWidth>
            <div className="w-full bg-slate-900 py-28">
                <DivMaxWidth className={"flex flex-col"}>
                    <div className="w-full flex flex-row justify-between items-center ">
                        <div>
                            <h1 className="text-4xl playfair">
                                {projet?.subtitle}
                            </h1>
                        </div>
                        {projet.link && (
                            <button
                                onMouseOver={() => setIsHover(true)}
                                onFocus={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                onClick={() => window.open(projet.link)}
                                className={`bg-slate-900 font-semibold border-2 text-yellow-500
                        justify-between
                        mt-auto
                      border-yellow-500 rounded-lg w-40 h-12 
                        p-3 transition-all duration-700 
                        ease-in-out hover:bg-yellow-500 hover:w-44
                        text-nowrap relative
                      hover:text-slate-700 inline-flex items-center flex-nowrap 
               `}
                            >
                                Voir le site{" "}
                                <img
                                    src={flecheimg}
                                    className={
                                        "absolute right-3 transition-all duration-500 ease-in-out " +
                                        (isHover ? "w-9" : "w-0")
                                    }
                                    alt="fleche"
                                />
                            </button>
                        )}
                    </div>
                    <div className="w-full flex flex-row justify-between font-normal items-center mt-10 text-left text-lg gap-10">
                        <p>{projet?.textBottom1}</p>
                        <p>{projet?.textBottom2}</p>
                    </div>
                    <div className="flex flex-row mt-10  w-full gap-10">
                        <div className="w-full overflow-hidden rounded-xl">
                            <img
                                src={projet?.image[0]}
                                className="w-full transition duration-500 ease-in-out hover:scale-125 hover:opacity-80"
                                alt="projet"
                            />
                        </div>
                        <div className="w-full text-left">
                            <h2 className="text-2xl playfair">
                                {projet?.blocks.block1.title}
                            </h2>
                            <p className="mt-5 text-lg font-normal">
                                {projet?.blocks.block1.text}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-10  w-full gap-10">
                        <div className="w-full text-left">
                            <h2 className="text-2xl playfair">
                                {projet?.blocks.block2.title}
                            </h2>
                            <p className="mt-5 text-lg font-normal">
                                {projet?.blocks.block2.text}
                            </p>
                        </div>
                        <div className="w-full overflow-hidden rounded-xl">
                            <img
                                src={projet?.image[1]}
                                className=" w-full transition duration-500 ease-in-out hover:scale-125 hover:opacity-80"
                                alt="projet"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row mt-10  w-full gap-10">
                        <div className="w-full overflow-hidden rounded-xl ">
                            <img
                                src={projet?.image[2]}
                                className="w-full transition duration-500 ease-in-out hover:scale-125 hover:opacity-80"
                                alt="projet"
                            />
                        </div>
                        <div className="w-full text-left">
                            <h2 className="text-2xl playfair">
                                {projet?.blocks.block3.title}
                            </h2>
                            <p className="mt-5 text-lg font-normal">
                                {projet?.blocks.block3.text}
                            </p>
                        </div>
                    </div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Projet;
