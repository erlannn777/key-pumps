import React from "react";
import logo from "../../img/logo.png"

const Header = () => {
    return (
        <div>
            <div className='bg-gray-300 flex justify-around p-1'>
                <p className='sm:text-sm'>Cкидка 10% по промокоду "TEPLO" на все заказы до 10.09</p><span className='sm:hidden'>Обратный звонок</span>
            </div>
            <nav className="flex items-center justify-between bg-gray-800 px-12 py-2 xl:flex  sm:p-2">
                <div className="block lg:hidden xl:hidden">
                    <button
                        className="flex items-center text-white">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={logo} alt="logo" className='w-28 sm:hidden'/>
                </div>
                <div className="w-full block flex-grow sm:hidden lg:flex xl:flex xl:justify-between lg:items-center lg:w-auto">
                    <div className="text-sm xl:flex">
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4">
                            Главная
                        </a>
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4">
                            Каталог
                        </a>
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4">
                            О нас
                        </a>
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4">
                            Еще
                        </a>
                    </div>
                    <div className="relative w-80">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon"
                               className="border border-gray-700 text-gray-900 text-sm rounded-sm block w-full p-2.5 pl-10 dark:bg-gray-300  dark:placeholder-gray-800 dark:text-white outline-none"
                               placeholder="Поиск"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <button className='bg-orange-400 px-2 py-1'>найти</button>
                        </div>
                    </div>
                    <div className='w-36'/>
                    <div className='flex items-center'>
                        <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24"
                             strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                        </svg>
                        <span className='text-white pl-2'>+7 (964) 945 41 38</span>
                    </div>
                    <div className='ml-4'>
                        <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                    </div>
                </div>
                <div className='className="block lg:hidden xl:hidden flex'>
                    <div className="block lg:hidden">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                    </div>
                    <div className='ml-4'>
                        <svg className="h-6 w-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
