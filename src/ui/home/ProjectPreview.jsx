import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Tech from './Tech';

function ProjectPreview({ projectData }) {
   const {
      techStack,
      titleEn,
      titleSr,
      image,
      descriptionEn,
      descriptionSr,
      projectURL,
   } = projectData;
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <Link
         to={`/${projectURL}`}
         className="rounded-xl flex flex-col shadow-[0_1px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] dark:border dark:border-primary-200 overflow-hidden hover:translate-y-[-10px] transition hover:opacity-90 p-2 gap-2 dark:bg-primary-50 dark:hover:opacity-100 dark:hover:brightness-115"
      >
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
      </Link>
   );
}

export default ProjectPreview;
