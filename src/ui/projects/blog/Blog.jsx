import BlogEnMdx from './blog-en.mdx';
import BlogSrMdx from './blog-sr.mdx';
import MDXWrapper from '../MDXWrapper';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Blog() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <MDXWrapper>
         {currentLanguage === 'en' && <BlogEnMdx />}
         {currentLanguage === 'sr' && <BlogSrMdx />}
      </MDXWrapper>
   );
}

export default Blog;
