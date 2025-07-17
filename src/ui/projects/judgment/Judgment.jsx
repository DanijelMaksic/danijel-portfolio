import JudgmentEnMdx from './judgment-en.mdx';
import JudgmentSrMdx from './judgment-sr.mdx';
import MDXWrapper from '../MDXWrapper';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Judgment() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <MDXWrapper>
         {currentLanguage === 'en' && <JudgmentEnMdx />}
         {currentLanguage === 'sr' && <JudgmentSrMdx />}
      </MDXWrapper>
   );
}

export default Judgment;
