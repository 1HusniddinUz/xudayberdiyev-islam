import "../../assets/Header.css"
import Navbar from "../ui/Navbar.jsx";
import HeroSection from "../sections/Herosection.jsx";
const Header = () => {
    return (
        <header>
            <div className="Header_overlay">
                <Navbar />
                <HeroSection />
            </div>
        </header>
    )
}
export default Header;