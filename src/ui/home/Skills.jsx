import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa6';
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';
import {
   SiBetterauth,
   SiDocker,
   SiDrizzle,
   SiExpress,
   SiGit,
   SiJavascript,
   SiNodedotjs,
   SiPostgresql,
   SiReactquery,
   SiReactrouter,
   SiRedux,
   SiSupabase,
   SiTrpc,
   SiTypescript,
   SiVercel,
   SiVitest,
   SiZod,
} from 'react-icons/si';
import PlaywrightIcon from '../PlaywrightIcon';
import { DiRedis } from 'react-icons/di';

const ICON_SIZE = '8';

const frontEnd = [
   { icon: <RiNextjsFill className={`size-${ICON_SIZE}`} />, name: 'Next.js' },
   { icon: <FaReact className={`size-${ICON_SIZE}`} />, name: 'React' },
   {
      icon: <SiJavascript className="size-8 rounded-xs" />,
      name: 'JavaScript',
   },
   {
      icon: <SiTypescript className={`size-${ICON_SIZE}`} />,
      name: 'TypeScript',
   },
   {
      icon: <RiTailwindCssFill className={`size-${ICON_SIZE}`} />,
      name: 'Tailwind CSS',
   },
   {
      icon: <SiReactrouter className={`size-${ICON_SIZE}`} />,
      name: 'React Router',
   },
   {
      icon: <SiReactquery className={`size-${ICON_SIZE}`} />,
      name: 'TanStack Query',
   },
   { icon: <SiRedux className={`size-${ICON_SIZE}`} />, name: 'Redux' },
   { icon: <FaReact className={`size-${ICON_SIZE}`} />, name: 'Zustand' },
];

const backEnd = [
   { icon: <SiNodedotjs className={`size-${ICON_SIZE}`} />, name: 'Node.js' },
   { icon: <SiExpress className={`size-${ICON_SIZE}`} />, name: 'Express' },
   {
      icon: <SiPostgresql className={`size-${ICON_SIZE}`} />,
      name: 'PostgreSQL',
   },
   { icon: <SiDrizzle className={`size-${ICON_SIZE}`} />, name: 'Drizzle' },
   {
      icon: <SiBetterauth className={`size-${ICON_SIZE}`} />,
      name: 'Better Auth',
   },
   { icon: <DiRedis size={36} />, name: 'Redis' },
   { icon: <SiZod className={`size-${ICON_SIZE}`} />, name: 'Zod' },
   { icon: <SiTrpc className={`size-${ICON_SIZE}`} />, name: 'tRPC' },
   { icon: <SiSupabase className={`size-${ICON_SIZE}`} />, name: 'Supabase' },
];

const tools = [
   { icon: <FaGithub className={`size-${ICON_SIZE}`} />, name: 'GitHub' },
   { icon: <SiDocker className={`size-${ICON_SIZE}`} />, name: 'Docker' },
   { icon: <SiGit className={`size-${ICON_SIZE}`} />, name: 'Git' },
   { icon: <PlaywrightIcon size={36} />, name: 'Playwright' },
   { icon: <SiVitest className={`size-${ICON_SIZE}`} />, name: 'Vitest' },
   { icon: <SiVercel className={`size-${ICON_SIZE}`} />, name: 'Vercel' },
];

function Skills() {
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.7 }}
         id="skills"
         className="px-6 py-3 flex flex-col gap-6 scroll-mt-24 md:px-24 sm:px-6! xs:px-0!"
      >
         <span className="text-[1.7rem] tracking-wide text-primary-800 font-bold text-center uppercase">
            {t('Skills.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            <div className="flex flex-col gap-4 shadow--sm rounded-xl px-6 py-5 bg-white/50 dark:bg-primary-50/80 dark:border dark:border-primary-300/70 backdrop-blur-lg">
               <h4 className="text-center"> {t('Skills.front-end-section')}</h4>

               <div className="grid grid-cols-3 gap-4">
                  {frontEnd.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-4 shadow--sm rounded-xl px-6 py-5 bg-white/50 dark:bg-primary-50/80 dark:border dark:border-primary-300/70 backdrop-blur-lg">
               <h4 className="text-center"> {t('Skills.back-end-section')}</h4>

               <div className="grid grid-cols-3 gap-4">
                  {backEnd.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-4 shadow--sm rounded-xl px-6 py-5 bg-white/50 dark:bg-primary-50/80 dark:border dark:border-primary-300/70 backdrop-blur-lg">
            <h4 className="text-center"> {t('Skills.tools-section')}</h4>

            <div className="flex gap-4 md:grid md:grid-cols-3">
               {tools.map((tech) => (
                  <Tech icon={tech.icon} name={tech.name} key={tech.name} />
               ))}
            </div>
         </div>
      </motion.div>
   );
}

function Tech({ icon, name }) {
   return (
      <div className="flex flex-col gap-1 py-4 w-full border border-primary-300 dark:border-primary-200 rounded-xl justify-center items-center text-sm hover:bg-primary-800 hover:text-primary-50 transition dark:hover:text-primary-100 dark:hover:border-primary-100">
         <span className="h-9">{icon}</span>
         <span className="pointer-events-none text-center">{name}</span>
      </div>
   );
}

export default Skills;
