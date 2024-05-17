import { useState, useEffect } from 'react';

const THEMES = {
  DEFAULT: 'default',
  DARK: 'dark-theme',
};

const useTheme = () => {
  const [theme, setTheme] = useState('');

  const handleThemeSwitch = () => {
    setTheme(theme === THEMES.DARK ? THEMES.DEFAULT : THEMES.DARK);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    switch (theme) {
      case THEMES.DARK:
        applyNeonTheme();
        break;
      default:
        removeNeonTheme();
        break;
    }
  }, [theme]);

  const applyNeonTheme = () => {
    document.documentElement.classList.add(THEMES.DARK);
    localStorage.setItem('theme', THEMES.DARK);
  };

  const removeNeonTheme = () => {
    document.documentElement.classList.remove(THEMES.DARK);
    localStorage.removeItem('theme');
  };

  return {
    theme,
    handleThemeSwitch,
  };
};

export default useTheme;
