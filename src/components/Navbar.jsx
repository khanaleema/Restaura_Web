import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";  // Added import for icons
import logo from "../assets/logo.png";
import { LINKS } from "../constants";

const Navbar = () => {
    // Corrected state variable name
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Smooth scroll functionality
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);  // Close mobile menu after scroll
    };

    return (
        <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
                <img src={logo} alt="logo" width={80} height={22} />
                <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link, index) => (
                        // Corrected onClick and typo in targetId
                        <a key={index} href={`#${link.targetId}`} className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`} onClick={(e) => handleScroll(e, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu}>
                        {/* Display appropriate icon */}
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="w-full backdrop-blur-lg lg:hidden">
                    {LINKS.map((link, index) => (
                        <a key={index} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter" onClick={(e) => handleScroll(e, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
