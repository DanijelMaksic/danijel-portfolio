import { useTranslation } from 'react-i18next';
import MDXWrapper from '../MDXWrapper';
import OchridGalleryStoreEnMdx from './ochrid-gallery-store-en.mdx';
import OchridGalleryStoreSrMdx from './ochrid-gallery-store-sr.mdx';
import { useEffect } from 'react';

function OchridGalleryStore() {
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
         {currentLanguage === 'en' && <OchridGalleryStoreEnMdx />}
         {currentLanguage === 'sr' && <OchridGalleryStoreSrMdx />}
      </MDXWrapper>
   );
}

export default OchridGalleryStore;
