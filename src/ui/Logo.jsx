import { useTranslation } from 'react-i18next';

import LogoLatin from './../../assets/logo-latin-no-bg.png';
import LogoCyrillic from './../../assets/logo-cyrillic-no-bg.png';

function Logo() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <img
         src={currentLanguage === 'en' ? LogoLatin : LogoCyrillic}
         alt="Logo"
         className="h-9 min-w-9 opacity-80 dark:invert"
      />
   );
}

export default Logo;
