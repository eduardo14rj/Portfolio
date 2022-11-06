import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../../assets/Logo.svg'
import imgFooter from '../../../assets/image-footer.png'
type CLinkType = {
    text: string
    to: string
    offset?: number
}


const Footer: React.FC = () => {

    const CLink: React.FC<CLinkType> = (prop) => {
        return (
            <Link
                to={prop.to} activeClass='active' className='text-white cursor-pointer' smooth spy duration={400} offset={prop.offset}>
                {prop.text}
            </Link>
        )
    }

    return (
        <footer className='md:h-[240px] bg-dark-blue relative'>
            <div className='container mx-auto md:pt-8 md:p-0 p-12 z-[1] md:z-0'>
                <div className='flex flex-col md:flex-row md:items-start items-center text-center md:text-start h-auto mb-8'>
                    <div className='md:mr-12 md:max-w-[200px] max-w-full'>
                        <div className='flex items-center w-auto justify-center md:justify-start'>
                            <img src={logo} alt="Logo" />
                            <strong className="ml-2 text-white">
                                Eduardo Oliveira
                            </strong>
                        </div>
                        <p className='text-white text-sm font-light pt-3 mb-8 md:mb-0'>Aprimorando meu código e meus estudos!</p>
                    </div>
                    <div className='text-white'>
                        <p className='text-xl mb-2 font-bold'>Navegação</p>
                        <ul className='list-disc text-pink'>
                            <li>
                                <CLink text='Principal' to='Principal' />
                            </li>
                            <li>
                                <CLink text="Sobre mim" to="SobreMim" offset={-120} />
                            </li>
                            <li>
                                <CLink text='Skills' to="Skills" />
                            </li>
                            <li>
                                <CLink text='Portfólio' to="Portfolio" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='absolute right-0 h-full top-0 opacity-50 -z-[1] md:-z-[0] md:opacity-100'>
                    <div className='absolute left-0 top-0 h-full w-[60px] bg-gradient-to-r from-dark-blue to-dark-blue/0' />
                    <img src={imgFooter} className="h-full w-full object-cover" />
                </div>
                <div className='flex align-bottom h-full mx-0 text-[10px] justify-center md:justify-start'>
                    <p className='mt-3 text-white/70'>Eduardo 2022 @ = Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;