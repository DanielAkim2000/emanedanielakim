import flecheimg from "@/assets/fleche.svg";
import PropTypes from "prop-types";
import React from "react";

const CardProjet = ({ image, listTechno, title, description }) => {
    const [isHover, setIsHover] = React.useState(false);
    const ref = React.useRef(null);
    const currentRef = ref.current;
    console.log(currentRef?.clientHeight + "test");
    return (
        <div
            ref={ref}
            className={
                "max-sm:min-w-[22em] sm:max-w-[23em] md:max-w-[21em] lg:min-w-[23rem] rounded-t-xl bg-slate-700 relative mb-2 after:border-yellow-500 after:border-b after:left-0 after:bg-yellow-500 after:absolute after:top-[" +
                currentRef?.clientHeight +
                "] after:transition-all after:w-full after:duration-700 after:ease-in-out hover:after:border-b-8 "
            }
        >
            <div className="rounded-xl bg-white overflow-hidden">
                <img
                    src={image}
                    className="w-full h-60 object-cover m-auto transition-all duration-700 ease-in-out hover:scale-125 hover:opacity-80"
                    alt="image4"
                />
            </div>
            <div className="p-7 text-start min-h-[22em] max-h-[22em] flex flex-col">
                <p className="text-yellow-500 font-semibold text-sm">
                    {listTechno.reduce((acc, t) => {
                        return acc + ", " + t;
                    })}
                </p>
                <h1 className="font-serif font-semibold text-xl mt-3 mb-5 transition duration-500 ease-in-out hover:text-yellow-500">
                    {title}
                </h1>
                <p className="text-md font-normal">{description}</p>
                <button
                    onMouseOver={() => setIsHover(true)}
                    onFocus={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
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
    image: PropTypes.string.isRequired,
    listTechno: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardProjet;
