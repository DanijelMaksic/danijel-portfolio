import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './../i18n';
import { DarkModeProvider } from './contexts/DarkModeContext';

import Layout from './ui/Layout';
import Home from './ui/home/Home';
import Blog from './ui/projects/blog/Blog';
import Quiz from './ui/projects/quiz/Quiz';
import Porta from './ui/projects/porta/Porta';
import PageNotFound from './ui/PageNotFound';
import UseBook from './ui/projects/useBook/useBook';
import Judgment from './ui/projects/judgment/Judgment';
import OchridGalleryCMS from './ui/projects/ochridGalleryCMS/OchridGalleryCMS';
import OchridGalleryStore from './ui/projects/ochridGalleryStore/OchridGalleryStore';

function App() {
   return (
      <DarkModeProvider>
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route
                     path="/ochrid-gallery-store"
                     element={<OchridGalleryStore />}
                  />
                  <Route
                     path="/ochrid-gallery-cms"
                     element={<OchridGalleryCMS />}
                  />
                  <Route path="/porta" element={<Porta />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/judgment" element={<Judgment />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/use-book" element={<UseBook />} />
               </Route>

               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </BrowserRouter>
      </DarkModeProvider>
   );
}

export default App;
