import React from 'react';
import { LeafIcon } from '../components/icons';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-lg">
      <div className="text-center mb-12">
        <LeafIcon className="h-20 w-20 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold font-display">Acerca de EcoQuest</h1>
        <p className="mt-4 text-xl text-text-muted-light dark:text-text-muted-dark">
          Haciendo la educación ambiental atractiva y accionable.
        </p>
      </div>

      <div className="space-y-8 text-left bg-card-light dark:bg-card-dark p-8 rounded-lg shadow-lg">
        <section>
          <h2 className="text-3xl font-bold font-display mb-4 text-primary dark:text-primary-light">Nuestra Misión</h2>
          <p className="leading-relaxed">
            En EcoQuest, nuestra misión es empoderar a las personas con el conocimiento y la motivación para tomar decisiones sostenibles. Creemos que aprender sobre ecología no debería ser una tarea, sino una aventura emocionante. Al transformar acciones ecológicas en retos divertidos y gamificados, nuestro objetivo es inspirar una comunidad global de protectores del medio ambiente.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-display mb-4 text-primary dark:text-primary-light">Nuestra Visión</h2>
          <p className="leading-relaxed">
            Visualizamos un mundo donde todos comprendan su impacto en el planeta y participen activamente en la creación de un futuro más saludable y verde. EcoQuest es más que una aplicación; es un movimiento. Un movimiento hacia el consumo consciente, la acción comunitaria y un profundo y duradero respeto por nuestro mundo natural. Únete a nosotros en esta aventura para marcar una diferencia duradera, un reto a la vez.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
