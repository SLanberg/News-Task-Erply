import useTheme from '../../../hooks/useTheme';
import IconButton from '@mui/material/IconButton/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CustomButton from '../buttons/CustomButton';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const { theme, handleThemeSwitch } = useTheme();

  
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={'sticky top-0 z-50 text-skin-primary'}>
      {/* Navigation Bar */}
      <nav className='bg-skin-navbar bg-opacity-90 backdrop-blur-sm'>
        <div className='mx-auto max-w-9xl'>
          <div className='h-16'>
      
            <div className='justify-end items-center flex'>
              <IconButton onClick={handleThemeSwitch}>
                {theme === 'dark-theme' ? (
                  <Brightness4Icon className='text-skin-highlight' />
                ) : (
                  <Brightness7Icon />
                )}
              </IconButton>
                <CustomButton onClick={handleClick} padding='10px'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><title>ionicons-v5-i</title><path d="M335.69,272h-161V240h161V92a12,12,0,0,0-12-12h-280a12,12,0,0,0-12,12V420a12,12,0,0,0,12,12h280a12,12,0,0,0,12-12Z"/><polygon points="419.06 272 355.06 336 377.69 358.63 480.31 256 377.69 153.37 355.06 176 419.06 240 335.69 240 335.69 272 419.06 272"/></svg> 
                </CustomButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
