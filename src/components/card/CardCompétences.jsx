import Proptypes from "prop-types";
import React from "react";

const CardCompétences = ({ images, title, description }) => {
    return (
        <div className="flex flex-col border-2 justify-start items-start min-h-64 w-full p-9 rounded-sm border-[#eab2085f] hover:border-yellow-500">
            <div className="inline-flex mb-7 gap-3  max-sm:justify-start ">
                <img
                    src={images.image1}
                    className="max-sm:w-[3.4em] sm:w-[5vw] md:w-[3em]"
                    alt="image"
                />
                <img
                    src={images.image2}
                    className="max-sm:w-[3.4em] sm:w-[5vw] md:w-[3em]"
                    alt="image"
                />
                <img
                    src={images.image3}
                    className="max-sm:w-[3.4em] sm:w-[5vw] md:w-[3em]"
                    alt="image"
                />
            </div>
            <div className="text-left">
                <h1 className="mb-3 text-xl playfair">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

CardCompétences.propTypes = {
    images: Proptypes.object.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
};

export default CardCompétences;
