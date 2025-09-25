import React from 'react';
import Card from '../components/Card';
import { articles } from '../constants/mockData';
import type { Article } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Card className="flex flex-col">
    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow flex flex-col">
      <span className="text-sm font-bold text-primary mb-2">{article.category}</span>
      <h3 className="text-xl font-bold font-display mb-2 flex-grow">{article.title}</h3>
      <p className="text-text-muted-light dark:text-text-muted-dark mb-4">{article.summary}</p>
      <a href="#" className="font-bold text-primary dark:text-primary-light hover:underline mt-auto">Leer Más &rarr;</a>
    </div>
  </Card>
);

const LibraryPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold font-display text-center mb-8">Biblioteca de Recursos</h1>
            <p className="text-center text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto mb-12">
                Amplía tus conocimientos sobre temas ambientales clave. ¡Cuanto más sepas, mayor será tu impacto!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;
