import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import MDXWrapper from '../MDXWrapper';
import PortaEnMdx from './porta-en.mdx';
import PortaSrMdx from './porta-sr.mdx';

function Porta() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

   useEffect(() => {
      let timer = setTimeout(() => {
         document.documentElement.style.scrollBehavior = 'smooth';
      }, 1000);

      return () => {
         clearTimeout(timer);
      };
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <MDXWrapper>
         {currentLanguage === 'en' && <PortaEnMdx />}
         {currentLanguage === 'sr' && <PortaSrMdx />}
      </MDXWrapper>
   );
}

export default Porta;
