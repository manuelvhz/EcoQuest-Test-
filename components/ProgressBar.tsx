
import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  color?: 'primary' | 'secondary' | 'accent';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, color = 'primary' }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
  };

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
      <div
        className={`h-4 rounded-full transition-all duration-500 ease-out ${colorClasses[color]}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
