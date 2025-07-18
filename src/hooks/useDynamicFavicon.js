import { useEffect } from 'react';
import i18n from 'i18next';

const languageToFavicon = {
   en: '/../../assets/logo-latin.png',
   sr: '/../../assets/logo-cyrillic.png',
};

const useDynamicFavicon = () => {
   useEffect(() => {
      const updateFavicon = (lng) => {
         const faviconLink =
            document.querySelector("link[rel*='icon']") ||
            document.createElement('link');
         faviconLink.type = 'image/x-icon';
         faviconLink.rel = 'shortcut icon';
         faviconLink.href =
            languageToFavicon[lng] || '/../../assets/logo-latin.png';

         document.head.appendChild(faviconLink);
      };

      // Initial set
      updateFavicon(i18n.language);

      // Listen to language changes
      const onLanguageChanged = (lng) => {
         updateFavicon(lng);
      };

      i18n.on('languageChanged', onLanguageChanged);

      return () => {
         i18n.off('languageChanged', onLanguageChanged);
      };
   }, []);
};

export default useDynamicFavicon;
