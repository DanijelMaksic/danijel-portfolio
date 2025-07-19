import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import enFlag from './../../../assets/en-flag.png';
import srFlag from './../../../assets/sr-flag.png';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { AnimatePresence } from 'motion/react';

const languages = [
   {
      lang: 'Српски',
      code: 'sr',
      flag: srFlag,
   },
   {
      lang: 'English',
      code: 'en',
      flag: enFlag,
   },
];

function LanguageButton() {
   const [open, setOpen] = useState(false);
   const { i18n } = useTranslation();

   const ref = useOutsideClick(() => setOpen((open) => !open));

   const currentLanguage = i18n.language;
   const flag = currentLanguage === 'en' ? enFlag : srFlag;

   const [language, setLanguage] = useState({
      currentLanguage,
      flag,
   });

   const changeLanguage = (languageCode) => {
      i18n.changeLanguage(languageCode);
      setLanguage((prevState) => ({
         ...prevState,
         currentLanguage: languageCode,
         flag: `/assets/${languageCode}-flag.png`,
      }));
   };

   return (
      <div className="w-7">
         <img
            src={language.flag}
            alt="Language Button"
            onClick={() => setOpen((open) => !open)}
            className="size-7 rounded-full border border-primary-300 transition-200 cursor-pointer dark:opacity-90"
         />

         <AnimatePresence>
            {open && (
               <ul
                  className="absolute z-10 space-y-1 p-1 mt-3 min-w-[9.9rem] text-xl lg:right-0 rounded-2xl bg-primary border border-primary-300 dark:bg-primary-50 dark:border-primary-200 shadow-lg overflow-auto cursor-pointer"
                  ref={ref}
                  onClick={() => setOpen(false)}
               >
                  {languages.map((item) => (
                     <li
                        className="flex justify-between items-center relative font-normal rounded-xl py-2 pr-4 pl-5 hover:bg-primary-200 dark:hover:bg-primary-200 duration-75 [&_img]:opacity-80 dark:[&_img]:opacity-80 group"
                        key={item.lang}
                        onClick={() => {
                           changeLanguage(item.code);
                           setLanguage({
                              language: item.code,
                              flag: item.flag,
                           });
                        }}
                     >
                        {item.lang}
                        <img
                           className="border border-primary-300 rounded-full group-hover:opacity-100 dark:group-hover:opacity-95 transition-[opacity] size-7"
                           src={item.flag}
                           alt={item.lang}
                        />
                     </li>
                  ))}
               </ul>
            )}
         </AnimatePresence>
      </div>
   );
}

export default LanguageButton;
