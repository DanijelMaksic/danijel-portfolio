import { useTranslation } from 'react-i18next';
import LanguageButton from './LanguageButton';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

function Navigation() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;
   const { isDarkMode, toggleDarkMode } = useDarkMode();
   const isMobile = useMediaQuery({ maxWidth: 768 });

   return (
      <nav className="text-base font-semibold text-primary-600">
         <ul className="flex gap-8 xs:gap-6 items-center">
            {pathname === '/' ? (
               <li className="flex items-center gap-10 xs:gap-8 xs:hidden">
                  <a
                     href="#projects"
                     className="hover:text-primary-700 transition"
                  >
                     {t('Header.nav-link-1')}
                  </a>
                  <a
                     href="#about"
                     className="hover:text-primary-700 transition text-nowrap"
                  >
                     {t('Header.nav-link-2')}
                  </a>
                  <a
                     href="#skills"
                     className="hover:text-primary-700 transition"
                  >
                     {t('Header.nav-link-3')}
                  </a>
               </li>
            ) : (
               <li>
                  <Link
                     to={'/'}
                     className="transition hover:text-primary-700 mr-3"
                  >
                     {t('Header.nav-link-4')}
                  </Link>
               </li>
            )}

            <div
               className={`h-5 w-1 border-r border-primary-400 ${
                  isMobile && pathname === '/' && 'xs:hidden'
               }`}
            />

            <li className="flex items-center gap-5 xs:gap-6">
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
