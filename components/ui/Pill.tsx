import React from 'react';

interface PillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition ${
        selected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
