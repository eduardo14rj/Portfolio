import React from 'react';
import { BsArrow90DegRight } from 'react-icons/bs';
import imgPerfil from '../../assets/img_perfil.png';

const ContandoSobreMim: React.FC = () => {
    return (
        <section id="SobreMim" className="min-h-screen relative">
            <div className="container mx-auto lg:px-0 px-8">
                <h2 className="text-dark-blue lg:mb-12 mb-6 gap-2 text-2xl font-bold flex dark:text-white">
                    Contando um pouco mais sobre mim
                    <BsArrow90DegRight className="rotate-90 text-[32px]" />
                </h2>
                <div className="p-16 rounded-md overflow-hidden grid lg:grid-cols-2 grid-cols-1 relative bg-White-50/50 dark:bg-dark-blue-50/30 backdrop-blur-[20px]">
                    <div className="space-y-4 text-dark-blue dark:text-white">
                        <div>
                            O meu nome é Eduardo Lima de Oliveira e atualmente tenho 23 anos de idade. Comecei a entrar na área de programação no ano de 2016, dentro desse período iniciei os meus estudos em cursos com certificados e vídeos na internet para aperfeiçoar ainda mais na área de web design. Com isso incluiu aprender as linguagens básicas para tornar os sites antes como apenas ideias e rabiscos no papel para a realidade como HTML, CSS e o que iniciou aprofundar mais na área de programação, o javascript.                        </div>

                        <div>
                            Entre 2018 e 2019 em diante eu comecei a estudar formas mais rápidas e profissionais quando se trata de aplicações e de sites, estudando e especializando no framework chamado React, além de estudar também formas de estilizações mais organizadas e inteligentes como SCSS (ou SASS).                        </div>
                        <div>
                            Estou cada dia mais feliz comigo mesmo, sempre querendo expandir o meu repertório e não parando de aprender 😀.                        </div>
                    </div>
                    <div className="flex justify-end order-first lg:order-none mb-6 lg:mb-0">
                        <img src={imgPerfil} className="lg:w-2/3 w-full object-cover lg:h-[420px] h-auto rounded-lg" />
                    </div>
                    <div className="absolute top-0 -right-8 -z-10 w-[240px] h-[240px] bg-pink rounded-full blur-[100px] opacity-50 " />
                    <div className="absolute -bottom-20 -left-8 -z-10 w-[240px] h-[240px] opacity-50 bg-green rounded-full blur-[100px] " />
                </div>
            </div>
        </section>
    );
}

export default ContandoSobreMim;