import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import i18n from './i18n.js';
import { BrowserRouter, HashRouter } from 'react-router-dom';

function MainLayout() {
    useEffect(() => {
        // Set html lang attribute dynamically
        document.documentElement.lang = i18n.language || 'en';
        const onLangChanged = (lng) => {
            document.documentElement.lang = lng;
        };
        i18n.on('languageChanged', onLangChanged);
        return () => i18n.off('languageChanged', onLangChanged);
    }, []);

    return (
        <>
            {/* Skip to Content link */}
            <a href="#main-content" className="skip-link focusable absolute left-2 top-2 bg-white text-black px-4 py-2 z-50 rounded shadow outline-none focus:ring-2 ring-blue-500" style={{ position: 'absolute', left: '-999px' }} onFocus={e => e.target.style.left = '2px'} onBlur={e => e.target.style.left = '-999px'}>
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" role="main" tabIndex={-1}>
                <App />
            </main>
            <Footer />
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={"/"}>
            <MainLayout />
        </BrowserRouter>
    </StrictMode>,
)
