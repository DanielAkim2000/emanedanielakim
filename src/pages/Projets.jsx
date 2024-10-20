import DivMaxWidth from "@/components/container/DivMaxWidth";
import React, { useEffect } from "react";
import CardProjet from "../components/card/CardProjet";
import { useProjetContext } from "../hooks/useProjetContext";

const Projets = () => {
    const { projets } = useProjetContext();

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
                        {projets.map((projet) => (
                            <CardProjet key={projet.id} projet={projet} />
                        ))}
                    </div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Projets;
