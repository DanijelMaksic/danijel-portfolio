import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

function Layout() {
   const location = useLocation();
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;
   const pathname = location.pathname;

   return (
      <div>
         <div className="background-gradient bg-primary dark:bg-primary transition">
            <main
               className={`mx-auto w-full flex flex-col min-h-screen text-xl antialiased px-4 text-primary-800 ${
                  pathname !== '/' ? 'max-w-5xl' : 'max-w-5xl'
               } ${
                  currentLanguage === 'en' ? 'font-default' : 'font-cyrillic'
               }`}
            >
               <Header />
               <Outlet />
               <Footer />
            </main>
         </div>
      </div>
   );
}

export default Layout;
