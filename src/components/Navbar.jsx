import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '/logo2.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    // Set the initial path to root
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    // Navigation items
    const navItems = [
        { name: t('navbar.home'), href: '/' },
        { name: t('navbar.about'), href: '/about' },
        { name: t('navbar.services'), href: '/services' },
        { name: t('navbar.contact'), href: '/contact' },
    ];

    return (
        <nav role="navigation" aria-label="Main navigation" className={`sticky top-0 z-50 transition-all items-center md:flex duration-300 ${scrolled ? 'bg-[#f5ebe0] shadow-md pb-2' : 'bg-white backdrop-blur-sm pb-3'
            }`} >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
                {/* Language Toggle Button*/}
                <button
                    className="absolute right-5 top-4 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors z-50"
                    aria-label={i18n.language === 'en' ? 'Switch to Chinese' : '切换到英文'}
                    onClick={() => i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')}
                >
                    {i18n.language === 'zh' ? 'EN' : '中文'}
                </button>

                {/* Logo */}
                <div className="flex justify-center flex-shrink-0">
                    <a className=" flex flex-col items-center justify-center decoration-0" href="/">
                        <img
                            src={logo}
                            alt="Way of Self Therapy logo"
                            className="w-32 md:w-40"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden pl-20 md:flex md:items-center md:space-x-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`px-4 py-2 text-lg rounded-lg font-medium transition-colors ${currentPath === item.href
                                ? 'text-[#5d4037] bg-gray-200'
                                : 'text-gray-800 hover:text-black hover:bg-gray-200'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        className=" ml-4 flex bg-gray-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-[#8d6e63] transition-colors shadow-md"
                        href="https://wayofselftherapy.janeapp.com/#staff_member/1" target="_blank" rel="noopener noreferrer"
                    >
                        {t('navbar.getStarted', 'Get Started')}
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-3 rounded-lg font-medium text-lg ${currentPath === item.href
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        {/* Free Consultation Button */}
                        <a
                            className="block mt-2 bg-gray-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-[#8d6e63] transition-colors shadow-md text-center"
                            href="https://wayofselftherapy.janeapp.com/#staff_member/1" target="_blank" rel="noopener noreferrer"
                        >
                            {t('navbar.getStarted', 'Get Started')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;