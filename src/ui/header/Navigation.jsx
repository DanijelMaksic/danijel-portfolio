import { useTranslation } from 'react-i18next';
import LanguageButton from './LanguageButton';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

function Navigation() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;
   const { isDarkMode, toggleDarkMode } = useDarkMode();

   return (
      <nav className="text-base font-semibold text-primary-600">
         <ul className="flex gap-10 xs:gap-3 items-center">
            {pathname === '/' ? (
               <li className="flex items-center gap-10 xs:gap-7 xs:hidden">
                  <div>
                     <a
                        href="#projects"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-1')}
                     </a>
                  </div>
                  <div>
                     <a
                        href="#about"
                        className="hover:text-primary-700 transition text-nowrap"
                     >
                        {t('Header.nav-link-2')}
                     </a>
                  </div>
                  <div>
                     <a
                        href="#skills"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-3')}
                     </a>
                  </div>
               </li>
            ) : (
               <>
                  <li>
                     <a href="#about" className="text-white invisible">
                        {t('Header.nav-link-1')}
                     </a>
                  </li>
                  <li>
                     <a
                        href="#skills"
                        className="text-white invisible pr-[0.162rem]"
                     >
                        Skill
                     </a>
                  </li>

                  <li>
                     <Link
                        to={'/'}
                        className="transition hover:text-primary-700"
                     >
                        Return
                     </Link>
                  </li>
               </>
            )}

            <li className="flex items-center gap-5 ml-3 xs:gap-7">
               <button
                  role="button"
                  aria-label="Light/Dark Mode Button"
                  className="hover:bg-primary-200 dark:hover:bg-primary-400/40 p-2 rounded-lg transition"
                  onClick={toggleDarkMode}
               >
                  {isDarkMode ? (
                     <HiOutlineMoon className="size-6 transition-custom" />
                  ) : (
                     <HiOutlineSun className="size-6 transition-custom" />
                  )}
               </button>

               <LanguageButton />
            </li>
         </ul>
      </nav>
   );
}

export default Navigation;
