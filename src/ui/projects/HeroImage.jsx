import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import Tech from '../home/Tech';
import { featuredProjects, otherProjects } from '../home/Projects';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useMediaQuery } from 'react-responsive';

function HeroImage({ image, title }) {
   const featured = featuredProjects.map((item) => item);
   const other = otherProjects.map((item) => item);
   const { isDarkMode } = useDarkMode();
   const isMobile = useMediaQuery({ maxWidth: 768 });

   // Title is needed to figure out which is the current project, so we can get its techStack
   const [featuredProject] = featured.filter(
      (item) => item.titleEn === title || item.titleSr === title
   );
   const [otherProject] = other.filter(
      (item) => item.titleEn === title || item.titleSr === title
   );

   // Image Zoom logic
   useEffect(() => {
      let zoom;

      if (isDarkMode) {
         zoom = mediumZoom('.parent img', {
            margin: isMobile ? 22 : 100,

            background: 'black',
         });
      }

      if (!isDarkMode) {
         zoom = mediumZoom('.parent img', {
            margin: isMobile ? 22 : 100,

            background: 'white',
         });
      }

      const handleClick = (e) => {
         if (zoom.getZoomedImage() && !e.target.closest('.parent img')) {
            zoom.close();
         }
      };

      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener('click', handleClick);
         zoom.detach();
      };
   }, [isDarkMode]);

   return (
      <div className="mt-10 mb-12 flex flex-col shadow rounded-2xl parent mx-[7rem] md:mx-[4rem] xs:mx-0 dark:border dark:border-primary-200 dark:bg-primary-50">
         <img
            src={image}
            data-zoom-src={image}
            loading="lazy"
            className="rounded-xl dark:opacity-90"
            alt={featuredProject?.titleEn || otherProject?.titleEn}
         />

         <div className="py-4 px-6 flex justify-between items-center gap-6">
            <div className="flex items-center gap-2 flex-wrap ">
               {featuredProject?.techStack.map((tech) => (
                  <Tech icon={tech.icon} name={tech.name} key={tech.name} />
               )) ||
                  otherProject?.techStack.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
            </div>

            <div className="flex items-center gap-3">
               {featuredProject?.codeLink !== undefined ||
               otherProject?.codeLink !== undefined ? (
                  <Link
                     to={featuredProject?.codeLink || otherProject?.codeLink}
                     target="_blank"
                     className="hover:bg-primary-200 transition p-2 rounded-md"
                  >
                     <FaGithub className="size-6" />
                  </Link>
               ) : null}

               {featuredProject?.demoLink !== undefined ||
               otherProject?.demoLink !== undefined ? (
                  <Link
                     to={featuredProject?.demoLink || otherProject?.demoLink}
                     target="_blank"
                     className="hover:bg-primary-200 transition p-2 rounded-md"
                  >
                     <FiExternalLink className="size-6" />
                  </Link>
               ) : null}
            </div>
         </div>
      </div>
   );
}

export default HeroImage;
