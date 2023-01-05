import React, { useState } from 'react';
import { BiCoffeeTogo } from 'react-icons/bi'

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className='bg-[#EFF0F3]'>
            <div className="flex items-center justify-between border-gray-400 p-4 px-5">
                <a href="/" className='px-5'>
                    <span className='uppercase text-xl'>Mridul</span><span className='text-sm font-bold text-[#6246Ea]'>.Blog</span>
                </a>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] p-4 ">
                                <li className="border-b border-gray-400 my-4  uppercase">
                                    <a href="/home">Home</a>
                                </li>
                                <li className="border-b border-gray-400 my-4  uppercase">
                                    <a href="/category">Category</a>
                                </li>
                                <li className="border-b border-gray-400 my-4 uppercase">
                                    <a href="/upload">Upload Blog</a>
                                </li>
                                <li className="border-b border-gray-400 my-4 uppercase">
                                    <a href="/blog">Blog</a>
                                </li>
                                <button className='flex items-center rounded text-white bg-[#6246Ea] p-2'><BiCoffeeTogo className='mx-2 text-amber-300 '></BiCoffeeTogo> Buy Me A Coffee</button>

                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex p-4 font-medium ">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/category">Category</a>
                        </li>
                        <li>
                            <a href="/about">About Me</a>
                        </li>
                        <li>
                            <a href="/upload">Upload Blog</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>

                        <button className='flex items-center rounded text-white bg-[#6246Ea] text-sm p-2 px-3'><BiCoffeeTogo className='mx-2 text-amber-300 '></BiCoffeeTogo> Buy Me A Coffee ?</button>

                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>

        </div>
    );
};

export default Navigation;