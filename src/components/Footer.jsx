import { useTranslation } from 'react-i18next';
import React from 'react';

const Footer = React.forwardRef((props, ref) => {
    const { t, i18n } = useTranslation();
    return (
        <footer ref={ref} role="contentinfo" className="flex flex-col w-full bg-gray-800 text-white py-10 px-4 items-center">
            <div className="gap-8 max-w-7xl mx-auto">
                <div className="text-gray-300">© 2025 Way of Self Therapy. </div>
                <div className="text-gray-300 text-center">All rights reserved.</div>
            </div>
            <div className="text-xs text-gray-400 mt-4 text-center">
                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a> apply.
            </div>
        </footer>
    )
});

export default Footer;