import githubimg from "@/assets/github.svg";
import BtnReseauxSociaux from "@/components/button/BtnReseauxSociaux";
import DivMaxWidth from "@/components/container/DivMaxWidth";

const Footer = () => {
    return (
        <footer className="w-full bg-slate-800">
            <DivMaxWidth className="py-28">
                <div className="mb-10 w-full flex flex-col items-start">
                    <p className="text-lg text-yellow-500 font-semibold">
                        Réseaux sociaux
                    </p>
                    <h2 className="text-4xl text-white font-serif font-semibold">
                        Me retrouver
                    </h2>
                </div>
                <div className="w-full justify-between gap-10 flex max-lg:flex-col">
                    <BtnReseauxSociaux
                        name="Github"
                        link="github.com/danielakimemane2000"
                        img={githubimg}
                    />
                    <BtnReseauxSociaux
                        name="Linkedin"
                        link="linkedin.com/in/daniel-akim-emane"
                        img={githubimg}
                    />
                    <BtnReseauxSociaux
                        name="Twitter"
                        link="twitter.com/danielakimemane"
                        img={githubimg}
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
