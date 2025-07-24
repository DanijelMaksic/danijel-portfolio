import Logo from './../Logo';
import Navigation from './Navigation';
import { motion } from 'motion/react';

function Header() {
   return (
      <motion.header
         initial={{ transform: 'translateY(-300px)', opacity: 0 }}
         animate={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="pr-8 pl-6 xs:pl-4 xs:pr-5.5 py-3 grid grid-cols-[1.38fr_1fr] items-center self-center rounded-xl mt-6 shadow-sm bg-white/50 dark:bg-black/25 backdrop-blur-lg absolute xs:relative xs:gap-32 z-10 lg:mx-6"
      >
         <Logo />
         <Navigation />
      </motion.header>
   );
}

export default Header;
