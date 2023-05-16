import * as React from 'react';
import { Button as MUIButton, Typography } from '@mui/material';

export interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  label: string;
  onClick?: () => void;
  className?: string;
  style?: object;
  disabled?: boolean;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, label, onClick, ...rest }) => {
  return (
    <MUIButton variant={variant} onClick={onClick} {...rest}>
      <Typography variant="button">{label}</Typography>
    </MUIButton>
  );
};

export default Button;
