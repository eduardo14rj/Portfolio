import React from 'react';
import logo from '../../assets/Logo.svg'

const Navbar: React.FC = () => {
    return (
        <nav className='fixed w-screen h-[64px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-20'>
            <div className='container mx-auto flex items-center justify-between '>
                <div className='h-[64px] flex items-center'>
                    <img src={logo} className="h-8" />
                    <strong className="ml-2 text-dark-blue dark:text-white">
                        Eduardo Oliveira
                    </strong>
                </div>
                <ul className='flex space-x-6 font-medium dark:text-white'>
                    <li>
                        <a href="#!">Principal</a>
                    </li>
                    <li>
                        <a href="#!">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#!">Portfólio</a>
                    </li>
                    <li>
                        <a href="#!">Skills</a>
                    </li>
                </ul>
            </div>
            <div className='h-[2px] w-11/12 bg-White-50 dark:bg-white/5 absolute bottom-0 left-1/2 -translate-x-1/2' />
        </nav>
    );
}

export default Navbar;