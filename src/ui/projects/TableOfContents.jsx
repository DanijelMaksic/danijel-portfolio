import { useTranslation } from 'react-i18next';

function TableOfContents({ h2Arr }) {
   const { t } = useTranslation();

   const handleAnchorClick = (e, id) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
   };

   return (
      <div className="mx-32 md:mx-16 xs:mx-0 flex flex-col gap-5">
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
                  {item.charAt(0).toUpperCase() +
                     item.slice(1).replaceAll('-', ' ')}
               </a>
            ))}
         </div>
      </div>
   );
}

export default TableOfContents;
