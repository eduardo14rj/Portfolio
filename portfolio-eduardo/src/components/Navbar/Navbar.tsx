import React, { useState } from 'react'
import logo from '../../assets/Logo.svg'
import { HiMenuAlt2 } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-scroll'

type CLinkType = {
    text: string
    to: string
    offset?: number
}

const Navbar: React.FC = () => {
    const [view, setView] = useState<boolean>(isMobile);

    const CLink: React.FC<CLinkType> = (prop) => {
        return (
            <Link
                to={prop.to} activeClass='active' smooth spy duration={400} offset={prop.offset}
                onClick={() => isMobile && setView(true)}>
                {prop.text}
            </Link>
        )
    }

    return (
        <>
            <motion.nav
                style={{ y: isMobile ? "100%" : 0 }}
                animate={{ y: view ? "100%" : "0px" }}
                transition={{ ease: "easeInOut" }}
                className={isMobile ? "mobile-navbar" : "navbar"}>
                <div className='navbar-container'>
                    <div className='h-[64px] flex items-center'>
                        <img src={logo} className="h-8" />
                        <strong className="ml-2 text-dark-blue dark:text-white">
                            Eduardo Oliveira
                        </strong>
                    </div>
                    <ul className={isMobile ? "mobile" : ""}>
                        <li>
                            <CLink text="Principal" to='Principal' offset={0} />
                        </li>
                        <li>
                            {/* <a href="#!">Sobre mim</a> */}
                            <CLink text='Sobre mim' to='SobreMim' offset={-120} />
                        </li>
                        <li>
                            {/* <a href="#!">Portfólio</a> */}
                            <CLink text="Skills" to="Skills" offset={0} />
                        </li>
                        <li>
                            <a href="#!">Portfólio</a>
                        </li>
                    </ul>
                </div>
                <div className='h-[2px] w-11/12 bg-White-50 dark:bg-white/5 absolute bottom-0 left-1/2 -translate-x-1/2' />
            </motion.nav>
            <button className='fixed bottom-12 right-12 z-20 lg:hidden
            w-16 h-16 bg-dark-blue rounded-full text-white flex items-center justify-center'
                onClick={() => setView(!view)}>
                {
                    view ? <HiMenuAlt2 /> : <CgClose />
                }
            </button>
        </>
    );
}

export default Navbar;