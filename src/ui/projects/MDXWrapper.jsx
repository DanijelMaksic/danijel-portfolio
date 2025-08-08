import { motion } from 'motion/react';
import { MDXProvider } from '@mdx-js/react';

function MDXWrapper({ children }) {
   return (
      <MDXProvider>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="pb-20"
         >
            {children}
         </motion.div>
      </MDXProvider>
   );
}

export default MDXWrapper;
