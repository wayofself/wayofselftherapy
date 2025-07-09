import bgImg from '/bgImg.png';
import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

// init Contact
const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // init EmailJS config
            const serviceId = 'service_1zkyvxk';
            const templateId = 'template_x62dbva';
            const userId = 'M6fHp4DM_PJNS57pD';

            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_name: 'Recipient Name',
                    from_name: formData.name,
                    reply_to: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                userId
            );

            setSubmitStatus('success');
            setFormData({name: '', phone: '', email: '', message: ''});
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br px-4 sm:px-6 bg-[#fffaf3] font-poppins">
            <div className="max-w-6xl mx-auto pt-2">
                {/*split grid*/}
                <div className="grid grid-row-1 lg:grid-row-2 gap-1">
                    {/*contact message*/}
                    <div className="p-7 pt-20  text-white rounded-xl shadow-xl overflow-hidden"
                         style={{
                             backgroundImage: `url('${bgImg}')`,
                             backgroundSize: "cover",
                             backgroundPosition: "bottom",
                             backgroundAttachment: "fixed"
                         }}
                    >
                        <div className="mb-5">
                            <p className="text-3xl md:text-5xl font-bold leading-relaxed pb-6">
                                {t('contact.heroTitle', 'Start Your Therapy Journey Now')}
                            </p>
                            <p className="text-xl md:text-2xl">
                                {t('contact.heroDesc', "I offer a free 20-minute initial phone consultation to answer your questions and discuss how I might help. Let's connect and take the first step towards your well-being today.")}
                            </p>
                        </div>
                        <div className="justify-items-center">
                            <div className="flex text-center mb-5">
                                <a
                                    className="bg-[#7b491d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4d3219] transition-colors shadow-lg"
                                    href="https://wayofselftherapy.janeapp.com/#staff_member/1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('contact.freeConsultation', 'Free Consultation')}
                                </a>
                            </div>
                        </div>
                        <div className="space-y-6 pb-4">
                            <div className="flex items-start">
                                <div className="bg-white p-3 rounded-full mr-4">
                                    <a href="mailto:info@wayofselftherapy.com"
                                       className=" hover:text-[#905c2e] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7b491d]"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text-lg">{t('contact.email-title', 'Email')}</h3>
                                    <a href="mailto:info@wayofselftherapy.com"
                                       className=" hover:text-[#4d3219] transition-colors">
                                        info@wayofselftherapy.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <a href="tel:+1 (365) 990-7889"
                                   className="text-gray-600 hover:text-indigo-800 transition-colors">
                                    <div className="bg-white p-3 rounded-full mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7b491d]"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                </a>
                                <div>
                                    <h3 className="text-lg">{t('contact.phone-title', 'Phone')}</h3>
                                    <a href="tel:+1 (365) 990-7889"
                                       className=" hover:text-[#4d3219] transition-colors">
                                        +1 (365) 990-7889
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Form start here*/}
                    <div className="mt-15 p-4">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('contact.title', 'Send a Direct Message')}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('contact.name', 'Your Name (required)')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={t('contact.namePlaceholder', 'Enter your name')}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-invalid={submitStatus === 'error' && !formData.name ? 'true' : 'false'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('contact.phone', 'Phone (required)')}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    pattern="[0-9]{10}"
                                    placeholder={t('contact.phonePlaceholder', 'e.g, 1234567890')}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                    aria-required="true"
                                    aria-invalid={submitStatus === 'error' && !formData.phone ? 'true' : 'false'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('contact.email', 'Email (required)')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={t('contact.emailPlaceholder', 'email@email.com')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-invalid={submitStatus === 'error' && !formData.email ? 'true' : 'false'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('contact.message', 'Message (required)')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={t('contact.messagePlaceholder', 'Type your message here')}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-invalid={submitStatus === 'error' && !formData.message ? 'true' : 'false'}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            >
                                {isSubmitting ? t('contact.sending', 'Sending...') : t('contact.send', 'Send Message')}
                            </button>
                            <div aria-live="polite" className="sr-only" id="form-status-live">
                                {submitStatus === 'success' && t('contact.success', 'Message sent successfully! I will get back to you soon!')}
                                {submitStatus === 'error' && t('contact.error', 'Error sending message. You can contact me via email above.')}
                            </div>
                            {submitStatus === 'success' && (
                                <p className="mt-3 text-green-600 text-center">{t('contact.success', 'Message sent successfully! I will get back to you soon!')}</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="mt-3 text-red-600 text-center">
                                    {t('contact.error', 'Error sending message. You can contact me via email on the left.')}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;