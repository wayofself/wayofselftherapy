import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    return (
        <div
            className="min-h-screen py-5 px-4 sm:px-6 font-poppins bg-[#f9f5f0]"
            >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
                {/* Main Heading */}
                <div className="text-center my-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">
                        {t('services.title')}
                    </h1>
                    <div className="w-55 h-1 bg-black mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
                    {/* Individual Therapy */}
                    <div
                        className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
                        <div className="flex flex-col md:flex-col">
                            <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-gray-100">
                                <div className="flex items-center mb-5">
                                    <div className="bg-[#f5ebe0] p-3 rounded-lg mr-4 flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-[#7b491d]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800">{t('services.individual')}</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('services.individualDesc')}
                                </p>
                            </div>
                            {/*  */}
                            <div className="p-6 md:p-7">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">{t('services.howWeWork')}</h2>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex">
                                        <span className="text-[#7b491d] mr-2 min-w-[10px]">•</span>
                                        <div>
                                            <p>{t('services.availability')}</p>
                                            <p className='indent-8'>
                                                {t('services.weekdays')}
                                            </p>
                                            <p className='indent-8'>
                                                {t('services.weekends')}
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <span className="text-[#7b491d] mr-2 min-w-[10px]">•</span>
                                        <div>
                                            <p>{t('services.consultation')}</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <span className="text-[#7b491d] mr-2 min-w-[10px]">•</span>
                                        <div>
                                            <p>{t('services.sessionFee')}</p>
                                            <p className='indent-8'>{t('services.fee')}</p>
                                            <p className='indent-8'>{t('services.insuranceNote')}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#f5ebe0] px-7 py-4 border-t border-indigo-100">
                            <p className="font-medium text-[#7b491d]">{t('services.virtual')}</p>
                        </div>
                    </div>

                    {/* Group Therapy Card */}
                    <div
                        className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
                        <div className="p-7">
                            <div className="flex items-center mb-5">
                                <div className="bg-[#f5ebe0] p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7b491d]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">{t('services.group')}</h2>
                            </div>
                            <div className="mb-5">
                                <span
                                    className="inline-block bg-[#f5ebe0] text-[#7b491d] px-3 py-1 rounded-full text-sm font-semibold">
                                    {t('services.comingSoon')}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                {t('services.groupDesc')}
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#7b491d] mr-2">•</span>
                                    <span>{t('services.group1')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#7b491d] mr-2">•</span>
                                    <span>{t('services.group2')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#7b491d] mr-2">•</span>
                                    <span>{t('services.group3')}</span>
                                </li>
                            </ul>
                            {/*<button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">*/}
                            {/*    Join Waitlist*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;