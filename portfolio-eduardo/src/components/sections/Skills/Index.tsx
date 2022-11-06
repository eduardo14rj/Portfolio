import React, { useState } from 'react';
import javascript from '../../../assets/skills/logo_javascript.png'
import css from '../../../assets/skills/logo_css.png'
import html from '../../../assets/skills/logo_html.png'
import sass from '../../../assets/skills/logo_sass.png';
import typescript from '../../../assets/skills/logo_typescript.png'
import tailindcss from '../../../assets/skills/logo_tailwindcss.png'
import react from '../../../assets/skills/logo_react.png'
import { SkillAmbientView } from './SkillAmbientView';
import { SkillItem } from './SkillItem';
type opcoes = "Linguagens" | "Frameworks";
type linguagensType = "Javascript" | "Typescript" | "CSS" | "HTML" | "SCSS";
type frameworksType = "Tailwindcss" | "React";
const Skills: React.FC = () => {
    const [opcao, setOpcao] = useState<opcoes>("Linguagens");
    const [linguagem, setLinguagem] = useState<linguagensType>("HTML")
    const [framework, setFramework] = useState<frameworksType>("React");
    return (
        <section id="Skills" className='relative px-8 md:px-0'>
            <div className='w-[180px] h-[180px] bg-pink absolute -z-10 rounded-full blur-[64px]' />
            <div className='w-[300px] h-[300px] bg-green absolute -z-10 rounded-full right-0 bottom-0 blur-[120px]' />
            <div className="container mx-auto mt-[80px] mb-[120px] h-">
                <div className='grid md:grid-cols-5 grid-cols-1'>
                    <div className='md:col-span-2 col-span-1 '>
                        <h2 className='text-2xl font-bold text-dark-blue dark:text-white mb-4'>Skills</h2>
                        <p className='mb-6 text-dark-blue dark:text-white mr-4'>Listando cada skills, tecnologias e frameworks que eu tenho experiência / que pretendo aprender futuramente.</p>

                        <div className='font-bold mb-8 text-[12px] md:text-[16px]'>
                            <button onClick={() => setOpcao("Linguagens")} className={`border-2 transition-all py-3 px-5 border-dark-blue dark:text-white dark:border-white rounded-l-full
                        ${opcao === 'Linguagens' && "bg-dark-blue text-white dark:bg-white dark:text-dark-blue"}
                        `}>
                                Linguagens
                            </button>
                            <button onClick={() => setOpcao("Frameworks")} className={`border-2 transition-all py-3 px-5 border-dark-blue dark:text-white dark:border-white rounded-r-full
                         ${opcao === 'Frameworks' && "bg-dark-blue text-white dark:bg-white dark:text-dark-blue "}
                         `}>
                                Frameworks e extensões
                            </button>
                        </div>

                        <div className='flex md:block snap-x md:overflow-y-auto md:overflow-x-hidden md:h-[380px] h-auto overflow-x-auto overflow-y-hidden'>
                            {
                                opcao === "Linguagens" && (
                                    <>
                                        <SkillItem
                                            icon={html}
                                            barPorcent="profissional"
                                            subTitle="HyperText Markup Language"
                                            title="HTML"
                                            onClick={() => setLinguagem("HTML")}
                                            active={linguagem === "HTML"}
                                        />
                                        <SkillItem
                                            icon={css}
                                            barPorcent="profissional"
                                            subTitle="Cascating Style Sheets"
                                            title="CSS"
                                            onClick={() => setLinguagem("CSS")}
                                            active={linguagem === "CSS"}
                                        />
                                        <SkillItem
                                            icon={javascript}
                                            barPorcent="alto"
                                            subTitle="Linguagem de programação"
                                            title="Javascript"
                                            onClick={() => setLinguagem("Javascript")}
                                            active={linguagem === "Javascript"}
                                        />
                                        <SkillItem
                                            icon={typescript}
                                            barPorcent="alto"
                                            subTitle="Linguagem de programação Tipada"
                                            title="Typescript"
                                            onClick={() => setLinguagem("Typescript")}
                                            active={linguagem === "Typescript"}
                                        />


                                        <SkillItem
                                            icon={sass}
                                            barPorcent="alto"
                                            subTitle="Syntactically Awesome Style Sheets"
                                            title="SCSS"
                                            onClick={() => setLinguagem("SCSS")}
                                            active={linguagem === "SCSS"}
                                        />
                                    </>
                                )

                            }
                            {
                                opcao === "Frameworks" && (
                                    <>
                                        <SkillItem
                                            icon={react}
                                            barPorcent="profissional"
                                            subTitle="Biblioteca de projeto FrontEnd"
                                            title="React"
                                            onClick={() => setFramework("React")}
                                            active={framework === "React"}
                                        />
                                        <SkillItem
                                            icon={tailindcss}
                                            barPorcent="baixo"
                                            subTitle="Framework CSS visando a utilidades"
                                            title="Tailwindcss"
                                            onClick={() => setFramework("Tailwindcss")}
                                            active={framework === "Tailwindcss"}
                                        />

                                    </>
                                )
                            }

                        </div>

                    </div>
                    <div className=' md:col-span-3 col-span-1 min-h-[580px]  py-4 px-8 overflow-hidden bg-gradient-to-t relative from-green to-pink rounded-lg'>

                        <SkillAmbientView text='Linguagem de marcação de Hypertexto, é onde você cria suas páginas na WEB.'
                            showAmbient={linguagem === "HTML" && opcao === "Linguagens"}
                            speedCodeText={80}
                            textCode={`<div>
\xa0\xa0 <h1>Olá mundo</h1>
\xa0\xa0<p>Isso é um exemplo de um html simples!</p>
\xa0\xa0<br/>
\xa0\xa0<br/>
\xa0\xa0<strong>Muito agradecido.</strong>
</div>`} />
                        <SkillAmbientView text='CSS significa Folha de estilização em cascata. é com ela que se deve estilizar quase qualquer componente html em seu projeto.'
                            showAmbient={linguagem === "CSS" && opcao === "Linguagens"}
                            speedCodeText={80}
                            textCode={`.class1 { \n \xa0\xa0\xa0 background: #000; \n \xa0\xa0\xa0 padding: 18px 10px; \n \xa0\xa0\xa0 border-radius: 12px; \n } \n\n .class1 p { \n \xa0\xa0\xa0 color: #fff; \n \xa0\xa0\xa0 font-weight: bold; \n }`} />

                        <SkillAmbientView text='Javascript é uma linguagem de programação interpretada e não-tipada e também é a minha primeira linguagem de programação que estudei e que foi com ela que aprimorei junto com outros frameworks.'
                            showAmbient={linguagem === "Javascript" && opcao === "Linguagens"}
                            textCode={`function count(num1, num2) { \n \xa0\xa0 return num1 + num2; \n } \n \n count(10, 20);`} />
                        <SkillAmbientView text='Typescript é a evolução do javascript, podendo ser uma linguagem tipada. Sempre tento trabalhar no desenvolvimento Frontend com ela, indepentende do tamanho do projeto.'
                            showAmbient={linguagem === "Typescript" && opcao === "Linguagens"}
                            textCode={`const nome: string = "Eduardo Oliveira";
const idade: number = 23;
const text: string = "Seja bem vindo ao meu portfólio!!!";
const linguagens: string[] = ["HTML", "CSS", "JS"];`} />
                        <SkillAmbientView text='SCSS significa em português "Folhas de estilo com uma sintaxe incrível" é a evolução do próprio CSS, contendo sintaxes como variáveis, mixins e funções e operações. Atualmente utilizo o SCSS sempre que possível em projetos.'
                            showAmbient={linguagem === "SCSS" && opcao === "Linguagens"}
                            speedCodeText={80}
                            textCode={`$cor_primaria: #888;
$cor_dark: #000;
$cor_white: #fff;

.class1 {
\xa0\xa0   background: $cor_primaria;

\xa0\xa0   h2 {
\xa0\xa0\xa0\xa0      color: $cor_dark;
\xa0\xa0  }

\xa0\xa0  p {
\xa0\xa0\xa0\xa0   color: $cor_white;
\xa0\xa0  }
}`} />
                        <SkillAmbientView text="Tailwindcss é uma biblioteca visando a utilidades que fornece diversas utilidades e opinativas. Achei fantástico essa biblioteca e facilita muito o trabalho de estilização."
                            showAmbient={framework === "Tailwindcss" && opcao === "Frameworks"}
                            speedCodeText={200}
                            textCode={`<div class="flex justify-center items-center">
\xa0\xa0<p class="font-bold color-green animation-pulse">Olá mundo!!!</p>
</div>`} />
                        <SkillAmbientView text="React é uma ferramenta frontend que pode ser criada em javascript ou typescript e ela tem o foco em criar interfaces em páginas web. Quase todos os projetos eu utilizo essa biblioteca."
                            showAmbient={framework === "React" && opcao === "Frameworks"}
                            speedCodeText={100}
                            textCode={`import React from "react";

const Page: React.FC = () => {
\xa0return (
\xa0\xa0<div>
\xa0\xa0\xa0\xa0olá mundo!!!
\xa0\xa0</div>
\xa0);
}

export default Page;`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;