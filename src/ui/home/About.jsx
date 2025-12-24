import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import AboutImage from './../../../assets/about-image.jpg';

function About() {
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.9 }}
         id="about"
         className="flex flex-col gap-10 scroll-mt-24 md:px-6 xs:px-0"
      >
         <span
            span
            className="text-[1.7rem] tracking-wide text-primary-800 font-bold text-center uppercase"
         >
            {t('About.h1')}
         </span>

         <div className="grid grid-cols-[1fr_2.8fr] md:grid-cols-1 gap-24 lg:gap-10">
            <img
               src={AboutImage}
               loading="lazy"
               alt="Image of Danijel"
               className="shadow--sm rounded-2xl h-120 md:h-150 object-cover md:justify-self-center xs:h-120 dark:opacity-90"
            />

            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-3 text-primary-700 leading-8 md:leading-8.5 xs:leading-9 2xs:leading-11">
                  <span>{t('About.p1')}</span>

                  <span>{t('About.p2')}</span>

                  <span>{t('About.p3')}</span>
               </div>

               <span className="text-5xl text-primary-800 self-end font-stylish">
                  {t('About.name')}
               </span>
            </div>
         </div>
      </motion.div>
   );
}

export default About;
