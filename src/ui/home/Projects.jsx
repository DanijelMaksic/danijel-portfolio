import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SiReactquery, SiRedux, SiZod, SiReactrouter } from 'react-icons/si';
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';
import {
   FaCaretDown,
   FaCaretUp,
   FaCss3Alt,
   FaHtml5,
   FaJs,
   FaMobileScreenButton,
   FaReact,
   FaSass,
} from 'react-icons/fa6';

import ProjectPreview from './ProjectPreview';
import blogImg from './../../../assets/blog.webp';
import quizImg from './../../../assets/quiz.webp';
import portaImg from './../../../assets/porta.webp';
import useBookImg from './../../../assets/use-book.webp';
import judgmentImg from './../../../assets/judgment.webp';
import ochridGalleryCmsImg from './../../../assets/ochrid-gallery-cms.webp';
import ochridGalleryStoreImg from './../../../assets/ochrid-gallery-store.webp';

// IF YOU WANT TO CHANGE THE TITLE OF A PROJECT, YOU ALSO NEED TO CHANGE IT IN MDX FILE OF THAT PROJECT
export const featuredProjects = [
   {
      titleEn: 'Ochrid Gallery E-commerce',
      titleSr: 'Охридска Галерија Веб-продавница',
      image: ochridGalleryStoreImg,
      descriptionEn:
         'A Next.js e-commerce website for a fictional gallery. Includes checkout functionality and user authentication.',
      descriptionSr:
         'Веб-продавница за фикционалну галерију. Садржи функционалност наручивања икона и аутентикацију корисника.',
      techStack: [
         {
            name: 'Next.js',
            icon: <RiNextjsFill />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Supabase',
            icon: <RiSupabaseFill />,
         },
         {
            name: 'Zod',
            icon: <SiZod />,
         },
         {
            name: 'Motion',
            icon: <TbBrandFramerMotion />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'ochrid-gallery-store',
      demoLink: 'https://ochrid-gallery.vercel.app/',
      visitBtnStyles:
         'bg-blue-700/16 dark:bg-blue-200/15 hover:bg-blue-700/55 dark:hover:bg-blue-300/40 text-blue-800/65 dark:text-blue-200/65 hover:text-blue-50 hover:shadow-hue hover:shadow-blue-700/25 dark:hover:shadow-blue-300/15',
      readBtnStyles:
         'bg-amber-700/16 dark:bg-amber-200/15 hover:bg-amber-700/55 dark:hover:bg-amber-300/40 text-amber-800/65 dark:text-amber-200/65 hover:text-amber-50 hover:shadow-hue hover:shadow-amber-700/25 dark:hover:shadow-amber-300/15',
   },

   {
      titleEn: 'Ochrid Gallery CMS',
      titleSr: 'Охридска Галерија CMS',
      image: ochridGalleryCmsImg,
      descriptionEn:
         'A Content Management System (CMS) app for a fictional gallery. Limited only to employees, it includes inventory and order management.',
      descriptionSr:
         'CMS апликација за фикционалну галерију. Ограничена само за запослене, ова апликација садржи менаџмент инвентара и поруџбина.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'TanStack Query',
            icon: <SiReactquery />,
         },
         {
            name: 'React Router',
            icon: <SiReactrouter />,
         },
         {
            name: 'Supabase',
            icon: <RiSupabaseFill />,
         },
         {
            name: 'Motion',
            icon: <TbBrandFramerMotion />,
         },
      ],
      projectURL: 'ochrid-gallery-cms',
      readBtnStyles:
         'bg-orange-700/16 dark:bg-orange-200/15 hover:bg-orange-700/55 dark:hover:bg-orange-300/40 text-orange-800/65 dark:text-orange-200/65 hover:text-orange-50 hover:shadow-hue hover:shadow-orange-700/25 dark:hover:shadow-orange-300/15',
   },

   {
      titleEn: 'Porta Website',
      titleSr: 'Порта Вебсајт',
      image: portaImg,
      descriptionEn:
         'A brochure website for a fictional carpentry store, which showcases what the store offers.',
      descriptionSr:
         'Вебсајт брошура за фикционалну столарску радњу, која представља њену понуду.',
      techStack: [
         {
            name: 'HTML',
            icon: <FaHtml5 />,
         },
         {
            name: 'SASS',
            icon: <FaSass />,
         },
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'porta',
      codeLink: 'https://github.com/DanijelMaksic/porta.github.io',
      demoLink: 'https://danijelmaksic.github.io/porta.github.io/',
      visitBtnStyles:
         'bg-orange-700/16 dark:bg-orange-200/15 hover:bg-orange-700/55 dark:hover:bg-orange-300/40 text-orange-800/65 dark:text-orange-200/65 hover:text-orange-50 hover:shadow-hue hover:shadow-orange-700/25 dark:hover:shadow-orange-300/15',
      readBtnStyles:
         'bg-yellow-700/16 dark:bg-yellow-200/15 hover:bg-yellow-700/40 dark:hover:bg-yellow-300/40 text-yellow-800/65 dark:text-yellow-200/65 hover:text-yellow-50 hover:shadow-hue hover:shadow-yellow-700/25 dark:hover:shadow-yellow-300/15',
   },

   {
      titleEn: 'Judgment Website Redesign',
      titleSr: 'Judgment Вебсајт Редизајн',
      image: judgmentImg,
      descriptionEn:
         'A complete redesign of the promotional website for the award-winning video-game Judgment.',
      descriptionSr:
         'Комплетан редизајн промоционалног вебсајта за награђивану видео-игру Judgment.',
      techStack: [
         {
            name: 'HTML',
            icon: <FaHtml5 />,
         },
         {
            name: 'CSS',
            icon: <FaCss3Alt />,
         },
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'judgment',
      codeLink: 'https://github.com/DanijelMaksic/judgment-site',
      demoLink: 'https://danijelmaksic.github.io/judgment-site/',
      visitBtnStyles:
         'bg-gray-700/16 dark:bg-gray-200/15 hover:bg-gray-700/55 dark:hover:bg-gray-300/40 text-gray-800/65 dark:text-gray-200/65 hover:text-gray-50 hover:shadow-hue hover:shadow-gray-700/25 dark:hover:shadow-gray-300/15',
      readBtnStyles:
         'bg-blue-700/16 dark:bg-blue-200/15 hover:bg-blue-700/55 dark:hover:bg-blue-300/40 text-blue-800/65 dark:text-blue-200/65 hover:text-blue-50 hover:shadow-hue hover:shadow-blue-700/25 dark:hover:shadow-blue-300/15',
   },
];

export const otherProjects = [
   {
      titleEn: 'Blog App',
      titleSr: 'Блог Апликација',
      image: blogImg,
      descriptionEn:
         'A simple blogging app with a bookmark feature. Built with vanilla JavaScript using MVC architecture.',
      descriptionSr: `Једноставна блогинг апликација са функцијом обележавања артикала. Направљена са ванила JavaScript-ом користећи MVC архитектуру.`,
      techStack: [
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'blog',
      codeLink: 'https://github.com/DanijelMaksic/My-Blog-App',
      demoLink: 'https://danijelmaksic.github.io/My-Blog-App/',
      visitBtnStyles:
         'bg-blue-700/16 dark:bg-blue-200/15 hover:bg-blue-700/55 dark:hover:bg-blue-300/40 text-blue-800/65 dark:text-blue-200/65 hover:text-blue-50 hover:shadow-hue hover:shadow-blue-700/25 dark:hover:shadow-blue-300/15',
      readBtnStyles:
         'bg-slate-700/16 dark:bg-slate-200/15 hover:bg-slate-700/55 dark:hover:bg-slate-300/40 text-slate-800/65 dark:text-slate-200/65 hover:text-slate-50 hover:shadow-hue hover:shadow-slate-700/25 dark:hover:shadow-slate-300/15',
   },

   {
      titleEn: 'Old World History - Quiz',
      titleSr: 'Историја Старог Света - Квиз',
      image: quizImg,
      descriptionEn:
         'A quiz made to test your knowledge of the history of the old world.',
      descriptionSr:
         'Квиз направљен да тестира ваше знање историје старог света.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Redux Toolkit',
            icon: <SiRedux />,
         },
      ],
      projectURL: 'quiz',
      codeLink: 'https://github.com/DanijelMaksic/old-world-history-quiz',
      readBtnStyles:
         'bg-orange-700/16 dark:bg-orange-200/15 hover:bg-orange-700/55 dark:hover:bg-orange-300/40 text-orange-800/65 dark:text-orange-200/65 hover:text-orange-50 hover:shadow-hue hover:shadow-orange-700/25 dark:hover:shadow-orange-300/15',
   },

   {
      titleEn: 'useBook App',
      titleSr: 'useBook Апликација',
      image: useBookImg,
      descriptionEn:
         'App which uses REST API to fetch book data. Users can browse and save books.',
      descriptionSr:
         'Апликација која користи REST API за преузимање података о књигама. Корисници могу да разгледају и сачувају књиге.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'REST',
            icon: <TbApi />,
         },
      ],
      projectURL: 'use-book',
      readBtnStyles:
         'bg-orange-700/16 dark:bg-orange-200/15 hover:bg-orange-700/55 dark:hover:bg-orange-300/40 text-orange-800/65 dark:text-orange-200/65 hover:text-orange-50 hover:shadow-hue hover:shadow-orange-700/25 dark:hover:shadow-orange-300/15',
   },
];

