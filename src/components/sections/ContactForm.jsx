import React from "react";
import "../../assets/ContactForm.css";
import Logo from "../../assets/media/logo2.png"
import {useTranslation} from "react-i18next";
const ContactForm = () => {
    const {t} = useTranslation();
    return (
        <div id="ContactForm">
            <div className="container">
                <div className="contactText">
                    <div className="contactInfo">
                        <h3>{t(`contact`)}</h3>
                        <p>
                            {t(`generalManager`)} <span>XUDAYBERDIYEV ISLOM</span>
                        </p>
                        <p>
                            {t(`phone`)} <a href="tel:+998913118177" rel="noopener noreferrer"><span>{`+998 (91) 311-81-77`}</span></a>
                        </p>
                    </div>
                    <div className="contactSocialLink">
                        <div className="link_box">
                            <a
                                href="https://t.me/milliy_cholgular"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-telegram" target="_blank"
                                   rel="noopener noreferrer"></i>
                            </a>
                            <a href="https://t.me/milliy_cholgular" target="_blank"
                               rel="noopener noreferrer">
                                <button>TELEGRAM</button>
                            </a>
                        </div>
                        <div className="link_box">
                            <a
                                href="https://www.instagram.com/islom_khudoyberdiev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.instagram.com/islom_khudoyberdiev"
                               target="_blank"
                               rel="noopener noreferrer">
                                <button>INSTAGRAM</button>
                            </a>
                        </div>



                    </div>
                </div>
                <div className="contactLogo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="contactLocation">
                    <h3>{t(`location`)}</h3>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d921.8796611510138!2d64.66445010612341!3d40.08978736867633!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA1JzIxLjgiTiA2NMKwMzknNTIuNyJF!5e0!3m2!1sru!2s!4v1761106117812!5m2!1sru!2s"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="footerToTop"><a href="#Navbar"><i class="fa-solid fa-arrow-up"></i></a>
            </div>

        </div>
    );
};

export default ContactForm;