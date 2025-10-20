import "../../assets/AboutUs.css"
import {useTranslation} from "react-i18next";
const AboutUs = () => {
    const {t} = useTranslation();
    return(
        <div id="AboutUs">
            <div className="container">
                <div className="about_bg">
                    <p>{t(`about`)}</p>
                </div>
                <h3>{t(`quotes`)}</h3>
                <p>{t(`aboutUsRightP`)}</p>
                <div className="about_link">
                    <a href="#Products"><button>{t(`products`)}</button></a>
                    <a href="#ContactForm"><button>{t(`contact`)}</button></a>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;