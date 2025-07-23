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
            backgroundAttachment: "scroll",
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
                        <source src={videoMain} type="video/mp4" />
                        {t('home.videoNotSupported', 'Your browser does not support the video tag.')}
                    </video>

                    {/* Text on video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-poppins text-center">
                        <div className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] md:tracking-[0.25em] px-4 w-full">
                            <div className="mb-2 sm:mb-3 md:mb-4">
                                {t('home.welcomeMessage1', 'WHERE THE HEART ASPIRES,')}
                            </div>
                            <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                                {t('home.welcomeMessage2', 'THE SELF LEADS.')}
                            </div>

                        </div>

                        <div className="md:hidden m-10 sm:mb-4">
                            <a
                                className="bg-gray-600 text-white px-6 py-3  rounded-lg font-medium hover:bg-[#8d6e63] transition-colors shadow-lg"
                                href="https://wayofselftherapy.janeapp.com/#staff_member/1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('home.freeConsultation', 'Free Consultation')}
                            </a>
                        </div>

                        <div className="text-white text-sm sm:text-base md:text-xl lg:text-2xl tracking-[0.1em]">
                            {t('home.welcomeMessage3', 'WAY OF SELF THERAPY')}
                        </div>

                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="pt-0 md:pt-20 px-6 md:px-12 max-w-4xl mx-auto ">
                <div className="space-y-4 md:space-y-8  text-gray-700 font-poppins md:mt-0 mt-15">

                    <div className="py-3 md:py-0 text-center relative flex flex-col items-center justify-center">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                            <div className="w-0 h-0 border-l-[100px] border-l-transparent border-t-[150px] border-t-[#6324209d] border-r-[100px] border-r-transparent opacity-20"></div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#404a52] relative z-10">
                            {t('home.welcome', 'Compassionate Therapy for Your Inner Journey')}
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:mt-20 text-[#5d4037] mt-15">
                        <div className="flex-1">
                            <div className="bg-[#f9f5f0] p-6 rounded-4xl md:mb-4 mb-5 ">
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

                        <div className="flex-1 md:mt-5">
                            <div className="relative pl-6 text-white">
                                <div className="text-lg leading-relaxed md:mb-6 mb-3">
                                    {t('home.intro3', 'As a therapist, my priority is to offer compassionate, genuine care—especially when life feels heavy. My approach is eclectic, but I primarily use Internal Family Systems (IFS) as my guiding framework.')}
                                </div>
                                <div className="text-lg leading-relaxed">
                                    {t('home.intro4', 'Deep healing begins when we approach every part of ourselves—the wounded, the angry, the lonely, even the parts we dislike—with curiosity rather than judgment.')}
                                </div>
                            </div>

                            <div className="mt-6 md:mt-8 text-center">
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

                    <div className="md:mb-8 my-8 bg-gray-700 text-white p-8 rounded-xl shadow-lg">
                        <blockquote className="text-2sm md:text-xl md:italic leading-relaxed text-center">
                            {t('home.quote', "Healing isn't about 'fixing' yourself—it's about awakening the resilience and wholeness already within you. When you're ready to begin, I'm here.")}
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;