import React from "react";
import loadingimg from "../../assets/loading.svg";

const LoaderApp = () => {
    return (
        <div className="w-full min-h-[24rem] max-h-full max-sm:max-h-[12rem] bg-transparent">
            <div className="w-full h-screen flex items-center justify-center backdrop-blur-lg  fixed z-20">
                <div
                    className="w-[15em] min-h-[15em] justify-center  p-5 rounded-3xl flex flex-col items-center gap-5
                            shadow-2xl border-3 border-yellow-500 
                        "
                >
                    <img
                        src={loadingimg}
                        alt="loading"
                        className="loading-spin max-w-[3em]"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoaderApp;
