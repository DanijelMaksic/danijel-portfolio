import UseBookEnMdx from './use-book-en.mdx';
import UseBookSrMdx from './use-book-sr.mdx';
import MDXWrapper from '../MDXWrapper';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function UseBook() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

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
