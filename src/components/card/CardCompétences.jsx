import Proptypes from "prop-types";
import React from "react";

const CardCompétences = ({ images, title, description }) => {
    const [isHover, setIsHover] = React.useState(false);
    return (
        <button
            className="flex flex-col border-2 justify-start items-start min-h-64 w-full p-9 rounded-sm transition duration-500 ease-in-out border-[#eab2085f] hover:border-yellow-500"
            onMouseOver={() => setIsHover(true)}
            onFocus={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="inline-flex mb-7 gap-3  max-sm:justify-start ">
                <img
                    src={images[0]}
                    className="max-sm:w-[3.4em] sm:w-[5vw] md:w-[3em]"
                    alt="image1"
                />
                <img
                    src={images[1]}
                    className="max-sm:w-[3.4em] sm:w-[5vw] md:w-[3em]"
                    alt="image2"
                />
                {images[3] && (
                    <img
                        src={images[3]}
                        className="max-sm:w-[3.4em] sm:w-[5vw] md:w-[3em]"
                        alt="image3"
                    />
                )}
            </div>
            <div className="text-left">
                <h1
                    className={`mb-3 text-xl playfair transition duration-500 ease-in-out ${
                        isHover && "text-yellow-500"
                    }`}
                >
                    {title}
                </h1>
                <p>{description}</p>
            </div>
        </button>
    );
};

CardCompétences.propTypes = {
    images: Proptypes.object.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
};

export default CardCompétences;
