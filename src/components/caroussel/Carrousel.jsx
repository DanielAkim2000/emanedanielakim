import Proptypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

// document.documentElement.clientWidth + 1.25rem
let width = 0;
if (typeof window !== "undefined") {
    width = window.innerWidth - 6;
}

const Carrousel = ({ children }) => {
    let ScrollBar = useRef(null);
    const currentScrollBar = ScrollBar?.current;
    const [reload, setReload] = React.useState(false);

    const [disabled, setDisabled] = React.useState({
        left: false,
        right: false,
    });

    const [scrollInfo, setScrollInfo] = React.useState({
        scrollWidth: currentScrollBar?.scrollWidth,
        scrollLeft: 0,
        clientWidth: currentScrollBar?.clientWidth,
    });

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0); // Position initiale du clic
    const [scrollLeft, setScrollLeft] = useState(0); // Position initiale du scroll

    console.log(scrollInfo);

    const scrollToRight = () => {
        const s = scrollInfo?.scrollWidth;
        currentScrollBar?.scroll({
            left: s,
            behavior: "smooth",
        });
        setDisabled({
            left: false,
            right: true,
        });
        console.log("scroll");
    };

    const scrollToLeft = () => {
        currentScrollBar?.scroll({
            left: 0,
            behavior: "smooth",
        });
        setDisabled({
            left: false,
            right: true,
        });
    };

    const handleScroll = () => {
        setScrollInfo({
            scrollWidth: currentScrollBar?.scrollWidth,
            scrollLeft: currentScrollBar?.scrollLeft,
            clientWidth: currentScrollBar?.clientWidth,
        });
        if (currentScrollBar?.scrollLeft === 0) {
            setDisabled({
                left: true,
                right: false,
            });
        } else if (
            // 5 car il y a un décalage de 5px pour le scroll
            currentScrollBar.scrollLeft + width >=
            currentScrollBar.scrollWidth
        ) {
            setDisabled({
                left: false,
                right: true,
            });
        } else {
            setDisabled({
                left: false,
                right: false,
            });
        }
    };

    const handleMouseDown = (event) => {
        const element = currentScrollBar;
        setIsDragging(true); // Détecte que l'utilisateur a cliqué
        setStartX(event.clientX - element?.offsetLeft); // Position de départ du clic
        setScrollLeft(element?.scrollLeft); // Enregistre la position du scroll actuel
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return; // Ne fait rien si on ne glisse pas
        event.preventDefault(); // Empêche les comportements par défaut comme le texte sélectionné
        const element = currentScrollBar;
        const x = event.clientX - element.offsetLeft;
        const walk = x - startX;
        console.log(scrollLeft, "left");
        element.scrollLeft = scrollLeft - walk; // Met à jour la position de scroll
    };

    const handleMouseUp = () => {
        if (
            scrollLeft + currentScrollBar?.clientWidth ===
            currentScrollBar?.scrollWidth // Si on est à la fin
        ) {
            if (
                currentScrollBar.scrollLeft <
                currentScrollBar.scrollWidth -
                    currentScrollBar.clientWidth -
                    200
            ) {
                currentScrollBar.scroll({
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                currentScrollBar.scroll({
                    left: currentScrollBar.scrollWidth,
                    behavior: "smooth",
                });
            }
        }

        if (scrollLeft === 0) {
            if (currentScrollBar?.scrollLeft > 250) {
                currentScrollBar.scroll({
                    left: currentScrollBar.scrollWidth,
                    behavior: "smooth",
                });
            } else {
                currentScrollBar.scroll({
                    left: 0,
                    behavior: "smooth",
                });
            }
        }
        setIsDragging(false); // Arrête le glissement
    };

    const handleMouseLeave = () => {
        setIsDragging(false); // Arrête le glissement si la souris quitte l'élément
    };

    //UseEffect pour mettre a jour les informations de scroll au chargement de la page
    useEffect(() => {
        if (!currentScrollBar) {
            setReload(!reload);
        }
        if (currentScrollBar) {
            setScrollInfo({
                scrollWidth: currentScrollBar?.scrollWidth,
                scrollLeft: currentScrollBar?.scrollLeft,
                clientWidth: currentScrollBar?.clientWidth,
            });
        }
    }, [currentScrollBar, reload]);

    const scrollToLeftPas3 = () => {
        const s =
            currentScrollBar.scrollLeft - width >= 0
                ? currentScrollBar.scrollLeft - width
                : 0;
        currentScrollBar.scroll({
            left: s,
            behavior: "smooth",
        });
    };

    const scrollToRightPas3 = () => {
        const s =
            currentScrollBar.scrollLeft + width <= currentScrollBar.scrollWidth
                ? currentScrollBar.scrollLeft + width
                : currentScrollBar.scrollWidth;
        currentScrollBar.scroll({
            left: s,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section
                ref={ScrollBar}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className={`gap-10 flex-nowrap hide-scrollbar justify-start flex  overflow-x-auto max-w-full max-sm:w-full`}
            >
                {children}
            </section>
            <div className="flex gap-3 mt-5">
                <button
                    onClick={scrollToLeft}
                    disabled={currentScrollBar && disabled.left}
                    className="max-lg:hidden"
                >
                    <div
                        className={`w-10 h-2  rounded-full ${
                            disabled.left || scrollInfo.scrollLeft === 0
                                ? "bg-[#eab2085f]"
                                : "bg-yellow-500"
                        }`}
                    ></div>
                </button>
                <button
                    onClick={scrollToRight}
                    className="max-lg:hidden"
                    disabled={currentScrollBar && disabled.right}
                >
                    <div
                        className={`w-10 h-2  rounded-full ${
                            disabled.right ? "bg-[#eab2085f]" : "bg-yellow-500"
                        }`}
                    ></div>
                </button>
                <button
                    onClick={scrollToLeftPas3}
                    disabled={currentScrollBar && disabled.left}
                    className="lg:hidden"
                >
                    <div
                        className={`w-10 h-2  rounded-full ${
                            disabled.left || scrollInfo.scrollLeft === 0
                                ? "bg-[#eab2085f]"
                                : "bg-yellow-500"
                        }`}
                    ></div>
                </button>
                <button
                    onClick={scrollToRightPas3}
                    className="lg:hidden"
                    disabled={currentScrollBar && disabled.right}
                >
                    <div
                        className={`w-10 h-2  rounded-full ${
                            disabled.right ? "bg-[#eab2085f]" : "bg-yellow-500"
                        }`}
                    ></div>
                </button>
            </div>
        </>
    );
};

Carrousel.propTypes = {
    children: Proptypes.node.isRequired,
};

export default Carrousel;
