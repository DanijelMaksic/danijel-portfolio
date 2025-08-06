import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useMediaQuery } from 'react-responsive';

function ArticleImage({ image, imageMobile, alt, isResponsive }) {
   const { isDarkMode } = useDarkMode();
   const isMobile = useMediaQuery({ maxWidth: 768 });

   useEffect(() => {
      const zoom = mediumZoom('.parent img', {
         margin: isMobile ? 20 : 60,
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
   }, [isDarkMode]);

   if (isResponsive)
      return (
         <div className="parent grid grid-cols-[3fr_1fr] gap-6 lg:grid-cols-1 mb-2">
            <img
               src={image}
               data-zoom-src={image}
               loading="lazy"
               alt={alt}
               className="rounded-xl shadow h-91 object-cover lg:h-full dark:opacity-90"
            />
            <img
               src={imageMobile}
               data-zoom-src={imageMobile}
               loading="lazy"
               alt={alt}
               className="rounded-xl shadow h-91 object-cover lg:hidden  dark:opacity-90"
            />
         </div>
      );

   if (!isResponsive)
      return (
         <div className="parent self-center justify-self-center mb-2">
            <img
               src={image}
               alt={alt}
               className="rounded-xl shadow h-110 lg:h-full  dark:opacity-90"
            />
         </div>
      );
}

export default ArticleImage;
