import flecheimg from "@/assets/fleche.svg";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardProjet = ({ projet }) => {
    const [isHover, setIsHover] = React.useState(false);
    const ref = React.useRef(null);
    const currentRef = ref.current;
    console.log(currentRef?.clientHeight + "test");
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(() => {
            navigate(`/projets/${projet.id}`);
        }, 500);
    };
    return (
        <div
            ref={ref}
            className={
                "max-sm:min-w-[20em] max-sm:max-w-[20em] sm:max-w-[21em] sm:min-w-[21em] md:max-w-[21em] lg:min-w-[23rem] lg:max-w-[23rem] md:min-w-[23em] rounded-t-xl bg-slate-700 relative mb-2 after:border-yellow-500 after:border-b after:left-0 after:bg-yellow-500 after:absolute after:top-[" +
                currentRef?.clientHeight +
                "] after:transition-all after:w-full after:duration-700 after:ease-in-out hover:after:border-b-8 "
            }
        >
            <div className="rounded-xl bg-white overflow-hidden">
                <img
                    onClick={handleClick}
                    src={projet.image[0]}
                    className="w-full h-60 object-cover m-auto transition-all duration-700 ease-in-out hover:scale-125 hover:opacity-80"
                    alt="image4"
                />
            </div>
            <div className="p-7 text-start min-h-[22em] max-h-[22em]  max-sm:min-h-[21em] max-sm:max-h-[21em] flex flex-col">
                <p className="text-yellow-500 font-semibold text-sm">
                    {projet.listTechno.reduce((acc, t) => {
                        return acc + ", " + t;
                    })}
                </p>
                <h1 className="font-serif font-semibold text-xl mt-3 mb-5 transition duration-500 ease-in-out hover:text-yellow-500">
                    {projet.title}
                </h1>
                <p className="max-md:text-sm font-normal ">
                    {projet.description}
                </p>
                <button
                    onMouseOver={() => setIsHover(true)}
                    onFocus={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={handleClick}
                    className={`bg-slate-700 font-semibold border-2 text-yellow-500
                        justify-between
                        mt-auto
                        mb-5
                     border-yellow-500 rounded-lg w-40 h-12 
                     p-3 transition-all duration-700 
                     ease-in-out hover:bg-yellow-500 hover:w-44
                     text-nowrap relative
                    hover:text-slate-700 inline-flex items-center flex-nowrap 
               `}
                >
                    En savoir plus{" "}
                    <img
                        src={flecheimg}
                        className={
                            "absolute right-3 transition-all duration-500 ease-in-out " +
                            (isHover ? "w-9" : "w-0")
                        }
                        alt="fleche"
                    />
                </button>
            </div>
        </div>
    );
};

CardProjet.propTypes = {
    projet: PropTypes.object.isRequired,
};

export default CardProjet;
