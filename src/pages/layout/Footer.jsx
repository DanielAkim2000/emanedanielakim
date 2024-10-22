import githubimg from "@/assets/github.svg";
import instagraming from "@/assets/instagram.svg";
import linkedinimg from "@/assets/linkedin.svg";
import BtnReseauxSociaux from "@/components/button/BtnReseauxSociaux";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React, { useEffect } from "react";

const Footer = () => {
    const reseauxRef = React.useRef(null);
    const [reload, setReload] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState({ reseaux: false });

    useEffect(() => {
        if (!reseauxRef) {
            setReload(!reload);
        }
        setIsVisible({ reseaux: false });
    }, [reload]);

    useEffect(() => {
        let reseauxCurrent = reseauxRef?.current;
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
                { threshold: 0.6 }
            );
        });

        if (reseauxRef.current) observer.observe(reseauxRef.current);

        return () => {
            if (reseauxCurrent) observer.unobserve(reseauxCurrent);
        };
    }, []);

    return (
        <footer className="w-full bg-slate-800">
            <DivMaxWidth className="py-28">
                <div
                    id="reseaux"
                    className="mb-10 w-full flex flex-col items-start"
                    ref={reseauxRef}
                >
                    <p
                        className={`text-lg text-yellow-500 font-semibold animate__animated ${
                            isVisible.reseaux &&
                            " animate__fadeInUp  animate__delay_faster"
                        }`}
                    >
                        Réseaux sociaux
                    </p>
                    <h2
                        className={`text-4xl text-white font-serif font-semibold animate__animated ${
                            isVisible.reseaux &&
                            "animate__fadeInUp animate-delay-fast"
                        }`}
                    >
                        Me retrouver
                    </h2>
                </div>
                <div
                    className={`w-full justify-between gap-10 flex max-sm:flex-col animate__animated ${
                        isVisible.reseaux &&
                        "animate__fadeInUp animate-delay-fast"
                    }`}
                >
                    <BtnReseauxSociaux
                        name="Github"
                        link="https://github.com/DanielAkim2000"
                        img={githubimg}
                    />
                    <BtnReseauxSociaux
                        name="Linkedin"
                        link="https://www.linkedin.com/in/daniel-akim-emane-ab5700286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        img={linkedinimg}
                    />
                    <BtnReseauxSociaux
                        name="Instagram"
                        link="https://www.instagram.com/akim_emane"
                        img={instagraming}
                    />
                </div>
            </DivMaxWidth>
            <div className="m-auto bg-slate-700 py-10">
                <p className="text-center text-white text-sm text-opacity-45">
                    2024 Daniel Akim Emane. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
