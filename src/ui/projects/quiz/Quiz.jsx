import QuizEnMdx from './quiz-en.mdx';
import QuizSrMdx from './quiz-sr.mdx';
import MDXWrapper from '../MDXWrapper';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Quiz() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <MDXWrapper>
         {currentLanguage === 'en' && <QuizEnMdx />}
         {currentLanguage === 'sr' && <QuizSrMdx />}
      </MDXWrapper>
   );
}

export default Quiz;
