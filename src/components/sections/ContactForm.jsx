import React from "react";
import "../../assets/ContactForm.css";
import Logo from "../../assets/media/logo.png"
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
                        <p>
                            {t(`email`)}
                            <span>
                <a
                    href="https://"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                 EXAMPLE@gmail.com
                </a>
              </span>
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
                        <div className="link_box">
                            <a href="https://market.yandex.uz/card/sato--eto-starinnyy-strunno-smychkovyy-instrument-odin-iz-samykh-izyskannykh-i-redkikh-v-uzbekskoy-muzykalnoy-traditsii/4705609272?businessId=216456918&showOriginalKmEmptyOffer=1&ogV=-6" target="_blank"
                               rel="noopener noreferrer">
                                <i className="fa-brands fa-yandex"></i>
                                <button>YANDEX MARKET</button>
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
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d381.5469456400533!2d64.66392864174053!3d40.08933873105999!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA1JzIyLjAiTiA2NMKwMzknNTAuNiJF!5e0!3m2!1sru!2s!4v1760935359429!5m2!1sru!2s"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="footerToTop"><a href="#Navbar"><i class="fa-solid fa-arrow-up"></i></a>
            </div>

        </div>
    );
};

export default ContactForm;