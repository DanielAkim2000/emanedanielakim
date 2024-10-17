import logo from "@/assets/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import DivMaxWidth from "../../components/container/DivMaxWidth";

const Header = () => {
    const navigate = useNavigate();

    const goToProjets = () => {
        navigate("/projets");
    };

    const goToHome = () => {
        navigate("/");
    };

    const goToContact = () => {
        navigate("/contact");
    };

    return (
        <header className="absolute w-full py-3">
            <DivMaxWidth className="flex flex-col w-full">
                <nav className="flex justify-between items-center pb-4">
                    <img
                        onClick={goToHome}
                        src={logo}
                        alt="logo"
                        className="w-20 ml-0  cursor-pointer"
                    />
                    <ul className="flex">
                        <li className="ml-4">
                            <button
                                onClick={goToProjets}
                                className="uppercase px-5 py-3 
                                        font-semibold text-sm relative
                                        transition-all duration-500 
                                        ease-in-out
                                        hover:text-yellow-500 
                                        before:absolute before:top-0
                                        hover:before:left-0 p-4
                                        before:left-0 before:h-full
                                        before:w-0 before:border-b-2 before:transition-all
                                        before:duration-500 hover:before:w-full hover:before:border-yellow-500 before:border-yellow-500
                                        "
                            >
                                projets
                            </button>
                        </li>
                        <li className="ml-4">
                            <button
                                onClick={goToContact}
                                className="border-2 px-5 py-3 rounded-lg uppercase font-semibold  text-sm border-yellow-500 transition-all duration-500 ease-in-out  hover:bg-yellow-500 hover:text-[#213547]"
                            >
                                me contacter
                            </button>
                        </li>
                    </ul>
                </nav>
            </DivMaxWidth>
        </header>
    );
};

export default Header;
