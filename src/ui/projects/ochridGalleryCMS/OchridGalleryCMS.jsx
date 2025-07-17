import OchridGalleryCmsEnMdx from './ochrid-gallery-cms-en.mdx';
import OchridGalleryCmsSrMdx from './ochrid-gallery-cms-sr.mdx';
import MDXWrapper from './../MDXWrapper';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function OchridGalleryCMS() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <MDXWrapper>
         {currentLanguage === 'en' && <OchridGalleryCmsEnMdx />}
         {currentLanguage === 'sr' && <OchridGalleryCmsSrMdx />}
      </MDXWrapper>
   );
}

export default OchridGalleryCMS;
