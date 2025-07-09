import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer role="contentinfo" className="flex w-full bg-gray-800 text-white py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-7xl mx-auto">
                <div className="text-gray-300">© 2025 Way of Self Therapy. All rights reserved.</div>
            </div>

        </footer>
    )
}
export default Footer;