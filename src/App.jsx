import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './../i18n';

import Layout from './ui/Layout';
import PageNotFound from './ui/PageNotFound';
import Home from './ui/home/Home';
import OchridGalleryStore from './ui/projects/ochridGalleryStore/OchridGalleryStore';
import OchridGalleryCMS from './ui/projects/ochridGalleryCMS/OchridGalleryCMS';
import Porta from './ui/projects/porta/Porta';
import Blog from './ui/projects/blog/Blog';
import Judgment from './ui/projects/judgment/Judgment';
import Quiz from './ui/projects/quiz/Quiz';
import UseBook from './ui/projects/useBook/useBook';
import useDynamicFavicon from './hooks/useDynamicFavicon';

function App() {
   useDynamicFavicon();

   return (
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
   );
}

export default App;
