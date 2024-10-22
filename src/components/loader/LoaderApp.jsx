import React from "react";
import loadingimg from "../../assets/loading.svg";

const LoaderApp = () => {
    return (
        <div className="w-full min-h-[24rem] max-h-full max-sm:max-h-[12rem] bg-transparent">
            <div className="w-full h-screen flex items-center justify-center backdrop-blur-lg  fixed z-20">
                <img
                    src={loadingimg}
                    alt="loading"
                    className="loading-spin max-w-[3em]"
                />
            </div>
        </div>
    );
};

export default LoaderApp;
