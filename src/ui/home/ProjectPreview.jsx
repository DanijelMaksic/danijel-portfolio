import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { LuBookOpen } from 'react-icons/lu';

import Tech from './Tech';
import { Link } from 'react-router-dom';

function ProjectPreview({ projectData }) {
   const {
      techStack,
      titleEn,
      titleSr,
      image,
      descriptionEn,
      descriptionSr,
      projectURL,
      demoLink,
      visitBtnStyles,
      readBtnStyles,
   } = projectData;
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <div className="rounded-xl flex flex-col shadow-[0_1px_4px_rgba(0,0,0,0.3)] dark:border dark:border-primary-200 overflow-hidden transition p-2 gap-2 dark:bg-primary-50">
         <img
            src={image}
            loading="lazy"
            alt={currentLanguage === 'en' ? titleEn : titleSr}
            className="w-full bg-primary-900 text-primary-50 h-56 rounded-xl object-cover shadow-sm dark:opacity-90"
         />

         <div className="flex flex-col gap-2 p-3">
            <h4 className="text-2xl font-semibold text-primary-900">
               {currentLanguage === 'en' ? titleEn : titleSr}
            </h4>

            <span className="text-lg text-primary-600 mb-3">
               {currentLanguage === 'en' ? descriptionEn : descriptionSr}
            </span>

            <div className="flex items-center gap-2 flex-wrap">
               {techStack.map((tech) => (
                  <Tech icon={tech.icon} name={tech.name} key={tech.name} />
               ))}
            </div>
         </div>

         <div className="flex items-center justify-center gap-2 mt-2">
            {demoLink && (
               <Link
                  to={demoLink}
                  target="_blank"
                  className={`flex items-center justify-center gap-2 rounded-lg w-full py-2.5 font-semibold hover:-translate-y-1 transition font-mono ease-out hover:saturate-120 ${visitBtnStyles}`}
               >
                  <span>Visit</span>
                  <FiExternalLink className="stroke-[2.5px]" />
               </Link>
            )}

            <Link
               to={projectURL}
               className={`flex items-center ease-out justify-center gap-2 rounded-lg w-full py-2.5 font-semibold hover:-translate-y-1 hover:saturate-120 transition font-mono ${readBtnStyles}`}
            >
               <span>Read more</span>
               <LuBookOpen className="stroke-[2.5px]" />
            </Link>
         </div>
      </div>
   );
}

export default ProjectPreview;
