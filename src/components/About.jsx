import { useTranslation } from 'react-i18next';
import bannerImg from '/bridge.jpg';
import profile from '../assets/protfolio3.jpg';
import profileImg from '../assets/protfolio2.jpg';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col min-h-screen font-poppins bg-gradient-to-br from-[#f8f7ee] via-[#e0d7c6] to-[#b7e4c7]">

            <div
                className=" relative py-60  md:py-60 px-4 sm:px-6 lg:px-8 h-16 md:h-90"
                style={{
                    backgroundImage: "url('" + bannerImg + "')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom 40% left 15%",
                    backgroundAttachment: "scroll",
                    opacity: 0.9,
                }}
            >
            </div>

            {/* About Section */}
            <div className="bg-gray-100 py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-10">
                        <div className="md:w-1/3 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-300">
                                {t('about.aboutSiya', 'About Siya')}
                            </h2>
                            <img
                                className="rounded-xl shadow-lg w-full max-w-xs border-4 border-white"
                                src={profileImg}
                                alt={t('about.profileAlt', 'Siya, Registered Psychotherapist')}
                                loading="lazy"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <div className="space-y-8">
                                {/* Education */}
                                <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-[#8d6e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
                                    {t('about.education', 'Education & Credentials')}
                                </h3>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>{t('about.educationText', "I hold a Master of Science in Psychotherapy from McMaster University and am a Registered Psychotherapist (Qualifying) with the CRPO. With over six years of experience across diverse settings—from crisis helplines to community programs and family health teams—I've learned that real healing emerges when therapy is collaborative, culturally responsive, and grounded in real-world challenges.")}</p>
                                </div>
                                {/* Experience */}
                                <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-[#8d6e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    {t('about.experience', 'Experience')}
                                </h3>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>{t('about.experienceText', "My 3,000+ hours of counselling experience include supporting adolescents and adults through immediate relief (single-session interventions), focused growth (short-term therapy for specific goals), and deep healing (longer-term work for complex trauma). This work unfolded within organizations like the Canadian Mental Health Association, Hamilton Family Health Team, and Distress Centres of Greater Toronto.")}</p>
                                </div>
                                {/* How I Work */}
                                <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-[#8d6e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
                                    {t('about.howIWork', 'How I Work')}
                                </h3>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>{t('about.howIWorkText', "I specialize in helping you meet wounded, protective, or disliked aspects of yourself with curiosity—especially self-critical parts that whisper 'you're too much.' Through Internal Family Systems (IFS), we'll gently reconnect you with your calm, compassionate core Self. When we meet our inner world without judgment, we transform suffering at its source—cultivating not just balance, but enduring self-trust.")}</p>
                                </div>
                                {/* Beyond Therapy */}
                                <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-[#8d6e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-2.21 0-4 1.79-4 4 0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2 0-2.21-1.79-4-4-4zm0 0v2m0 12v-4m8-4h-2m-12 0H4" /></svg>
                                    {t('about.beyondTherapy', 'Beyond Therapy')}
                                </h3>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>{t('about.beyondTherapyText', "Beyond therapy, life with my three cats—especially my serene white companion—teaches daily lessons in boundaries, rest, and radical self-honoring. Their instinctive wisdom mirrors what I hope for you: that prioritizing your needs becomes second nature, not guilt—a foundation for authentic growth.")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 ">
                        <div className="relative flex flex-col md:flex-row items-center rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/70 to-[#f8f7ee]/80 backdrop-blur-lg">
                            {/* Background Image */}
                            <div
                                className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[32rem] bg-center bg-cover"
                                style={{
                                    backgroundImage: "url('" + profile + "')",
                                    backgroundPosition: "bottom",
                                    backgroundSize: "cover"
                                }}
                                aria-label={t('about.portraitAlt', 'Portrait of Siya')}
                                role="img"></div>
                            

                            {/*Quote Card */}
                            <div className="absolute md:static top-6 left-1/2 md:left-0 md:w-1/2 w-11/12 transform -translate-x-1/2 md:translate-x-0  p-6 flex items-center justify-center">
                                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
                                    {t('about.pullQuote', "The world is not perfect, and we all hold fragments within us—parts shaped by wounds, by sorrow, by moments that left us fractured. Along the 'Way of Self,' I walk beside you as a guiding light, helping these exiled parts find safety, compassion, and finally, home.")}
                                </blockquote>
                            </div>
                            {/* book corner effect */}
                            <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none select-none">
                                <svg viewBox="0 0 40 80" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="foldGradient" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#f8f7ee" />
                                            <stop offset="100%" stopColor="#e0d7c6" />
                                        </linearGradient>
                                    </defs>
                                    <polygon points="80,0 80,80 0,80" fill="url(#foldGradient)" />
                                    <polyline points="80,0 80,80 0,80" fill="none" stroke="#b7a77c" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;