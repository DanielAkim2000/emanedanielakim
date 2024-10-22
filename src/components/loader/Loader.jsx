import loadingimg from "../../assets/loading.svg";

const Loader = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center backdrop-blur-lg fixed z-20">
            <div
                className="w-[15em] min-h-[15em] justify-center  bg-slate-900 p-5 rounded-3xl flex flex-col items-center gap-5
                            shadow-2xl border-3 border-yellow-500 animate__animated animate__backInDown animate__delay__faster
                        "
            >
                <h1 className="text-xl text-center text-yellow-500 font-semibold">
                    Veuillez patienter...
                </h1>
                <img
                    src={loadingimg}
                    alt="loading"
                    className="loading-spin max-w-[3em]"
                />
            </div>
        </div>
    );
};

export default Loader;
