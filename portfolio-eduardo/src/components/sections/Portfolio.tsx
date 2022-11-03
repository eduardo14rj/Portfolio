import React from 'react';

const Portfolio: React.FC = () => {


    return (
        <section id="Portfolio">
            <div className="container mx-auto text-center">
                <h2 className='text-dark-blue text-2xl mb-2 dark:text-white'>Portfólio</h2>
                <p className='text-dark-blue mb-4 dark:text-white'>Listagem de todos os projetos onde participei e construi!</p>

                <div className="flex">
                    <button>
                        Todos
                    </button>
                    <button>
                        Projeto
                    </button>
                    <button>
                        Landing pages
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;