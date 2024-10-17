import PropTypes from "prop-types";
import React from "react";

const BtnReseauxSociaux = ({ name, link, img }) => {
    const [isHover, setIsHover] = React.useState(false);
    return (
        <button
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="p-5 border-2 border-yellow-500 rounded-lg transition-all w-full h-full duration-500 ease-in-out hover:bg-yellow-500
            "
        >
            <div className="w-full flex items-center justify-between gap-10">
                <div className="text-start flex flex-col gap-2">
                    <p className="text-2xl text-white font-semibold">{name}</p>
                    <h2
                        className={`text-[11px]  text-yellow-500 font-serif font-semibold text-nowrap
                            transition duration-500 ease-in-out ${
                                isHover ? "text-slate-800" : "text-yellow-500"
                            }`}
                    >
                        {link}
                    </h2>
                </div>
                <div className="">
                    <img src={img} className="w-12"></img>
                </div>
            </div>
        </button>
    );
};

BtnReseauxSociaux.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.node.isRequired,
};

export default BtnReseauxSociaux;
