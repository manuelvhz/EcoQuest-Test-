import React from 'react';
import Button from '../components/Button';
import { LeafIcon, RecycleIcon, EnergyIcon, BookIcon } from '../components/icons';

type Page = 'home' | 'progress' | 'challenges' | 'leaderboard' | 'library' | 'about';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md text-center flex flex-col items-center">
        <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
        <p className="text-text-muted-light dark:text-text-muted-dark">{description}</p>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-primary/10 dark:bg-primary/20 rounded-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold font-display text-primary dark:text-primary-light mb-4">
            ¡Únete a la EcoAventura!
          </h1>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto mb-8">
            Aprende sobre sostenibilidad, completa retos divertidos y logra un impacto real. Tu aventura hacia un planeta más verde comienza ahora.
          </p>
          <Button variant="primary" onClick={() => onNavigate('challenges')}>
            Comienza tu Aventura
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 font-display">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8">
           <FeatureCard
             icon={<BookIcon className="h-8 w-8"/>}
             title="Aprende"
             description="Explora lecciones y artículos interactivos en nuestra biblioteca para ampliar tu conocimiento ecológico."
           />
           <FeatureCard
             icon={<RecycleIcon className="h-8 w-8"/>}
             title="Actúa"
             description="Acepta retos del mundo real, desde reciclar hasta reducir energía, y gana puntos por tus esfuerzos."
           />
           <FeatureCard
             icon={<LeafIcon className="h-8 w-8"/>}
             title="Crece"
             description="Sube de nivel tu perfil, gana insignias únicas y escala en el ranking para convertirte en un Eco-Héroe."
           />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
