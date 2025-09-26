import React from 'react';
import { LeafIcon, SunIcon, MoonIcon } from './icons';
import type { Page, User } from '../types';

interface HeaderProps {
  user: User;
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = page === currentPage;
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`px-4 py-2 rounded-md text-md font-display font-bold transition-colors duration-200 ${
        isActive
          ? 'bg-primary/20 text-primary-dark dark:text-primary-light'
          : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ user, currentTheme, toggleTheme, onNavigate, currentPage }) => {
  return (
    <header className="bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-2xl font-bold font-display text-primary dark:text-primary-light">
            <LeafIcon className="h-8 w-8" />
            <span>EcoQuest</span>
          </button>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink page="home" currentPage={currentPage} onNavigate={onNavigate}>Inicio</NavLink>
            <NavLink page="challenges" currentPage={currentPage} onNavigate={onNavigate}>Retos</NavLink>
            <NavLink page="quiz" currentPage={currentPage} onNavigate={onNavigate}>Quiz Diario</NavLink>
            <NavLink page="leaderboard" currentPage={currentPage} onNavigate={onNavigate}>Ranking</NavLink>
            <NavLink page="library" currentPage={currentPage} onNavigate={onNavigate}>Biblioteca</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              {currentTheme === 'light' ? <MoonIcon className="h-6 w-6 text-gray-600" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
            </button>
            <button onClick={() => onNavigate('progress')} className="flex items-center gap-2">
              <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border-2 border-primary" />
              <span className="hidden sm:inline font-bold">{user.name}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;