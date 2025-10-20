import { useState } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <div id="Navbar">
            <div className="container">
                {/* Burger - mobile */}
                <div className="burger_menu">
                    <button className="burger" onClick={() => setIsOpen(true)}>
                        ☰
                    </button>
                </div>

                {/* Logo */}
                <div className="logo_box">
                    <h1>XUDAYBERDIYEV ISLOM</h1>
                </div>

                {/* Desktop navigation */}
                <div className="desktop_nav">
                    <ul className="nav_links">
                        <a href="#AboutUs"><li>{t(`about`)}</li></a>
                        <a href="#Products"><li>{t(`products`)}</li></a>

                        {/* Dropdown - Marketplace */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <span className="dropdown_title">
                                Marketplace ▾
                            </span>
                            <ul className={`dropdown_menu ${dropdownOpen ? "show" : ""}`}>
                                <a href="#ozon"> <li>Ozon</li></a>
                                <a href="https://market.yandex.uz/card/sato--eto-starinnyy-strunno-smychkovyy-instrument-odin-iz-samykh-izyskannykh-i-redkikh-v-uzbekskoy-muzykalnoy-traditsii/4705609272?businessId=216456918&showOriginalKmEmptyOffer=1&ogV=-6" target="_blank" rel="noopener noreferrer"><li>Yandex Market</li></a>
                            </ul>
                        </li>

                        <a href="#ContactForm"><li>{t(`contact`)}</li></a>
                    </ul>

                    {/* Language selector */}
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

            {/* Mobile Slide Menu */}
            <div className={`navigation_menu ${isOpen ? "open" : ""}`}>
                <button className="close_btn" onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                <ul>
                    <a href="#AboutUs"><li>{t(`about`)}</li></a>
                    <a href="#Products"><li>{t(`products`)}</li></a>

                    {/* Mobile dropdown - oddiy linklar */}
                    <li className="mobile_dropdown">
                        <span>Marketplace</span>
                        <ul>
                            <li><a href="#ozon" target="_blank" rel="noopener noreferrer">Ozon</a></li>
                            <a href="https://market.yandex.uz/card/sato--eto-starinnyy-strunno-smychkovyy-instrument-odin-iz-samykh-izyskannykh-i-redkikh-v-uzbekskoy-muzykalnoy-traditsii/4705609272?businessId=216456918&showOriginalKmEmptyOffer=1&ogV=-6" target="_blank" rel="noopener noreferrer"><li>Yandex Market</li></a>
                        </ul>
                    </li>

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
