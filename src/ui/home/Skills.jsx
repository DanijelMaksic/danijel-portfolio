import { useTranslation } from 'react-i18next';
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa6';
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';
import { motion } from 'motion/react';

const coreTech = [
   { icon: <RiNextjsFill className="size-9" />, name: 'Next.js' },
   { icon: <FaReact className="size-9" />, name: 'React' },
   {
      icon: <FaJs className="size-9" />,
      name: 'Javascript',
   },
   {
      icon: <RiTailwindCssFill className="size-9" />,
      name: 'Tailwind CSS',
   },
   {
      icon: <FaCss3Alt className="size-9" />,
      name: 'CSS',
   },
   {
      icon: <FaHtml5 className="size-9" />,
      name: 'HTML',
   },
];

const otherTech = [
   { icon: <RiSupabaseFill className="size-8" />, name: 'Supabase' },
   { icon: <FaGithub className="size-8" />, name: 'Github' },
];

function Skills() {
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.9 }}
         id="skills"
         className="px-6 py-3 mb-30 flex flex-col gap-10 scroll-mt-24 md:px-12 xs:px-2"
      >
         <span className="text-4xl text-primary-800 font-bold">
            {t('Skills.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
            <div className="flex flex-col gap-3 shadow--sm rounded-lg px-4 py-4 bg-white/50 backdrop-blur-lg">
               <h3> {t('Skills.core-tech')}</h3>

               <div className="grid grid-cols-2 gap-4">
                  {coreTech.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-3 shadow--sm rounded-lg px-4 py-4 bg-white/50 backdrop-blur-lg">
               <h3> {t('Skills.other-tech')}</h3>

               <div className="grid grid-cols-2 gap-4">
                  {otherTech.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
   );
}

function Tech({ icon, name }) {
   return (
      <div className="flex flex-col gap-1 py-3 w-full  border border-primary-400 rounded-lg justify-center items-center text-lg hover:bg-primary-800 hover:text-primary-50 transition">
         {icon}
         <span className="pointer-events-none text-center">{name}</span>
      </div>
   );
}

export default Skills;
