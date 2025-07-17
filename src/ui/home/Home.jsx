import About from './About';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

function Home() {
   document.documentElement.style.scrollBehavior = 'smooth';

   return (
      <>
         <Hero />
         <Projects />
         <About />
         <Skills />
      </>
   );
}

export default Home;
