import { useTranslation } from 'react-i18next';

function TableOfContents({ h2Arr }) {
   const { t } = useTranslation();
   const ACRONYMS = new Set(['qa', 'ui', 'api', 'css', 'html', 'js', 'ts']);
   const LOWERCASE_WORDS = new Set([
      // English
      'a',
      'an',
      'the',
      'and',
      'or',
      'but',
      'to',
      'from',
      'in',
      'on',
      'at',
      'for',
      'with',
      // Serbian
      'са',
      'на',
      'у',
      'и',
      'о',
      'или',
      'али',
      'за',
      'од',
      'до',
      'по',
      'из',
   ]);

   const formatHeading = (slug) =>
      slug
         .split('-')
         .map((word, index) => {
            if (ACRONYMS.has(word.toLowerCase())) return word.toUpperCase();
            if (index !== 0 && LOWERCASE_WORDS.has(word.toLowerCase()))
               return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1);
         })
         .join(' ');

   const handleAnchorClick = (e, id) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
   };

   return (
      <div className="mx-32 md:mx-16 sm:mx-0! flex flex-col gap-5">
         <span className="font-bold border-b border-primary-400/80 dark:border-primary-200 pb-3">
            {t('TableOfContents')}
         </span>

         <div className="flex flex-col gap-3">
            {h2Arr.map((item) => (
               <a
                  onClick={(e) => handleAnchorClick(e, item)}
                  href={`#${item}`}
                  className="text-primary-600 hover:text-primary-900 dark:text-primary-600/90 bg-primary-100/50 hover:bg-primary-200/80 dark:bg-primary-100/60 py-2 px-4 rounded-lg border border-primary-400/80 dark:border-primary-200/80 text-lg  dark:hover:text-primary-900"
               >
                  {formatHeading(item)}
               </a>
            ))}
         </div>
      </div>
   );
}

export default TableOfContents;
