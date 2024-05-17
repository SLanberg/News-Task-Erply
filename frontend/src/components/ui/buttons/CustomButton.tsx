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
        display: 'block',
        borderRadius: '8px',
        padding: padding,
        fontSize: '14px', // 14px which is text-sm
        color: 'white',
        backgroundColor: '#D4C1AB',
        outline: 'none',
        margin: margin,
        ...sx, // Merge custom styles
        '&:hover': {
          backgroundColor: '#D2AA7C',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
