import React from 'react';

export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C6.32 20.31 7.89 16.5 12 14c4.1 2.5 5.89-1.4 6-3a1 1 0 0 0-1-1zm3-3a1 1 0 0 0-1 1c-.11 1.6-1.9 4.5-6 3-1.55-.93-3.32-2.67-4.22-4.22-2.67 1-4.5 2.9-3 6a1 1 0 0 0 1.73.65C9 13.5 10.7 12 13 11c2.3.5 3.5-1.73 3.65-3.35A1 1 0 0 0 15 6a1 1 0 0 0-1 1c-.14 1.3-1.37 2.65-3 2-1.65.65-2.3 2.5-1.5 4.5.8-2 2.35-3.65 4-4.5-1.35.14-2.65 1.37-2 3 .65 1.65 2.5 2.3 4.5 1.5 2-.8 3.65-2.35 4.5-4C21.65 8.7 20.3 7.35 18.65 7.5c.35-1.65 1.7-2.85 3.35-2.5a1 1 0 0 0 1-1z" />
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const RecycleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6.46v-3.4l6 4.33-6 4.33v-3.41c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5-2.5l1.79 1.03A7.99 7.99 0 0 1 12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8z" />
  </svg>
);

export const EnergyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a7 7 0 0 0-7 7c0 2.21 1.79 4 4 4v5h6v-5c2.21 0 4-1.79 4-4a7 7 0 0 0-7-7zm-1 18h2v2h-2zm-3.5-3.5l1.41 1.41L11 15.83V20h2v-4.17l2.09 2.09 1.41-1.41L13.41 13H10.59z" />
  </svg>
);

export const WaterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.41 3.58 8 7 8s7-3.59 7-8c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

export const CommunityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.48 3.02a2.5 2.5 0 0 0-3.53 0L12 6.97 8.05 3.02a2.5 2.5 0 0 0-3.53 0c-1.28 1.28-1.04 3.76.62 5.43L12 18l6.86-9.55c1.66-1.67 1.9-4.15.62-5.43zM12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);

export const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
);

// FIX: Add missing BotIcon component.
export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8.5,10A1.5,1.5 0 0,1 10,11.5A1.5,1.5 0 0,1 8.5,13A1.5,1.5 0 0,1 7,11.5A1.5,1.5 0 0,1 8.5,10M12,7.5C12.83,7.5 13.5,8.17 13.5,9H10.5C10.5,8.17 11.17,7.5 12,7.5M15.5,10A1.5,1.5 0 0,1 17,11.5A1.5,1.5 0 0,1 15.5,13A1.5,1.5 0 0,1 14,11.5A1.5,1.5 0 0,1 15.5,10Z" />
    </svg>
);