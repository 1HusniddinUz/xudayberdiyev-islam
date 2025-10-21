import "../../assets/AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section id="AboutUs" aria-labelledby="aboutus-heading">
            <div className="about_overlay" aria-hidden="true"></div>
            <div className="container">
                {/* Watermark faqat bezak uchun */}
                <div className="about_watermark" aria-hidden="true">
                    <p>{t("about")}</p>
                </div>

                {/* Asosiy kontent */}
                <div className="about_content">
                    <h3 id="aboutus-heading">{t("quotes")}</h3>
                    <p>{t("aboutUsRightP")}</p>

                    <div className="about_link">
                        <a href="#Products"><button type="button">{t("products")}</button></a>
                        <a href="#ContactForm"><button type="button">{t("contact")}</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
