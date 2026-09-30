import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import navItems from "./navData";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const closeMenu = () => setMenuOpen(false);

        window.addEventListener("resize", closeMenu);

        return () => {
            window.removeEventListener("resize", closeMenu);
        };
    }, []);

    return (
        <header className="header">

            <div className="container navbar">

                <h2 className="logo">
                    ReactPro
                </h2>

                <nav className={menuOpen ? "nav active" : "nav"}>

                    {navItems.map((item) => (

                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "link active" : "link"
                            }
                        >
                            {item.title}
                        </NavLink>

                    ))}

                </nav>

                <button
                    className={menuOpen ? "hamburger active" : "hamburger"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Navigation"
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </header>
    );
}