import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import type { Challenge } from '../types';
import { RecycleIcon, EnergyIcon, WaterIcon, CommunityIcon } from '../components/icons';

const categoryIcons: Record<Challenge['category'], React.ReactNode> = {
  Reciclaje: <RecycleIcon className="h-6 w-6" />,
  Energía: <EnergyIcon className="h-6 w-6" />,
  Agua: <WaterIcon className="h-6 w-6" />,
  Comunidad: <CommunityIcon className="h-6 w-6" />,
};

interface ChallengeCardProps {
    challenge: Challenge;
    onComplete: (id: number) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onComplete }) => (
  <Card className="flex flex-col">
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold font-display">{challenge.title}</h3>
        <div className="text-primary dark:text-primary-light" title={challenge.category}>
          {categoryIcons[challenge.category]}
        </div>
      </div>
      <p className="text-text-muted-light dark:text-text-muted-dark mb-4">{challenge.description}</p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 flex justify-between items-center">
        <span className="font-bold text-lg text-accent">{challenge.points} PTS</span>
        <Button 
          onClick={() => onComplete(challenge.id)}
          disabled={challenge.isCompleted} 
          className={challenge.isCompleted ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' : ''}
        >
            {challenge.isCompleted ? 'Completado' : 'Completar'}
        </Button>
    </div>
  </Card>
);


interface ChallengesPageProps {
    challenges: Challenge[];
    onCompleteChallenge: (id: number) => void;
}

const ChallengesPage: React.FC<ChallengesPageProps> = ({ challenges, onCompleteChallenge }) => {
    const [filter, setFilter] = useState<'all' | Challenge['category']>('all');
    const [challengeToConfirm, setChallengeToConfirm] = useState<Challenge | null>(null);
    
    const categories: Challenge['category'][] = ['Reciclaje', 'Energía', 'Agua', 'Comunidad'];

    const filteredChallenges = filter === 'all' 
      ? challenges 
      : challenges.filter(c => c.category === filter);

    const handleOpenModal = (challengeId: number) => {
        const challenge = challenges.find(c => c.id === challengeId);
        if(challenge) {
            setChallengeToConfirm(challenge);
        }
    };

    const handleConfirm = () => {
        if(challengeToConfirm) {
            onCompleteChallenge(challengeToConfirm.id);
            setChallengeToConfirm(null);
        }
    };
      
    return (
        <div>
            <h1 className="text-4xl font-bold font-display text-center mb-8">Retos Ecológicos</h1>
            <p className="text-center text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto mb-12">
                Acepta un reto, haz una acción en el mundo real y gana puntos para convertirte en un Eco-Héroe.
            </p>
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full font-bold ${filter === 'all' ? 'bg-primary text-white' : 'bg-card-light dark:bg-card-dark'}`}>Todos</button>
                {categories.map(cat => (
                   <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full font-bold ${filter === cat ? 'bg-primary text-white' : 'bg-card-light dark:bg-card-dark'}`}>{cat}</button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredChallenges.map(challenge => (
                    <ChallengeCard key={challenge.id} challenge={challenge} onComplete={handleOpenModal} />
                ))}
            </div>

            <Modal 
              isOpen={!!challengeToConfirm} 
              onClose={() => setChallengeToConfirm(null)} 
              title="Confirmar Reto"
            >
                <p>Estás a punto de marcar el reto <span className="font-bold">"{challengeToConfirm?.title}"</span> como completado.</p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">EcoQuest se basa en un sistema de honor. Al confirmar, declaras que has realizado esta acción en la vida real. ¡Tu esfuerzo cuenta!</p>
                <div className="flex justify-end gap-4 mt-6">
                    <Button variant="secondary" onClick={() => setChallengeToConfirm(null)} className="bg-gray-300 dark:bg-gray-600 text-text-light dark:text-text-dark hover:bg-gray-400">Cancelar</Button>
                    <Button variant="primary" onClick={handleConfirm}>Confirmar</Button>
                </div>
            </Modal>
        </div>
    );
};

export default ChallengesPage;
