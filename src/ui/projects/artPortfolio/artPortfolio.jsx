import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import MDXWrapper from '../MDXWrapper';
import ArtPortfolioEnMdx from './art-portfolio-en.mdx';
import ArtPortfolioSrMdx from './art-portfolio-sr.mdx';

function ArtPortfolio() {
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
         {currentLanguage === 'en' && <ArtPortfolioEnMdx />}
         {currentLanguage === 'sr' && <ArtPortfolioSrMdx />}
      </MDXWrapper>
   );
}

export default ArtPortfolio;
