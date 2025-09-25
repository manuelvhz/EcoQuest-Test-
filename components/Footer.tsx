import React from 'react';
import { LeafIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-light dark:bg-card-dark shadow-inner mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-text-muted-light dark:text-text-muted-dark">
        <div className="flex justify-center items-center gap-2 mb-2">
          <LeafIcon className="h-6 w-6 text-primary" />
          <p className="text-xl font-bold font-display text-primary dark:text-primary-light">EcoQuest</p>
        </div>
        <p>&copy; {new Date().getFullYear()} EcoQuest. Hagamos del mundo un lugar más verde, un reto a la vez.</p>
      </div>
    </footer>
  );
};

export default Footer;
