import { User, Badge, Challenge, LeaderboardEntry, Article, QuizQuestion } from '../types';
import { LeafIcon, RecycleIcon, EnergyIcon, WaterIcon, CommunityIcon } from '../components/icons';

export const badges: Badge[] = [
  { id: 1, name: 'Novato del Reciclaje', icon: RecycleIcon, description: 'Completaste tu primer reto de reciclaje.' },
  { id: 2, name: 'Ahorrador de Energía', icon: EnergyIcon, description: 'Completaste 5 retos de ahorro de energía.' },
  { id: 3, name: 'Guardián del Agua', icon: WaterIcon, description: 'Completaste 5 retos de conservación de agua.' },
  { id: 4, name: 'Eco-Héroe', icon: LeafIcon, description: 'Alcanzaste el nivel 10.' },
  { id: 5, name: 'Campeón Comunitario', icon: CommunityIcon, description: 'Participaste en un evento comunitario.' },
];

export const initialUser: User = {
  id: 1,
  name: 'Álex Verde',
  avatar: 'https://picsum.photos/seed/alex/100/100',
  points: 0,
  level: 1,
  xp: 0,
  xpToNextLevel: 100,
  badges: [],
};

export const initialChallenges: Challenge[] = [
  { id: 1, title: 'Día sin Plástico', description: 'Pasa 24 horas completas sin usar plásticos de un solo uso.', points: 50, category: 'Reciclaje', isCompleted: false },
  { id: 2, title: 'Desconecta Electrónicos', description: 'Desenchufa todos los aparatos electrónicos no esenciales antes de dormir.', points: 20, category: 'Energía', isCompleted: false },
  { id: 3, title: 'Ducha de 5 Minutos', description: 'Rétate a tomar una ducha que dure 5 minutos o menos.', points: 30, category: 'Agua', isCompleted: false },
  { id: 4, title: 'Clasifica tus Residuos', description: 'Clasifica correctamente tus reciclables, compost y basura durante una semana.', points: 75, category: 'Reciclaje', isCompleted: false },
  { id: 5, title: 'Limpieza Local', description: 'Participa en un evento de limpieza en tu parque o playa local.', points: 150, category: 'Comunidad', isCompleted: false },
  { id: 6, title: 'Cambia a LED', description: 'Reemplaza una bombilla incandescente antigua por una nueva bombilla LED.', points: 40, category: 'Energía', isCompleted: false },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, user: { id: 10, name: 'Juana Eco', avatar: 'https://picsum.photos/seed/jane/100/100' }, points: 2100 },
  { rank: 2, user: { id: 5, name: 'Leo Natura', avatar: 'https://picsum.photos/seed/leo/100/100' }, points: 1850 },
  { rank: 3, user: { id: 8, name: 'Samuel Solar', avatar: 'https://picsum.photos/seed/sam/100/100' }, points: 1600 },
  { rank: 4, user: { id: 12, name: 'Río Fluye', avatar: 'https://picsum.photos/seed/river/100/100' }, points: 980 },
  { rank: 5, user: { id: 15, name: 'Clara Bosque', avatar: 'https://picsum.photos/seed/clara/100/100' }, points: 850 },
];

export const articles: Article[] = [
    { id: 1, title: 'La Guía Definitiva para Reciclar', summary: 'Aprende qué puedes y qué no puedes reciclar en tu zona y por qué es importante.', category: 'Reciclaje', imageUrl: 'https://picsum.photos/seed/recycle/400/300' },
    { id: 2, title: 'Aprovechando el Sol: El Poder Solar', summary: 'Una introducción a la energía solar y cómo puedes usarla en casa.', category: 'Energía Renovable', imageUrl: 'https://picsum.photos/seed/solar/400/300' },
    { id: 3, title: 'Por qué la Biodiversidad es Clave', summary: 'Descubre la importancia de un ecosistema rico y diverso para un planeta sano.', category: 'Biodiversidad', imageUrl: 'https://picsum.photos/seed/biodiversity/400/300' },
    { id: 4, title: 'Pequeños Cambios, Gran Impacto Climático', summary: 'Consejos prácticos para reducir tu huella de carbono en tu vida diaria.', category: 'Cambio Climático', imageUrl: 'https://picsum.photos/seed/climate/400/300' },
];

export const dailyQuiz: QuizQuestion[] = [
    {
        question: '¿Qué artículo NO debe ir en el contenedor de reciclaje de papel?',
        options: ['Tazas de café usadas', 'Periódico', 'Caja de cartón', 'Revistas'],
        correctAnswerIndex: 0,
        points: 10,
    },
    {
        question: '¿Cuál de las siguientes es una fuente de energía renovable?',
        options: ['Carbón', 'Gas natural', 'Energía solar', 'Petróleo'],
        correctAnswerIndex: 2,
        points: 10,
    },
    {
        question: '¿Aproximadamente qué porcentaje de la Tierra está cubierto de agua?',
        options: ['50%', '71%', '60%', '85%'],
        correctAnswerIndex: 1,
        points: 10,
    }
];