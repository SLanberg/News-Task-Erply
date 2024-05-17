import React from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/system';

interface CustomButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  sx?: SxProps<Theme>;
  onClick?: () => void;
  children?: React.ReactNode;
  padding?: string;
  margin?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'contained',
  sx = {},
  onClick,
  children,
  padding = '12px',
  margin = '10px',
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        display: 'flex', // Use Flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        borderRadius: '8px',
        padding: padding,
        fontSize: '14px',
        color: 'white',
        backgroundColor: 'var(--button-color)',
        outline: 'none',
        margin: margin,
        ...sx,
        '&:hover': {
          backgroundColor: 'var(--button-hover-color)',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
