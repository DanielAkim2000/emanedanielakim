import PropTypes from "prop-types";
import React from "react";

const BtnReseauxSociaux = ({ name, link, img }) => {
    return (
        <button
            className="p-5 border-2 border-yellow-500 rounded-lg transition-all text-yellow-500  w-full h-full duration-500 ease-in-out hover:bg-yellow-500 hover:text-slate-800
            "
            onClick={() => window.open(link, "_blank")}
        >
            <div className="w-full flex items-center justify-between gap-10">
                <div className="text-start flex flex-col gap-2">
                    <p className="text-2xl text-white font-semibold">{name}</p>
                    <h2 className="text-[11px] font-serif font-semibold text-nowrap">
                        {link.slice(0, 15) + "..."}
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
