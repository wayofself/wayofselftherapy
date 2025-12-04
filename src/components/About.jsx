import { useTranslation } from 'react-i18next';
import profile from '../assets/portfolio3.jpg';
import profileImg from '../assets/portfolio2.jpg';
import xiaohongshuImg from '../assets/xiaohongshu.png';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col min-h-screen font-poppins bg-gradient-to-br from-[#f8f7ee] via-[#e0d7c6] to-[#b7e4c7]">
            {/* About Section */}
            <div className="bg-gray-100 py-8 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
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
                            <div className="mt-3 flex justify-center items-center">

                                <svg width="146" height="46" viewBox="0 0 146 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <a href='https://www.psychologytoday.com/profile/1520439' target='_blank'>
                                        <g filter="url(#filter0_d_8979_33732)">
                                            <rect x="2" y="3.28137" width="142" height="39.4374" rx="19.7187" fill="white" shape-rendering="crispEdges" />
                                            <path d="M34.7852 20.9254C34.8909 21.601 34.9448 22.2954 34.9448 23.0001C34.9448 30.441 28.9133 36.4725 21.4724 36.4725C14.0315 36.4725 8 30.441 8 23.0001C8 15.5592 14.0315 9.52771 21.4724 9.52771C23.715 9.52771 25.8292 10.0749 27.6904 11.0449" stroke="#DDDDDD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M38.0004 13.7446L36.8133 11.4231C26.5744 14.3249 21.3808 20.709 21.3808 20.709L16.6323 17.2268L14.2581 19.5483L21.3808 28.8341C26.8712 18.8228 38.0004 13.7446 38.0004 13.7446Z" fill="#FF5754" />
                                            <path d="M92.69 14.6119V12.3982L90.6201 9.28137H91.691L93.1615 11.567L94.616 9.28137H95.6869L93.625 12.3982V14.6119H92.69Z" fill="#8A8D96" />
                                            <path d="M85.6685 14.6119V9.28137H88.2898C89.2648 9.28137 89.8082 9.88875 89.8082 10.64C89.8082 11.3113 89.3767 11.7588 88.8812 11.8627C89.4486 11.9506 89.9121 12.5181 89.9121 13.1734C89.9121 13.9965 89.3607 14.6119 88.3617 14.6119H85.6685ZM86.6035 11.4871H88.098C88.5775 11.4871 88.8492 11.1994 88.8492 10.7998C88.8492 10.4002 88.5775 10.1045 88.098 10.1045H86.6035V11.4871ZM86.6035 13.7887H88.1379C88.6494 13.7887 88.9531 13.509 88.9531 13.0455C88.9531 12.6459 88.6734 12.3103 88.1379 12.3103H86.6035V13.7887Z" fill="#8A8D96" />
                                            <path d="M76.8003 14.6119V9.28137H78.7823C80.4446 9.28137 81.5714 10.3842 81.5714 11.9506C81.5714 13.517 80.4446 14.6119 78.7823 14.6119H76.8003ZM77.7353 13.7887H78.7823C79.9411 13.7887 80.6124 12.9576 80.6124 11.9506C80.6124 10.9197 79.973 10.1045 78.7823 10.1045H77.7353V13.7887Z" fill="#8A8D96" />
                                            <path d="M71.6169 14.6119V9.28137H75.2692V10.1045H72.552V11.4871H75.2133V12.3103H72.552V13.7887H75.2692V14.6119H71.6169Z" fill="#8A8D96" />
                                            <path d="M68.978 14.6119V9.28137H69.9131V14.6119H68.978Z" fill="#8A8D96" />
                                            <path d="M63.9194 14.6119V9.28137H67.5717V10.1045H64.8545V11.4871H67.5157V12.3103H64.8545V14.6119H63.9194Z" fill="#8A8D96" />
                                            <path d="M61.2805 14.6119V9.28137H62.2156V14.6119H61.2805Z" fill="#8A8D96" />
                                            <path d="M58.7363 14.6119L57.5535 12.6219H56.6264V14.6119H55.6914V9.28137H58.033C59.0879 9.28137 59.7752 9.96867 59.7752 10.9517C59.7752 11.9027 59.1519 12.4142 58.5125 12.5181L59.8152 14.6119H58.7363ZM58.8162 10.9517C58.8162 10.4402 58.4326 10.1045 57.9051 10.1045H56.6264V11.7988H57.9051C58.4326 11.7988 58.8162 11.4631 58.8162 10.9517Z" fill="#8A8D96" />
                                            <path d="M50.5081 14.6119V9.28137H54.1603V10.1045H51.4431V11.4871H54.1044V12.3103H51.4431V13.7887H54.1603V14.6119H50.5081Z" fill="#8A8D96" />
                                            <path d="M46.0943 14.6119L44.0005 9.28137H45.0634L46.6777 13.5969L48.2921 9.28137H49.355L47.2611 14.6119H46.0943Z" fill="#8A8D96" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7438 22.9694C73.7438 22.0141 72.9421 21.2369 71.9568 21.2369H70.5674V18.2827H68.5818V33.5229H70.5674V31.2881C70.569 31.2945 70.5712 31.2988 70.5723 31.3046V23.6742C70.5723 23.0414 70.8113 22.9925 71.1847 22.9925C71.5582 22.9925 71.7977 23.0414 71.7977 23.6742V33.5229H73.7438V22.9694Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.7409 31.3141C86.7409 31.947 86.515 31.9959 86.163 31.9959C85.8114 31.9959 85.5861 31.947 85.5861 31.3141V23.9283C85.5861 23.2955 85.8114 23.2468 86.163 23.2468C86.515 23.2468 86.7409 23.2955 86.7409 23.9283V31.3141ZM86.1575 21.2328C84.7338 21.2328 83.5762 22.3553 83.5762 23.7351V31.267C83.5762 32.6468 84.7338 33.7691 86.1575 33.7691C87.5805 33.7691 88.7382 32.6468 88.7382 31.267V23.7351C88.7382 22.3553 87.5805 21.2328 86.1575 21.2328Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M131.802 21.2328H130.036V31.2687C130.036 31.3791 130.029 31.4702 130.014 31.548V31.6221H129.998C129.917 31.9225 129.71 31.9523 129.423 31.9523C129.137 31.9523 128.93 31.9225 128.849 31.6221H128.824V31.4926C128.815 31.4273 128.811 31.3538 128.811 31.2687V21.2328H126.838V31.8153C126.838 32.7729 127.639 33.5522 128.625 33.5522H130.014V36.473H132V21.2328H131.802Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M117.817 31.1618C117.817 31.6156 117.7 31.7687 117.505 31.8192C117.411 31.8662 117.293 31.8745 117.155 31.8745C116.804 31.8745 116.578 31.8256 116.578 31.1927V23.8074C116.578 23.3538 116.694 23.2008 116.89 23.1504C116.983 23.103 117.101 23.0951 117.239 23.0951C117.591 23.0951 117.817 23.1437 117.817 23.7765V31.1618ZM119.511 18.2827H117.724V21.2369H116.334C115.349 21.2369 114.548 22.0141 114.548 22.9694V31.7907C114.548 32.7457 115.349 33.5229 116.334 33.5229H119.71V18.2827H119.511Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.599 31.3141C111.599 31.947 111.36 31.9959 110.986 31.9959C110.614 31.9959 110.374 31.947 110.374 31.3141V23.9283C110.374 23.2955 110.613 23.2468 110.986 23.2468C111.36 23.2468 111.599 23.2955 111.599 23.9283V31.3141ZM110.984 21.2328C109.561 21.2328 108.403 22.3553 108.403 23.7351V31.267C108.403 32.6468 109.561 33.7691 110.984 33.7691C112.407 33.7691 113.565 32.6468 113.565 31.267V23.7351C113.565 22.3553 112.407 21.2328 110.984 21.2328Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.3082 18.5598C81.9666 18.2469 81.5414 18.0697 81.0787 18.0472L80.8723 18.037V33.523H82.8388V19.7916C82.8388 19.3174 82.6455 18.8683 82.3082 18.5598Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M108.941 18.2827H103.978V20.2076H105.566V33.5229H107.552V20.2076H109.14V18.2827H108.941Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8913 31.3141C77.8913 31.947 77.6653 31.9959 77.3138 31.9959C76.9617 31.9959 76.7365 31.947 76.7365 31.3141V23.9283C76.7365 23.2955 76.9617 23.2468 77.3138 23.2468C77.6653 23.2468 77.8913 23.2955 77.8913 23.9283V31.3141ZM77.3078 21.2328C75.8849 21.2328 74.7268 22.3553 74.7268 23.7351V31.267C74.7268 32.6468 75.8849 33.7691 77.3078 33.7691C78.7307 33.7691 79.8888 32.6468 79.8888 31.267V23.7351C79.8888 22.3553 78.7307 21.2328 77.3078 21.2328Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.2844 24.7392V23.6491C55.2844 22.2656 54.0977 21.1401 52.6388 21.1401C51.1794 21.1401 49.9927 22.2656 49.9927 23.6491V26.6532C49.9927 27.6109 50.8146 28.3899 51.8248 28.3899H53.2493V29.4767C53.2515 29.5183 53.2538 29.562 53.2538 29.6102V31.4522C53.2538 32.087 53.0126 32.136 52.6377 32.136C52.2627 32.136 52.0221 32.087 52.0221 31.4522V30.111H49.9927V31.201C49.9927 32.5845 51.1794 33.7098 52.6388 33.7098C54.0977 33.7098 55.2844 32.5845 55.2844 31.201V28.1966C55.2844 27.2391 54.463 26.4601 53.4528 26.4601H52.0283V23.8908H52.0373V23.8634C52.0373 23.2291 52.2734 23.18 52.6411 23.18C53.0087 23.18 53.2448 23.2291 53.2448 23.8634V23.8908H53.2493V24.7392H55.2844Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.2571 24.4572H47.2516V24.4643C47.2516 25.0988 47.0154 25.1479 46.6478 25.1479C46.2801 25.1479 46.044 25.0988 46.044 24.4643V24.4572H46.0366V20.9285H46.044V20.8837C46.044 20.2491 46.2796 20.2003 46.6478 20.2003C47.0154 20.2003 47.2516 20.2491 47.2516 20.8837V20.9285H47.2571V24.4572ZM47.4606 18.3031H44.0005V33.5847H46.0366V26.9089H47.4606C48.4708 26.9089 49.2928 26.1298 49.2928 25.1719V20.0399C49.2928 19.0823 48.4708 18.3031 47.4606 18.3031Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.8977 30.8751H92.889V31.2936C92.889 31.9281 92.6493 31.9768 92.2759 31.9768C91.9024 31.9768 91.6634 31.9281 91.6634 31.2936V23.8902C91.6634 23.2558 91.9024 23.207 92.2759 23.207C92.6493 23.207 92.889 23.2558 92.889 23.8902V24.3304H92.8977V30.8751ZM92.3022 21.2328C90.8792 21.2328 89.7214 22.3579 89.7214 23.741V31.9373C89.7214 32.8947 90.5227 33.6737 91.5081 33.6737H92.8977V34.789H90.0647V36.7188H93.0969C94.0823 36.7188 94.8834 35.9398 94.8834 34.9822V23.741C94.8834 22.3579 93.7258 21.2328 92.3022 21.2328Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0156 31.9228C64.6466 31.9228 64.4096 31.8739 64.4096 31.241V23.8555C64.4096 23.2226 64.6466 23.1737 65.0156 23.1737C65.3852 23.1737 65.6222 23.2226 65.6222 23.8555V24.8223H67.5985V23.7351C67.5985 22.3553 66.4409 21.2328 65.0173 21.2328C63.5941 21.2328 62.4365 22.3553 62.4365 23.7351V31.267C62.4365 32.6468 63.5941 33.7691 65.0173 33.7691C66.4409 33.7691 67.5985 32.6468 67.5985 31.267V30.1799H65.6222V31.241C65.6222 31.8739 65.3852 31.9228 65.0156 31.9228Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M123.922 31.133C123.922 31.3031 123.903 31.43 123.869 31.5261V31.5977H123.838C123.734 31.7926 123.54 31.8152 123.285 31.8152C123.03 31.8152 122.835 31.7926 122.732 31.5977H122.679V31.4496C122.659 31.3648 122.648 31.2613 122.648 31.133V26.6939C122.648 26.5655 122.659 26.4621 122.679 26.3773V26.3012H122.7C122.792 26.0391 123.001 26.0119 123.285 26.0119C123.672 26.0119 123.922 26.0606 123.922 26.6939V31.133ZM124.068 21.2328H121.036V23.1584H123.869V24.3756H122.48C121.494 24.3756 120.693 25.1531 120.693 26.1085V31.7904C120.693 32.7458 121.494 33.5233 122.48 33.5233H125.855V22.9659C125.855 22.0102 125.053 21.2328 124.068 21.2328Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0079 21.2328H59.2428V31.2687C59.2428 31.3791 59.2351 31.4702 59.2214 31.548V31.6221H59.2049C59.1238 31.9225 58.9165 31.9523 58.6298 31.9523C58.3435 31.9523 58.1362 31.9225 58.0556 31.6221H58.0304V31.4926C58.0222 31.4273 58.0173 31.3538 58.0173 31.2687V21.2328H56.0449V31.8153C56.0449 32.7729 56.8465 33.5522 57.8319 33.5522H59.2214V36.473H61.2069V21.2328H61.0079Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.83 21.2328H99.0652V31.2687C99.0652 31.3791 99.0569 31.4702 99.0432 31.548V31.6221H99.0268C98.9456 31.9225 98.7384 31.9523 98.4516 31.9523C98.1659 31.9523 97.9586 31.9225 97.8775 31.6221H97.8522V31.4926C97.844 31.4273 97.8397 31.3538 97.8397 31.2687V21.2328H95.8667V31.8153C95.8667 32.7729 96.6684 33.5522 97.6537 33.5522H99.0432V36.473H101.029V21.2328H100.83Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7438 22.9694C73.7438 22.0141 72.9421 21.2369 71.9568 21.2369H70.5674V18.2827H68.5818V33.5229H70.5674V31.2881C70.569 31.2945 70.5712 31.2988 70.5723 31.3046V23.6742C70.5723 23.0414 70.8113 22.9925 71.1847 22.9925C71.5582 22.9925 71.7977 23.0414 71.7977 23.6742V33.5229H73.7438V22.9694Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.7409 31.3141C86.7409 31.947 86.515 31.9959 86.163 31.9959C85.8114 31.9959 85.5861 31.947 85.5861 31.3141V23.9283C85.5861 23.2955 85.8114 23.2468 86.163 23.2468C86.515 23.2468 86.7409 23.2955 86.7409 23.9283V31.3141ZM86.1575 21.2328C84.7338 21.2328 83.5762 22.3553 83.5762 23.7351V31.267C83.5762 32.6468 84.7338 33.7691 86.1575 33.7691C87.5805 33.7691 88.7382 32.6468 88.7382 31.267V23.7351C88.7382 22.3553 87.5805 21.2328 86.1575 21.2328Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M131.802 21.2328H130.036V31.2687C130.036 31.3791 130.029 31.4702 130.014 31.548V31.6221H129.998C129.917 31.9225 129.71 31.9523 129.423 31.9523C129.137 31.9523 128.93 31.9225 128.849 31.6221H128.824V31.4926C128.815 31.4273 128.811 31.3538 128.811 31.2687V21.2328H126.838V31.8153C126.838 32.7729 127.639 33.5522 128.625 33.5522H130.014V36.473H132V21.2328H131.802Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M117.817 31.1618C117.817 31.6156 117.7 31.7687 117.505 31.8192C117.411 31.8662 117.293 31.8745 117.155 31.8745C116.804 31.8745 116.578 31.8256 116.578 31.1927V23.8074C116.578 23.3538 116.694 23.2008 116.89 23.1504C116.983 23.103 117.101 23.0951 117.239 23.0951C117.591 23.0951 117.817 23.1437 117.817 23.7765V31.1618ZM119.511 18.2827H117.724V21.2369H116.334C115.349 21.2369 114.548 22.0141 114.548 22.9694V31.7907C114.548 32.7457 115.349 33.5229 116.334 33.5229H119.71V18.2827H119.511Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.599 31.3141C111.599 31.947 111.36 31.9959 110.986 31.9959C110.614 31.9959 110.374 31.947 110.374 31.3141V23.9283C110.374 23.2955 110.613 23.2468 110.986 23.2468C111.36 23.2468 111.599 23.2955 111.599 23.9283V31.3141ZM110.984 21.2328C109.561 21.2328 108.403 22.3553 108.403 23.7351V31.267C108.403 32.6468 109.561 33.7691 110.984 33.7691C112.407 33.7691 113.565 32.6468 113.565 31.267V23.7351C113.565 22.3553 112.407 21.2328 110.984 21.2328Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.3082 18.5598C81.9666 18.2469 81.5414 18.0697 81.0787 18.0472L80.8723 18.037V33.523H82.8388V19.7916C82.8388 19.3174 82.6455 18.8683 82.3082 18.5598Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M108.941 18.2827H103.978V20.2076H105.566V33.5229H107.552V20.2076H109.14V18.2827H108.941Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8913 31.3141C77.8913 31.947 77.6653 31.9959 77.3138 31.9959C76.9617 31.9959 76.7365 31.947 76.7365 31.3141V23.9283C76.7365 23.2955 76.9617 23.2468 77.3138 23.2468C77.6653 23.2468 77.8913 23.2955 77.8913 23.9283V31.3141ZM77.3078 21.2328C75.8849 21.2328 74.7268 22.3553 74.7268 23.7351V31.267C74.7268 32.6468 75.8849 33.7691 77.3078 33.7691C78.7307 33.7691 79.8888 32.6468 79.8888 31.267V23.7351C79.8888 22.3553 78.7307 21.2328 77.3078 21.2328Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.8977 30.8751H92.889V31.2936C92.889 31.9281 92.6493 31.9768 92.2759 31.9768C91.9024 31.9768 91.6634 31.9281 91.6634 31.2936V23.8902C91.6634 23.2558 91.9024 23.207 92.2759 23.207C92.6493 23.207 92.889 23.2558 92.889 23.8902V24.3304H92.8977V30.8751ZM92.3022 21.2328C90.8792 21.2328 89.7214 22.3579 89.7214 23.741V31.9373C89.7214 32.8947 90.5227 33.6737 91.5081 33.6737H92.8977V34.789H90.0647V36.7188H93.0969C94.0823 36.7188 94.8834 35.9398 94.8834 34.9822V23.741C94.8834 22.3579 93.7258 21.2328 92.3022 21.2328Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0156 31.9228C64.6466 31.9228 64.4096 31.8739 64.4096 31.241V23.8555C64.4096 23.2226 64.6466 23.1737 65.0156 23.1737C65.3852 23.1737 65.6222 23.2226 65.6222 23.8555V24.8223H67.5985V23.7351C67.5985 22.3553 66.4409 21.2328 65.0173 21.2328C63.5941 21.2328 62.4365 22.3553 62.4365 23.7351V31.267C62.4365 32.6468 63.5941 33.7691 65.0173 33.7691C66.4409 33.7691 67.5985 32.6468 67.5985 31.267V30.1799H65.6222V31.241C65.6222 31.8739 65.3852 31.9228 65.0156 31.9228Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M123.922 31.133C123.922 31.3031 123.903 31.43 123.869 31.5261V31.5977H123.838C123.734 31.7926 123.54 31.8152 123.285 31.8152C123.03 31.8152 122.835 31.7926 122.732 31.5977H122.679V31.4496C122.659 31.3648 122.648 31.2613 122.648 31.133V26.6939C122.648 26.5655 122.659 26.4621 122.679 26.3773V26.3012H122.7C122.792 26.0391 123.001 26.0119 123.285 26.0119C123.672 26.0119 123.922 26.0606 123.922 26.6939V31.133ZM124.068 21.2328H121.036V23.1584H123.869V24.3756H122.48C121.494 24.3756 120.693 25.1531 120.693 26.1085V31.7904C120.693 32.7458 121.494 33.5233 122.48 33.5233H125.855V22.9659C125.855 22.0102 125.053 21.2328 124.068 21.2328Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0079 21.2328H59.2428V31.2687C59.2428 31.3791 59.2351 31.4702 59.2214 31.548V31.6221H59.2049C59.1238 31.9225 58.9165 31.9523 58.6298 31.9523C58.3435 31.9523 58.1362 31.9225 58.0556 31.6221H58.0304V31.4926C58.0222 31.4273 58.0173 31.3538 58.0173 31.2687V21.2328H56.0449V31.8153C56.0449 32.7729 56.8465 33.5522 57.8319 33.5522H59.2214V36.473H61.2069V21.2328H61.0079Z" fill="#477BE4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.83 21.2328H99.0652V31.2687C99.0652 31.3791 99.0569 31.4702 99.0432 31.548V31.6221H99.0268C98.9456 31.9225 98.7384 31.9523 98.4516 31.9523C98.1659 31.9523 97.9586 31.9225 97.8775 31.6221H97.8522V31.4926C97.844 31.4273 97.8397 31.3538 97.8397 31.2687V21.2328H95.8667V31.8153C95.8667 32.7729 96.6684 33.5522 97.6537 33.5522H99.0432V36.473H101.029V21.2328H100.83Z" fill="#477BE4" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_8979_33732" x="0" y="1.28137" width="146" height="43.4374" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0.24 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8979_33732" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8979_33732" result="shape" />
                                            </filter>
                                        </defs>
                                    </a>
                                </svg>
                                <a href='https://www.xiaohongshu.com/user/profile/64cbf044000000000e0246ab' target='_blank' rel='noopener noreferrer'>
                                    <img
                                        src={xiaohongshuImg}
                                        alt="Xiaohongshu"
                                        className="mt-1 ml-2 w-20 hover:opacity-80 transition-opacity"
                                    />
                                </a>
                            </div>







                        </div>
                        <div className="md:w-2/3">
                            <div className="space-y-4">
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
                                    <p>{t('about.howIWorkText', "I specialize in helping you meet wounded, protective, or disliked aspects of yourself with curiosity—especially self-critical parts that whisper 'you're too much.' Through Internal Family Systems-informed interventions, we'll gently reconnect you with your calm, compassionate core Self. When we meet our inner world without judgment, we transform suffering at its source—cultivating not just balance, but enduring self-trust.")}</p>
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