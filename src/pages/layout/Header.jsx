import logo from "@/assets/logo.png";
import React from "react";

const Header = () => {
    return (
        <header className="flex flex-col  w-full absolute max-w-[1280px] py-3">
            <nav className="flex justify-between items-center pb-4">
                <img src={logo} alt="logo" className="w-20 ml-0" />
                <ul className="flex">
                    <li className="ml-4">
                        <button
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
                        <button className="border-2 px-5 py-3 rounded-lg uppercase font-semibold  text-sm border-yellow-500 transition-all duration-500 ease-in-out  hover:bg-yellow-500 hover:text-[#213547]">
                            me contacter
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
