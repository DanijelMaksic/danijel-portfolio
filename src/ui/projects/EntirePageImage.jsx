import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

function EntirePageImage({ image, alt }) {
   useEffect(() => {
      const zoom = mediumZoom('.parent img', {
         margin: 100,
      });

      const handleClick = (e) => {
         if (zoom.getZoomedImage() && !e.target.closest('.parent span')) {
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
      <div className="self-center justify-self-center mx-13 xs:mx-0">
         <img src={image} alt={alt} className="rounded-xl shadow" />
      </div>
   );
}

export default EntirePageImage;
