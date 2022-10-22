import React from 'react';
import { BsArrow90DegRight } from 'react-icons/bs';
import imgPerfil from '../../assets/img_perfil.png';

const ContandoSobreMim: React.FC = () => {
    return (
        <section id="SobreMim" className="h-screen relative">
            <div className="container mx-auto lg:px-0 px-8">
                <h2 className="text-dark-blue lg:mb-12 mb-6 gap-2 text-2xl font-bold flex dark:text-white">
                    Contando um pouco mais sobre mim
                    <BsArrow90DegRight className="rotate-90 text-[32px]" />
                </h2>
                <div className="p-16 rounded-md overflow-hidden grid lg:grid-cols-2 grid-cols-1 relative bg-White-50/50 dark:bg-dark-blue-50/30 backdrop-blur-[20px]">
                    <div className="space-y-4 text-dark-blue dark:text-white">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsa aperiam sunt? Dicta hic nulla dolore quasi autem numquam, sunt perspiciatis amet incidunt facilis porro consequatur recusandae voluptatem nesciunt temporibus omnis.
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsa aperiam sunt? Dicta hic nulla dolore quasi autem numquam, sunt perspiciatis amet incidunt facilis porro consequatur recusandae voluptatem nesciunt temporibus omnis.
                        </div>
                    </div>
                    <div className="flex justify-end order-first lg:order-none mb-6 lg:mb-0">
                        <img src={imgPerfil} className="lg:w-1/2 w-full object-cover lg:h-[420px] h-auto rounded-lg" />
                    </div>
                    <div className="absolute top-0 -right-8 -z-10 w-[240px] h-[240px] bg-pink rounded-full blur-[100px] opacity-50 " />
                    <div className="absolute -bottom-20 -left-8 -z-10 w-[240px] h-[240px] opacity-50 bg-green rounded-full blur-[100px] " />
                </div>
            </div>
        </section>
    );
}

export default ContandoSobreMim;