import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import MDXWrapper from '../MDXWrapper';
import UseBookEnMdx from './use-book-en.mdx';
import UseBookSrMdx from './use-book-sr.mdx';

function UseBook() {
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
         {currentLanguage === 'en' && <UseBookEnMdx />}
         {currentLanguage === 'sr' && <UseBookSrMdx />}
      </MDXWrapper>
   );
}

export default UseBook;
