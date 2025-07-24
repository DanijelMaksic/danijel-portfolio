import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import ProjectGrid from './ProjectGrid';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

function Hero() {
   const { i18n, t } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <motion.div
         initial={{ transform: 'translateY(20px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         id="#hero"
         className="grid grid-cols-2 md:grid-cols-1 gap-24 lg:gap-10 xs:gap-12 lg:px-8 xs:px-2 2xs:px-10! self-center mt-40 xs:mt-12 2xs:mt-16"
      >
         <div className="flex flex-col gap-10 xs:gap-8 2xs:gap-10">
            <span
               className={`${
                  currentLanguage === 'en' ? 'text-5xl' : 'text-[2.5rem]'
               } xs:text-[2.5rem] 2xs:text-5xl font-bold text-primary-800 leading-13.5 xs:leading-11.5 2xs:leading-14`}
            >
               {t('HeroPart1')}
               <span className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#0077ff] to-[#00cec7]">
                  React
               </span>
               {t('HeroPart2')}
               <span className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]">
                  Next.js
               </span>
            </span>

            <div className="flex items-center justify-center gap-2 shadow--sm rounded-lg w-fit px-2 py-1 dark:border dark:border-primary-300/70">
               <Link
                  to="https://github.com/DanijelMaksic"
                  target="_blank"
                  aria-label="Github"
                  className="hover:bg-primary-200 transition p-2 rounded-md"
               >
                  <FaGithub className="size-6" />
               </Link>

               <div className="h-5 w-1 border-r border-primary-400"></div>

               <Link
                  to="#"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:bg-primary-200 transition p-2 rounded-md"
               >
                  <FaLinkedin className="size-6" />
               </Link>
            </div>
         </div>

         <ProjectGrid />
      </motion.div>
   );
}

export default Hero;
