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
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';
import { SiReactquery, SiRedux, SiZod, SiReactrouter } from 'react-icons/si';
import ochridGalleryStoreImg from './../../../assets/ochrid-gallery-store.webp';
import ochridGalleryCmsImg from './../../../assets/ochrid-gallery-cms.webp';
import portaImg from './../../../assets/porta.webp';
import blogImg from './../../../assets/blog.webp';
import judgmentImg from './../../../assets/judgment.webp';
import quizImg from './../../../assets/quiz.webp';
import useBookImg from './../../../assets/use-book.webp';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

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
            name: 'Tailwind CSS',
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
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'ochrid-gallery-store',
      demoLink: 'https://ochrid-gallery.vercel.app/',
   },

   {
      titleEn: 'Ochrid Gallery CMS',
      titleSr: 'Охридска Галерија CMS',
      image: ochridGalleryCmsImg,
      descriptionEn:
         'A Content Management System (CMS) app for a fictional gallery. Limited only to the employees, it includes inventory and order management.',
      descriptionSr:
         'CMS апликација за фикционалну галерију. Ограничена само за запослене, ова апликација садржи менаџмент инвентара и поруџбина.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'React Query',
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
            name: 'Framer Motion',
            icon: <TbBrandFramerMotion />,
         },
      ],
      projectURL: 'ochrid-gallery-cms',
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
   },

   {
      titleEn: 'Blog App',
      titleSr: 'Блог Апликација',
      image: blogImg,
      descriptionEn:
         'A simple blogging app with a bookmark feature. Built with vanilla JavaScript using MVC architecture.',
      descriptionSr:
         'Једноставна блогинг апликација са функцијом обележавања артикала. Направљена са ванила JavaScript-ом користећи MVC архитектуру.',
      techStack: [
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'blog',
      codeLink: 'https://github.com/DanijelMaksic/My-Blog-App',
   },
];

export const otherProjects = [
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
   },

   {
      titleEn: 'Old World History - Quiz',
      titleSr: 'Историја Старог Света - Квиз',
      image: quizImg,
      descriptionEn:
         'A quiz made to test your knowledge of the history of the old world.',
      descriptionSr:
         'Квиз направљен да тестира твоје знање историје старог света.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Redux Toolkit',
            icon: <SiRedux />,
         },
      ],
      projectURL: 'quiz',
      codeLink: '/Code Link',
      demoLink: '/Demo Link',
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
            name: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
         },
      ],
      projectURL: 'use-book',
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
         className="my-30 flex flex-col gap-10 scroll-mt-24 md:px-12 xs:px-2"
      >
         <span className="text-4xl text-primary-800 font-bold">
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
               className="flex items-center gap-2 self-center text-lg text-primary-600 rounded-md pr-3 pl-4 py-1 shadow--sm hover:translate-y-1 transition"
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
               className="flex items-center gap-2 self-center text-lg text-primary-600 rounded-md pr-3 pl-4 py-1 shadow--sm hover:translate-y-[-4px] transition"
            >
               <span>{t('Projects.show-less-btn')}</span>
               <FaCaretUp />
            </a>
         </motion.div>
      </motion.div>
   );
}

export default Projects;
