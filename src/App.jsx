import { Hero, Navbar, About, Projects, Work, Contact, Footer } from './sections/'
import theme from './constants/theme.js'


const App = () => {
  let counter = 0

  return (
   <main className={`w-full min-h-screen px-[25px] md:px-[50px] lg:px-[100px] xl:px-[150px] bg-slate-900 text-white antialiased tracking-wide`}>
      <Navbar />
      <Hero />
      <About num={++counter} />
      <Work num={++counter} />
      <Projects num={++counter} />
      <Contact num={++counter} />
      <Footer />
   </main>
  )
}

export default App
