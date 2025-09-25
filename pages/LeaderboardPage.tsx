import React from 'react';
import { leaderboard } from '../constants/mockData';
import type { User } from '../types';
import { TrophyIcon } from '../components/icons';

interface LeaderboardPageProps {
  user: User;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ user }) => {
  const rankColors: { [key: number]: string } = {
    1: 'text-yellow-400',
    2: 'text-gray-400',
    3: 'text-orange-400',
  };

  return (
    <div>
      <h1 className="text-4xl font-bold font-display text-center mb-8">Ranking de Jugadores</h1>
      <div className="max-w-4xl mx-auto bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="p-4 font-bold">Puesto</th>
                <th className="p-4 font-bold">Jugador</th>
                <th className="p-4 font-bold text-right">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr
                  key={entry.user.id}
                  className={`border-t border-gray-200 dark:border-gray-700 text-text-light dark:text-text-dark ${
                    entry.user.id === user.id ? 'bg-primary/20' : ''
                  }`}
                >
                  <td className="p-4 font-bold text-lg">
                    <div className="flex items-center gap-2">
                      {entry.rank <= 3 ? <TrophyIcon className={`h-6 w-6 ${rankColors[entry.rank]}`} /> : null}
                      <span>{entry.rank}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={entry.user.avatar}
                        alt={entry.user.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <span className="font-bold">{entry.user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 font-bold text-lg text-right text-accent">
                    {entry.points.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
