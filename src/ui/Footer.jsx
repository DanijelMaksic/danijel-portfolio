import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { useMediaQuery } from 'react-responsive';

function Footer() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;

   const startYear = 2025;
   const currentYear = new Date().getFullYear();

   const isMobile = useMediaQuery({ maxWidth: 450 });

   return (
      <div className="mb-12 px-8 py-6 flex flex-col gap-3 items-center w-3xl lg:w-10/12 sm:w-full! self-center backdrop-blur-lg rounded-xl mt-6 shadow-sm bg-white/50 dark:bg-black/30 overflow-hidden">
         <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center gap-2 rounded-lg w-fit">
               <Link
                  to="https://github.com/DanijelMaksic"
                  target="_blank"
                  aria-label="Github"
                  className="hover:bg-primary-400/40 transition p-2 rounded-md opacity-85 hover:opacity-100 dark:hover:bg-primary-400/30"
               >
                  <FaGithub className="size-5" />
               </Link>

               <div className="h-5 w-1 border-r border-primary-400"></div>

               <Link
                  to="https://www.linkedin.com/in/danijel-maksi%C4%87-825025378"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:bg-primary-400/40 transition p-2 rounded-md opacity-85 hover:opacity-100 dark:hover:bg-primary-400/30"
               >
                  <FaLinkedinIn className="size-5" />
               </Link>
            </div>

            {pathname === '/' && !isMobile && (
               <ul className="flex items-center gap-10 xs:gap-7 text-lg text-primary-600">
                  <li>
                     <a
                        href="#projects"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-1')}
                     </a>
                  </li>
                  <li>
                     <a
                        href="#about"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-2')}
                     </a>
                  </li>
                  <li>
                     <a
                        href="#skills"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-3')}
                     </a>
                  </li>
               </ul>
            )}
         </div>

         <div className="mt-18 flex flex-col gap-3 items-center">
            <span className="text-base text-primary-700 text-center">
               {t('Footer.p1-part1')}
               <strong>React</strong>
               {t('Footer.p1-part2')}
               <strong>MDX</strong>
               {t('Footer.p1-part3')}
               <strong>Vercel</strong>
               {t('Footer.p1-part4')}.
            </span>

            <span className="text-base text-primary-700 text-center">
               {t('Footer.copyright-1')}
               <span>
                  {startYear}
                  <span className="font-bold">−</span>
                  {currentYear}
               </span>

               {t('Footer.copyright-2')}
            </span>
         </div>
      </div>
   );
}

export default Footer;
