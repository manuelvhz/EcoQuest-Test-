import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgressPage from './pages/ProgressPage';
import ChallengesPage from './pages/ChallengesPage';
import LeaderboardPage from './pages/LeaderboardPage';
import LibraryPage from './pages/LibraryPage';
import AboutPage from './pages/AboutPage';
import QuizPage from './pages/QuizPage';
import useTheme from './hooks/useTheme';
import { initialUser, initialChallenges, badges } from './constants/mockData';
import type { User, Challenge, Page, Badge } from './types';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [user, setUser] = useState<User>(initialUser);
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [hasCompletedQuizToday, setHasCompletedQuizToday] = useState(false);

  useEffect(() => {
    const lastCompletionDate = localStorage.getItem('ecoQuestQuizCompletedDate');
    if (lastCompletionDate) {
      const today = new Date().toDateString();
      if (lastCompletionDate === today) {
        setHasCompletedQuizToday(true);
      }
    }
  }, []);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const completeChallenge = useCallback((challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge || challenge.isCompleted) return;

    setChallenges(prev => prev.map(c => c.id === challengeId ? { ...c, isCompleted: true } : c));

    setUser(prevUser => {
      const newPoints = prevUser.points + challenge.points;
      const newXp = prevUser.xp + challenge.points;
      let newLevel = prevUser.level;
      let xpToNext = prevUser.xpToNextLevel;
      let currentXp = newXp;
      
      while (currentXp >= xpToNext) {
          currentXp -= xpToNext;
          newLevel++;
          xpToNext = Math.floor(xpToNext * 1.5);
      }
      
      const updatedChallenges = challenges.map(c => c.id === challengeId ? { ...c, isCompleted: true } : c);
      const newBadges: Badge[] = [...prevUser.badges];
      
      if (updatedChallenges.filter(c => c.category === 'Reciclaje' && c.isCompleted).length >= 1 && !prevUser.badges.some(b => b.id === 1)) {
        newBadges.push(badges.find(b => b.id === 1)!);
      }
      if (updatedChallenges.filter(c => c.category === 'Energía' && c.isCompleted).length >= 5 && !prevUser.badges.some(b => b.id === 2)) {
        newBadges.push(badges.find(b => b.id === 2)!);
      }
      if (updatedChallenges.filter(c => c.category === 'Agua' && c.isCompleted).length >= 5 && !prevUser.badges.some(b => b.id === 3)) {
        newBadges.push(badges.find(b => b.id === 3)!);
      }
      if (newLevel >= 10 && !prevUser.badges.some(b => b.id === 4)) {
        newBadges.push(badges.find(b => b.id === 4)!);
      }
      if (updatedChallenges.filter(c => c.category === 'Comunidad' && c.isCompleted).length >= 1 && !prevUser.badges.some(b => b.id === 5)) {
        newBadges.push(badges.find(b => b.id === 5)!);
      }

      return {
        ...prevUser,
        points: newPoints,
        xp: currentXp,
        level: newLevel,
        xpToNextLevel: xpToNext,
        badges: newBadges,
      };
    });
  }, [challenges]);

  const handleQuizComplete = (points: number) => {
    setUser(prevUser => {
        const newPoints = prevUser.points + points;
        const newXp = prevUser.xp + points;
        let newLevel = prevUser.level;
        let xpToNext = prevUser.xpToNextLevel;
        let currentXp = newXp;
        
        while (currentXp >= xpToNext) {
            currentXp -= xpToNext;
            newLevel++;
            xpToNext = Math.floor(xpToNext * 1.5);
        }

        return {
            ...prevUser,
            points: newPoints,
            xp: currentXp,
            level: newLevel,
            xpToNextLevel: xpToNext,
        };
    });
    const today = new Date().toDateString();
    localStorage.setItem('ecoQuestQuizCompletedDate', today);
    setHasCompletedQuizToday(true);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'progress':
        return <ProgressPage user={user} challenges={challenges} />;
      case 'challenges':
        return <ChallengesPage challenges={challenges} onCompleteChallenge={completeChallenge} />;
      case 'leaderboard':
        return <LeaderboardPage user={user} />;
      case 'library':
        return <LibraryPage />;
      case 'about':
        return <AboutPage />;
      case 'quiz':
          return <QuizPage onQuizComplete={handleQuizComplete} hasCompletedQuizToday={hasCompletedQuizToday} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark font-sans transition-colors duration-300">
      <Header user={user} currentTheme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;