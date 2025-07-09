import React from "react";
import { useTranslation } from 'react-i18next';
import bgMain from '/bgMain.png';
import bgStatic from '/bg-static.jpg';
import videoMain from '/PLAIN_Minimalist-Beautiful-Life-Quotes-Video.mp4';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col min-h-screen" style={{
            backgroundImage: `url('${bgMain}')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundAttachment: "fixed",
        }}>
            {/* Body Section */}
            <div className="relative h-[70vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster={bgStatic}
                    >

                        <source
                            src={videoMain}
                            type="video/mp4"
                        />

                        {t('home.videoNotSupported', 'Your browser does not support the video tag.')}
                    </video>
                    {/* text on video */}
                    <div className="absolute inset-0">
                        <div className="flex text-xl items-center justify-center font-poppins">
                            <div className="text-white text-xl pt-[25%] tracking-[3px] md:text-4xl md:tracking-[4px] md:pt-55 lg:pt-55 lg:text-5xl px-4 md:px-8 text-center">
                                <div className="">{t('home.welcomeMessage1', 'WHERE THE HEART ASPIRES, ')}</div>
                                <div className="pt-5 pb-45 md:pb-30 lg:pb-60">{t('home.welcomeMessage2', 'THE SELF LEADS.')}</div>
                                <div className="text-sm  md:text-xl">{t('home.welcomeMessage3', 'WAY OF SELF THERAPY')}</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className="relative md:hidden z-10 pt-70 md:pt-80 flex flex-col justify-center items-center text-center px-4">
                    <div className="block bg-amber-600">
                        <a
                            className="md:mt-4 bg-gray-600 text-white px-6 py-3  rounded-lg font-medium hover:bg-[#8d6e63] transition-colors shadow-lg"
                            href="https://wayofselftherapy.janeapp.com/#staff_member/1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('home.freeConsultation', 'Free Consultation')}
                        </a>
                    </div>

                </div>
            </div>

            {/* Content Section */}
            <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto ">
                <div className="space-y-12 text-gray-700 font-poppins">

                    <div className="text-center mb-12 relative flex flex-col items-center justify-center">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                            <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[150px] border-t-[#6324209d] border-r-[100px] border-r-transparent opacity-20"></div>
                        </div>
                        <h2 className="text-3xl font-semibold text-[#404a52] mb-4 relative z-10">
                            {t('home.welcome', 'Compassionate Therapy for Your Inner Journey')}
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 text-[#5d4037]">
                        <div className="flex-1">
                            <div className="bg-[#f9f5f0] p-6 rounded-4xl mb-2 mt-10">
                                <div className="text-lg leading-relaxed mb-2">
                                    {t('home.intro1', "At every stage of life, we face challenges that can leave us feeling disconnected from ourselves. You might feel like you've lost confidence in your ability to cope, or you're struggling to find meaning in what once felt certain.")}
                                </div>
                            </div>

                            <div className="bg-[#efeae4] p-6 rounded-4xl ">
                                <div className="text-lg leading-relaxed">
                                    {t('home.intro2', 'In our sessions, I create a safe space where your story is honored without reservation. You hold the deepest wisdom about your life; my role is to walk beside you with clinical insight and therapeutic tools.')}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 pt-15">
                            <div className="relative pl-6 text-white">
                                <div className="text-lg leading-relaxed mb-6">
                                    {t('home.intro3', 'As a therapist, my priority is to offer compassionate, genuine care—especially when life feels heavy. My approach is eclectic, but I primarily use Internal Family Systems (IFS) as my guiding framework.')}
                                </div>
                                <div className="text-lg leading-relaxed">
                                    {t('home.intro4', 'Deep healing begins when we approach every part of ourselves—the wounded, the angry, the lonely, even the parts we dislike—with curiosity rather than judgment.')}
                                </div>
                            </div>

                            <div className="mt-15 text-center">
                                <a
                                    href="/About"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white border-2 border-gray-700 text-gray-700 px-6 py-2 rounded-2xl font-medium hover:bg-[#efeae4] transition-colors"
                                >
                                    {t('home.learnMore', 'Learn More About My Approach')}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-gray-700 text-white p-8 rounded-xl shadow-lg">
                        <blockquote className="text-xl italic leading-relaxed text-center">
                            {t('home.quote', "Healing isn't about 'fixing' yourself—it's about awakening the resilience and wholeness already within you. When you're ready to begin, I'm here.")}
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;