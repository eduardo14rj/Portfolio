import React from 'react';

const Portfolio: React.FC = () => {


    return (
        <section id="Portfolio" className='py-[300px]'>
            <div className="container mx-auto text-center">
                <h2 className='text-dark-blue text-2xl mb-2 dark:text-white'>Portfólio</h2>
                <p className='text-dark-blue mb-4 dark:text-white'>Listagem de todos os projetos onde participei e construi!</p>
            </div>


            {/* <div className='grid grid-cols-3 cursor-pointer gap-6'>
                <div>
                    <img />
                    <div>

                    </div>
                </div>
            </div> */}

            <div className='text-center dark:text-white text-dark-blue py-[40px]'>
                ( Em Breve )
            </div>

        </section>
    );
}

export default Portfolio;