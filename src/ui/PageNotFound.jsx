import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PageNotFound() {
   const { t } = useTranslation();

   return (
      <div className="bg-primary-50 dark:bg-primary-100 h-screen flex items-center justify-center text-primary-900">
         <div className="flex flex-col items-center gap-6 md:gap-4 xs:gap-6 bg-primary-100 dark:bg-primary-200/45 px-12 sm:px-4 sm:mx-12 py-10 shadow--sm dark:shadow-none rounded-xl mb-32 dark:border-2 dark:border-primary-200">
            <p className="text-5xl text-center font-semibold">
               {t('PageNotFound')}
            </p>
            <Link to="/">
               <button className="text-xl xs:text-2xl underlined-text text-primary-600">
                  &larr; &nbsp;{t('GoBack')}
               </button>
            </Link>
         </div>
      </div>
   );
}

export default PageNotFound;
