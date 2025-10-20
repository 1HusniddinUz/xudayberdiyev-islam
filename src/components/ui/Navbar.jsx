import { useState } from "react";
import "../../assets/Navbar.css";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    return (
        <div id="Navbar">
            <div className="container">
                {/* Burger tugma - faqat mobile/tablet */}
                <div className="burger_menu">
                    <button className="burger" onClick={() => setIsOpen(true)}>
                        ☰
                    </button>
                </div>

                {/* Logo */}
                <div className="logo_box">
                    {/*<img src="" alt="Logo"/>*/}
                    <h1>XUDAYBERDIYEV ISLOM</h1>
                </div>

                {/* Desktop navigation + language */}
                <div className="desktop_nav">
                    <ul className="nav_links">
                        <a href="#Navbar"><li>{t(`home`)}</li></a>
                        <a href="#AboutUs"><li>{t(`about`)}</li></a>
                        <a href="#Products"><li>{t(`products`)}</li></a>
                        <a href="#ContactForm"><li>{t(`contact`)}</li></a>
                    </ul>

                    <div className="lang_provider">
                        <select
                            id="select"
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            defaultValue="ru"
                        >
                            <option value="ru">🇷🇺 Русский</option>
                            <option value="en">🇬🇧 English</option>
                            <option value="uz">🇺🇿 O'zbek</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Slide menyu - mobile & tablet */}
            <div className={`navigation_menu ${isOpen ? "open" : ""}`}>
                <button className="close_btn" onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                <ul>
                    <a href="#Navbar"><li>{t(`home`)}</li></a>
                    <a href="#AboutUs"><li>{t(`about`)}</li></a>
                    <a href="#Products"><li>{t(`products`)}</li></a>
                    <a href="#ContactForm"><li>{t(`contact`)}</li></a>
                </ul>

                <div className="lang_provider_mobile">
                    <select>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
