import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

function ArticleImage({ image, imageMobile, alt, isResponsive }) {
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

   if (isResponsive)
      return (
         <div className="parent grid grid-cols-[3fr_1fr] gap-6 lg:grid-cols-1 mb-2">
            <img
               src={image}
               alt={alt}
               className="rounded-xl shadow h-91 object-cover lg:h-full"
            />
            <img
               src={imageMobile}
               alt={alt}
               className="rounded-xl shadow h-91 object-cover lg:hidden"
            />
         </div>
      );

   if (!isResponsive)
      return (
         <div className="parent self-center justify-self-center mb-2">
            <img
               src={image}
               alt={alt}
               className="rounded-xl shadow h-110 lg:h-full"
            />
         </div>
      );
}

export default ArticleImage;
