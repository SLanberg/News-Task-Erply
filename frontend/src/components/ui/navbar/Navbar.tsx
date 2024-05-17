import logo from '/images/icons/logo.svg';
import useTheme from '../../../hooks/useTheme';
import IconButton from '@mui/material/IconButton/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CustomButton from '../buttons/CustomButton';

const Navbar = () => {
  const { theme, handleThemeSwitch } = useTheme();

  return (
    <div className={'sticky top-0 z-50 text-skin-primary'}>
      {/* Navigation Bar */}
      <nav className='bg-skin-primary bg-opacity-90 backdrop-blur-sm'>
        <div className='mx-auto max-w-7xl'>
          <div className='h-16 grid grid-cols-3'>
            {/* Empty div to center logo */}
            <div />

            <div className='justify-center items-center flex'>
              <img src={logo} alt='Logo' />
            </div>

            <div className='justify-end items-center flex'>
              <IconButton onClick={handleThemeSwitch}>
                {theme === 'dark-theme' ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                )}
              </IconButton>
              <CustomButton padding='8px'>Logout</CustomButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
