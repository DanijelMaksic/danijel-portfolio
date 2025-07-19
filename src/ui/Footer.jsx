import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

function Footer() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;

   return (
      <div className="mb-12 px-8 py-6 flex flex-col gap-3 items-center w-3xl lg:w-10/12 xs:w-full self-center backdrop-blur-lg rounded-xl mt-6 shadow-sm bg-white/50 dark:bg-black/20 overflow-hidden">
         <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center gap-2 rounded-lg w-fit">
               <Link
                  to="https://github.com/DanijelMaksic"
                  target="_blank"
                  className="hover:bg-primary-400/40 transition p-2 rounded-md opacity-85 hover:opacity-100 dark:hover:bg-primary-400/30"
               >
                  <FaGithub className="size-5" />
               </Link>

               <div className="h-5 w-1 border-r border-primary-400"></div>

               <Link
                  to="#"
                  target="_blank"
                  className="hover:bg-primary-400/40 transition p-2 rounded-md opacity-85 hover:opacity-100 dark:hover:bg-primary-400/30"
               >
                  <FaLinkedinIn className="size-5" />
               </Link>
            </div>

            {pathname === '/' && (
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
               {t('Footer.p2')}
            </span>
         </div>
      </div>
   );
}

export default Footer;
