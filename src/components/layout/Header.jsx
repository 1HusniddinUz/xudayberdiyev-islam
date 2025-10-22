import "../../assets/Header.css"
import Navbar from "../ui/Navbar.jsx";
import HeroSection from "../sections/Herosection.jsx";
const Header = () => {
    return (
        <header>
                <Navbar />
                <HeroSection />
        </header>
    )
}
export default Header;