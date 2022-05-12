import React, { useState } from "react";

export const MobileMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    //
    // function toggle(){
    //   setIsVisible(state=>!state);
    // }
    //
    function handleShowMenu() {
        setIsVisible(true);
    }

    function handleCloseMenu() {
        setIsVisible(false);
    }

    return (
        <section className="mobile">
            <header className="mobile-menu">
                <a href="#" className="open-menu" onClick={handleShowMenu} />
                <nav className={isVisible ? "" : "hide"}>
                    <ul>
                        <li>
                            <a href="#">O nas</a>
                        </li>
                        <li>
                            <a href="#">Zespół</a>
                        </li>
                        <li>
                            <a href="#">Produkty</a>
                        </li>
                        <li>
                            <a href="#">Kontakt</a>
                        </li>
                    </ul>
                    <a
                        href="#"
                        className="close-menu"
                        onClick={handleCloseMenu}
                    >
                        Zamknij menu
                    </a>
                </nav>
            </header>
        </section>
    );
};
