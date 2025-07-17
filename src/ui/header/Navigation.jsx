import { useTranslation } from 'react-i18next';
import LanguageButton from './LanguageButton';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;

   return (
      <nav className="text-base font-semibold text-primary-600">
         <ul className="flex gap-10 xs:gap-7 items-center">
            {pathname === '/' ? (
               <>
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
                        className="hover:text-primary-700 transition text-nowrap"
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
               </>
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

                  <Link to={-1} className="transition hover:text-primary-700">
                     Return
                  </Link>
               </>
            )}

            <LanguageButton />
         </ul>
      </nav>
   );
}

export default Navigation;
