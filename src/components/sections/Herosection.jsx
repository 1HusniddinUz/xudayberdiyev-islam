import "../../assets/HeroSection.css";
import { useTranslation } from "react-i18next";
import hero_bg_image from "../../assets/media/logo.png";
import hero_bg_video from "../../assets/media/videos/hero_bg.mp4";

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="HeroSection" aria-label="Hero">
            {/* Background video */}
            <video
                className="hero_video"
                src={hero_bg_video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
            />

            {/* Dark overlay */}
            <div className="overlay" aria-hidden="true"></div>

            {/* Content layer */}
            <div className="hero_content">
                <a href="/" className="hero_logo" aria-label="Home">
                    <img
                        src={hero_bg_image}
                        alt={t("brandName", "Company logo")}
                        loading="eager"
                        decoding="async"
                    />
                </a>

                {/* Agar matn bo‘lsa, shu yerga qo‘yasiz
        <h1>{t("heroTitle")}</h1>
        <p>{t("heroSubtitle")}</p> */}
            </div>
        </section>
    );
};

export default HeroSection;
