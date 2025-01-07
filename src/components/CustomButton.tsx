import React from 'react';

interface CustomButtonProps{
  text: string; 
  onClick: () => void; 
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
