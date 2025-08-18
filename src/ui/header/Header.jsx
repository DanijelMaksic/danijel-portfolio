import { motion } from 'motion/react';

import Logo from './../Logo';
import Navigation from './Navigation';

function Header() {
   return (
      <motion.header
         initial={{ transform: 'translateY(-300px)', opacity: 0 }}
         animate={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="pr-8 pl-6 xs:pl-4 xs:pr-5.5 py-3 w-3xl lg:w-10/12 sm:w-full! flex justify-between items-center self-center rounded-xl mt-6 shadow-sm bg-white/50 dark:bg-black/25 sm:dark:bg-black/40 backdrop-blur-lg z-10 2xs:gap-12"
      >
         <Logo />
         <Navigation />
      </motion.header>
   );
}

export default Header;
