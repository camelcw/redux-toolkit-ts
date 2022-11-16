import React, { FC } from 'react';
import styles from './MyButton.module.css';

interface ButtonProps {
  children: React.ReactNode | React.ReactChild;
  onClick?: () => void;
  margin?: string | number;
}

const MyButton: FC<ButtonProps> = ({ children, onClick, margin }) => {
  return (
    <button className={styles.btn} onClick={onClick} style={{margin: margin}}>
      {children}
    </button>
  );
};

export default MyButton;
