import { useLocation } from 'react-router-dom';
import Logo from './../Logo';
import Navigation from './Navigation';
import { motion } from 'motion/react';

function Header() {
   const location = useLocation();
   const pathname = location.pathname;

   return (
      <motion.header
         initial={{ transform: 'translateY(-300px)', opacity: 0 }}
         animate={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className={`pr-8 pl-6 xs:pl-4 xs:pr-5.5 py-3 grid grid-cols-[1.38fr_1fr] items-center self-center rounded-xl mt-6 shadow-sm bg-white/50 dark:bg-black/25 backdrop-blur-lg absolute xs:relative z-10 lg:mx-6 xs:mx-0 ${
            pathname === '/' ? 'xs:gap-40' : 'xs:gap-6'
         }`}
      >
         <Logo />
         <Navigation />
      </motion.header>
   );
}

export default Header;
