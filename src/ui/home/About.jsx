import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

function About() {
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.9 }}
         id="about"
         className="flex flex-col mb-30 gap-10 scroll-mt-24 md:px-12 xs:px-2"
      >
         <span span className="text-4xl text-primary-800 font-bold text-center">
            {t('About.h1')}
         </span>

         <div className="grid grid-cols-[1fr_1.6fr] md:grid-cols-1 gap-24 lg:gap-16">
            <div className="shadow--sm rounded-2xl md:h-120">Placeholder</div>

            <div className="flex flex-col gap-8">
               <span className="text-4xl text-primary-800 font-bold">
                  {t('About.name')}
               </span>

               <div className="flex flex-col gap-3 text-primary-600 leading-8 md:leading-9 xs:leading-10 2xs:leading-11">
                  <span>{t('About.p1')}</span>

                  <span>
                     {t('About.p2-part1')} <strong>JavaScript</strong>{' '}
                     {t('About.p2-part2')}
                  </span>

                  <span>
                     {t('About.p3-part1')} <strong>React</strong>,
                     {t('About.p3-part2')}
                     <strong>Next.js</strong>
                     {t('About.p3-part3')}
                  </span>
               </div>
            </div>
         </div>
      </motion.div>
   );
}

export default About;