function Projects() {
   const [open, setOpen] = useLocalStorage(false, 'showMoreProjects');
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         id="projects"
         className="flex flex-col gap-10 scroll-mt-24 md:px-0 xs:px-0"
      >
         <span className="text-[1.7rem] tracking-wide text-primary-800 font-bold text-center uppercase">
            {t('Projects.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:px-12 sm:px-0!">
            {featuredProjects.map((project) => (
               <ProjectPreview projectData={project} key={project.titleEn} />
            ))}
         </div>

         {!open && (
            <button
               onClick={() => setOpen((open) => !open)}
               className="flex items-center gap-2 self-center text-lg text-primary-600 rounded-lg pr-3 pl-4 py-1 shadow--sm hover:translate-y-1 transition dark:border dark:border-primary-200 dark:bg-primary-50"
            >
               <span>{t('Projects.show-more-btn')}</span>
               <FaCaretDown />
            </button>
         )}

         <motion.div
            initial={{ transform: 'translateY(70px)', opacity: 0 }}
            whileInView={{
               transform: open ? 'translateY(0px)' : '',
               opacity: 1,
            }}
            transition={{ duration: 0.8 }}
            className={`${open ? 'visible' : 'hidden'} flex flex-col gap-10`}
         >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:px-12 sm:px-0!">
               {otherProjects.map((project) => (
                  <ProjectPreview projectData={project} key={project.titleEn} />
               ))}
            </div>

            <a
               href="#projects"
               onClick={() => setOpen((open) => !open)}
               className="flex items-center gap-2 self-center text-lg text-primary-600 rounded-lg pr-3 pl-4 py-1 shadow--sm hover:translate-y-[-4px] transition dark:border dark:border-primary-200 dark:bg-primary-50"
            >
               <span>{t('Projects.show-less-btn')}</span>
               <FaCaretUp />
            </a>
         </motion.div>
      </motion.div>
   );
}

export default Projects;
