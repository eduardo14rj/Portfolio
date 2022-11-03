import { BsArrowDownCircle } from 'react-icons/bs'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Animations from "./components/Animations/Animation"
import Empresas from "./components/sections/Empresas"
import ContandoSobreMim from "./components/sections/ContandoSobreMim"
import { isMobile } from 'react-device-detect'
import { scroller } from 'react-scroll'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/sections/Skills/Index'
function App() {
  function moveSection(elementId: string, offset?: number) {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset
    })
  }

  return (
    <main>
      <Navbar />
      <section id="Principal" className="h-screen relative">
        <div className="absolute right-[80%] w-[480px] top-80 bg-green h-[480px] rounded-full blur-[100px] opacity-75" />
        <div className="overflow-x-hidden absolute w-screen right-0 h-screen">
          <div className="absolute left-[80%] w-[480px] bg-pink h-[480px] rounded-full blur-[100px] opacity-75" />
        </div>

        <div className="container mx-auto z-10 relative lg:px-0 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-11 h-screen items-center">
            <div className="col-span-1 lg:col-span-5 text-dark-blue text-center lg:text-start dark:text-white space-y-6">
              <Animations
                style={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {
                  () => (
                    <h1 className="font-bold lg:text-4xl text-2xl">
                      Desenvolvedor Front-End, <br />
                      UX/UI designer e <br />
                      Webdesigner.
                    </h1>
                  )
                }
              </Animations>
              <p>
                Apaixonado por desenvolvimento web, sempre busco
                desenvolver sites de alta qualidade além de sofisticado e
                fora da caixa.
              </p>
              <div className='flex justify-center md:justify-start w-full'>
                <button className="eo-btn eo-btn-dark font-bold" onClick={() => moveSection("SobreMim", -120)}>
                  Vou contar um pouco mais sobre min
                  <BsArrowDownCircle className="animate-bounce lg:animate-none" />
                </button>
              </div>
            </div>
            <div className="col-span-6 relative h-full lg:h-full hidden lg:block">
              <InView>
                {
                  ({ ref, inView }) => (
                    <motion.div ref={ref} className="absolute 
                    lg:top-[32%] lg:translate-y-[-50%] lg:right-[0%] lg:translate-x-[0px] lg:h-[300px] lg:w-[300px] 
                    top-[0] bg-white z-[2] shadow-lg w-[100px] h-[100px] rounded-[28px] lg:rounded-[60px] right-[50%] translate-x-[-50%]"
                      animate={inView && { x: isMobile ? "0" : "-45%", rotate: 45 }}
                      style={{ rotate: 45 }}
                      transition={{ duration: 1, delay: .6 }}>
                    </motion.div>
                  )
                }
              </InView>
              <motion.div className="absolute 
              lg:top-[50%] lg:translate-y-[-50%] lg:right-[0] lg:translate-x-[0px] lg:w-[260px] lg:h-[260px] 
              right-[50%] translate-x-[80%] bg-dark-blue shadow-lg w-[100px] h-[100px] rotate-45 
              rounded-[28px] lg:rounded-[60px]">
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Empresas />

      <ContandoSobreMim />

      <Skills />
    </main>
  )
}

export default App
