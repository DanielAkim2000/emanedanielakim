import lbvimg from "@/assets/lbv.webp";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React from "react";

const Contact = () => {
    const devisRef = React.useRef(null);
    const questionsRef = React.useRef(null);

    const [reload, setReload] = React.useState(false);

    const [isVisible, setIsVisible] = React.useState({
        devis: false,
        questions: false,
    });

    console.log(isVisible);

    React.useEffect(() => {
        if (!devisRef || !questionsRef) {
            setReload(!reload);
            return;
        }
    }, [reload]);

    React.useEffect(() => {
        let devisCurrent = devisRef?.current;
        let questionsCurrent = questionsRef?.current;
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
                { threshold: 1 }
            );
        });

        if (devisRef.current) observer.observe(devisRef.current);
        if (questionsRef.current) observer.observe(questionsRef.current);

        return () => {
            if (devisCurrent) observer.unobserve(devisCurrent);
            if (questionsCurrent) observer.unobserve(questionsCurrent);
        };
    }, [devisRef, questionsRef]);

    return (
        <div className="w-full flex flex-col gap-0 ">
            <div className="">
                <img
                    src={lbvimg}
                    className="max-h-[24rem] min-w-full object-cover "
                />
            </div>
            <div className="w-full bg-slate-900">
                <DivMaxWidth className="relative">
                    <div
                        className={`w-full p-20 bg-slate-700 -mt-52 max-sm:px-7 max-sm:py-10 max-sm:-mt-32 animate__animated ${
                            isVisible.devis && "animate__fadeInUp "
                        }`}
                        ref={devisRef}
                        id="devis"
                    >
                        <div className="mb-10 w-full flex flex-col items-start max-">
                            <p
                                className={`text-lg text-yellow-500 font-semibold animate__animated ${
                                    isVisible.devis &&
                                    "animate__fadeInUp animate-delay-fast"
                                }`}
                            >
                                Obtenir un devis
                            </p>
                            <h2
                                className={`text-4xl text-white font-serif text-start text-nowrap font-semibold animate__animated ${
                                    isVisible.devis &&
                                    "animate__fadeInUp animate-delay-medium"
                                }`}
                            >
                                Me contacter
                            </h2>
                            <p
                                className={`text-start mt-7 text-md animate__animated ${
                                    isVisible.devis &&
                                    "animate__fadeInUp animate-delay-slow"
                                }`}
                            >
                                Merci de donner un maximum de détail sur le
                                projet afin que je puisse évaluer correctement
                                la charge de travail que représente votre
                                projet. Cela permettra aussi d&apos;avoir un
                                premier chiffrage au plus proche du devis final.
                            </p>
                        </div>
                        <div
                            className={`w-full flex flex-row items-center gap-5 max-sm:flex-col animate__animated ${
                                isVisible.devis &&
                                "animate__fadeInUp animate-delay-last"
                            }`}
                        >
                            <div className="min-w-[20em] flex flex-col justify-between gap-5 max-sm:min-w-full">
                                <input
                                    type="text"
                                    className="w-full h-14 p-4 border-2 bg-slate-700 rounded-lg transition-all duration-500 ease-in-out outline-1 focus:outline-none focus:border-yellow-500"
                                    placeholder="Nom et Prénom"
                                />
                                <input
                                    type="text"
                                    className="w-full h-14 p-4 border-2 bg-slate-700 rounded-lg transition-all duration-500 ease-in-out focus:outline-none focus:border-yellow-500"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-full flex">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="w-full min-h-32 border-2 bg-slate-700 rounded-lg p-4 transition-all duration-500 ease-in-out focus:outline-none focus:border-yellow-500"
                                    placeholder="Description du projet"
                                ></textarea>
                            </div>
                        </div>
                        <div
                            className={`w-full flex justify-start mt-9 animate__animated ${
                                isVisible.devis &&
                                "animate__fadeInUp animate-delay-last"
                            } `}
                        >
                            <button
                                className={`text-yellow-500 font-semibold p-4 rounded-lg border-2 border-yellow-500
                                transition-all duration-500 ease-in-out hover:bg-yellow-500 hover:text-slate-700`}
                            >
                                Obtenir un devis
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row py-28 justify-start max-sm:flex-col max-sm:py-16">
                        <div className="w-full">
                            <div
                                className="text-left flex flex-col gap-3 mb-7"
                                ref={questionsRef}
                                id="questions"
                            >
                                <h1
                                    className={`text-lg text-yellow-500 max-md:text-2xl font-semibold animate__animated ${
                                        isVisible.questions &&
                                        "animate__fadeInUp animate-delay-fast"
                                    }`}
                                >
                                    FAQ
                                </h1>
                                <div
                                    className={`flex flex-col font-serif justify-center gap-3 animate__animated ${
                                        isVisible.questions &&
                                        "animate__fadeInUp animate-delay-medium"
                                    }`}
                                >
                                    <h1 className="text-4xl  font-bold text-nowrap">
                                        Les questions
                                    </h1>
                                    <h1 className="text-4xl  font-bold ">
                                        fréquentes
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full"
                            ref={questionsRef}
                            id="questions"
                        >
                            <div
                                className={`flex flex-col gap-10 animate__animated ${
                                    isVisible.questions &&
                                    "animate__fadeInUp animate-delay-medium"
                                }`}
                            >
                                <div className="text-left">
                                    <h1 className="mb-3 text-3xl playfair max-sm:text-2xl">
                                        Quels sont vos disponibilités ?
                                    </h1>
                                    <p className="md:text-lg">
                                        Je suis actuellement disponible
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h1 className="mb-3 text-3xl playfair max-sm:text-2xl">
                                        Quels sont vos tarifs ?
                                    </h1>
                                    <p className="md:text-lg">
                                        La tarification dépend du projet et
                                        surtout du temps qui sera nécessaire
                                        pour le mener à bien. À titre indicatif
                                        mon tarif journalier moyen se situe aux
                                        alentour de{" "}
                                        <b className="text-yellow-500">200€</b>
                                        /jour
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h1 className="mb-3 text-3xl playfair max-sm:text-2xl">
                                        Effectuez-vous des missions en Agence ?
                                    </h1>
                                    <p className="md:text-lg">
                                        J&apos;effectue l&apos;ensemble de mes
                                        missions à distance.
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h1 className="mb-3 text-3xl playfair max-sm:text-2xl">
                                        Faites-vous la partie design des
                                        projets?
                                    </h1>
                                    <p className="md:text-lg">
                                        Je ne suis malheureusement pas en
                                        capacité d&apos;effectuer le design
                                        d&apos;une application aussi il sera
                                        nécessaire de fournir le design si la
                                        mission le nécessite. Je vous donnerai
                                        le contact d&apos;un designer web si
                                        vous n&apos;en avez pas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Contact;
