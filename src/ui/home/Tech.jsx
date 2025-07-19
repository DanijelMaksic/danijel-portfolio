function Tech({ icon, name }) {
   return (
      <div className="text-primary-700 border border-primary-500/70 dark:border-primary-300 rounded-full px-3.5 py-1 flex items-center gap-2 text-base">
         {icon}
         {name}
      </div>
   );
}

export default Tech;
