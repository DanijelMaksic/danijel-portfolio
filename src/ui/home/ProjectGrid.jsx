import { SiRedux, SiZod } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa6';
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';

function ProjectGrid() {
   return (
      <div className="grid grid-cols-10 grid-rows-6 gap-[1px] relative md:hidden">
         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl p-3 absolute top-8 left-6 md:top-12 xs:top-6 md:left-22 xs:left-4 hover:scale-110 transition z-4 shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
            <FaReact className="size-18 md:size-26 xs:size-18 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl p-3 absolute top-21 md:top-30 xs:top-21 right-14 md:right-26 xs:right-13 hover:scale-110 transition z-4 shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
            <RiNextjsFill className="size-16 md:size-24 xs:size-16 text-primary-600 rounded-xl" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-3 absolute bottom-9 md:bottom-15 xs:bottom-10 left-14 md:left-30 sm:left-16! hover:scale-110 transition z-4">
            <FaJs className="size-14 md:size-22 xs:size-14 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_8px_rgba(0,0,0,0.2)] p-3 absolute top-22 md:top-30 xs:top-22 left-37 md:left-60 xs:left-34 hover:scale-108 transition z-4">
            <SiRedux className="size-10 md:size-16 xs:size-10 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_8px_rgba(0,0,0,0.2)] p-3 absolute bottom-4 md:bottom-6 xs:bottom-5 right-14 md:right-22 xs:right-13 hover:scale-108 transition z-4">
            <RiTailwindCssFill className="size-10 md:size-16 xs:size-10 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.2)] p-2.5 absolute top-3 md:top-8 xs:top-3 right-7 md:right-12 xs:right-7 hover:scale-108 transition z-4">
            <SiZod className="size-5 md:size-8 xs:size-6 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.2)] p-2.5 absolute top-40 md:top-56 left-[-10px] hover:scale-108 transition z-4">
            <FaHtml5 className="size-5 md:size-8 xs:size-6 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_8px_rgba(0,0,0,0.2)] p-3 absolute bottom-[-15px] left-38 md:left-64 xs:left-38 hover:scale-108 transition z-4">
            <FaCss3Alt className="size-7 md:size-10 xs:size-7 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_8px_rgba(0,0,0,0.2)] p-2.5 absolute top-[-15px] left-50 md:left-77 xs:left-47 hover:scale-108 transition z-4">
            <FaSass className="size-7 md:size-10 xs:size-7 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.2)] p-2.5 absolute bottom-16 md:bottom-28 xs:bottom-16 right-39 md:right-60 xs:right-37 hover:scale-108 transition z-4">
            <RiSupabaseFill className="size-5 md:size-8 xs:size-6 text-primary-600" />
         </span>

         <span className="bg-white/50 dark:bg-black/20 dark:border dark:border-primary-300/70 dark:hover:border-primary-300/90 backdrop-blur-sm rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.2)] p-2.5 absolute bottom-28 md:bottom-44 xs:bottom-28 right-[-15px] hover:scale-108 transition z-10">
            <TbBrandFramerMotion className="size-5 md:size-8 xs:size-6 text-primary-600" />
         </span>

         <span className="border border-primary-400/20 dark:border-primary-400/10 rounded-tl-xl"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10 rounded-tr-xl"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/60 dark:border-primary-400/30"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/40 dark:border-primary-400/20"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10 rounded-bl-xl"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10"></span>
         <span className="border border-primary-400/20 dark:border-primary-400/10 rounded-br-xl"></span>
      </div>
   );
}

export default ProjectGrid;
