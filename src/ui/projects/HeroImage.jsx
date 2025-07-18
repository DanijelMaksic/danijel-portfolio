import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import Tech from '../home/Tech';
import { featuredProjects, otherProjects } from '../home/Projects';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

function HeroImage({ image, title }) {
   const featured = featuredProjects.map((item) => item);
   const other = otherProjects.map((item) => item);

   // Title is needed to figure out which is the current project, so we can get its techStack
   const [featuredProject] = featured.filter(
      (item) => item.titleEn === title || item.titleSr === title
   );
   const [otherProject] = other.filter(
      (item) => item.titleEn === title || item.titleSr === title
   );

   // Image Zoom logic
   useEffect(() => {
      const zoom = mediumZoom('.parent img', {
         margin: 100,
      });

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
   }, []);

   return (
      <div className="mt-10 mb-12 flex flex-col shadow rounded-2xl parent mx-[8rem] sm:mx-[4rem] xs:mx-0">
         <img
            src={image}
            className="rounded-xl"
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
