import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import type { Badge, User, Challenge } from '../types';

interface ProgressPageProps {
  user: User;
  challenges: Challenge[];
}

const BadgeDisplay: React.FC<{ badge: Badge }> = ({ badge }) => (
    <div className="flex flex-col items-center text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="text-primary dark:text-primary-light">
            <badge.icon className="h-12 w-12" />
        </div>
        <h4 className="font-bold mt-2">{badge.name}</h4>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{badge.description}</p>
    </div>
);

const ProgressPage: React.FC<ProgressPageProps> = ({ user, challenges }) => {
  const completedChallenges = challenges.filter(c => c.isCompleted);
  const chartData = [
    { name: 'Reciclaje', completed: completedChallenges.filter(c => c.category === 'Reciclaje').length },
    { name: 'Energía', completed: completedChallenges.filter(c => c.category === 'Energía').length },
    { name: 'Agua', completed: completedChallenges.filter(c => c.category === 'Agua').length },
    { name: 'Comunidad', completed: completedChallenges.filter(c => c.category === 'Comunidad').length },
  ];
  
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-display text-center">Mi Progreso</h1>
      
      <Card>
        <div className="p-6 md:flex md:items-center md:gap-8">
          <img src={user.avatar} alt={user.name} className="h-32 w-32 rounded-full mx-auto md:mx-0 border-4 border-primary"/>
          <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-accent dark:text-accent-light font-bold text-xl">{user.points} Puntos</p>
            <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">Nivel {user.level}</span>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">{user.xp} / {user.xpToNextLevel} XP</span>
                </div>
                <ProgressBar value={user.xp} max={user.xpToNextLevel} color="accent" />
            </div>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
            <div className="p-6">
                <h3 className="text-2xl font-bold font-display mb-4">Insignias Obtenidas</h3>
                {user.badges.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {user.badges.map(badge => <BadgeDisplay key={badge.id} badge={badge}/>)}
                    </div>
                ) : (
                    <p className="text-text-muted-light dark:text-text-muted-dark">¡Completa más retos para ganar insignias!</p>
                )}
            </div>
        </Card>
        <Card>
            <div className="p-6">
                <h3 className="text-2xl font-bold font-display mb-4">Retos Completados por Categoría</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false}/>
                            <Tooltip contentStyle={{ backgroundColor: document.documentElement.classList.contains('dark') ? '#2D3748' : '#FFFFFF', border: 'none' }} />
                            <Legend />
                            <Bar dataKey="completed" name="Completados" fill="#4CAF50" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;
