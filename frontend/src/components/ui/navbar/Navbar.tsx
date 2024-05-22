import useTheme from '../../../hooks/useTheme';
import IconButton from '@mui/material/IconButton/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FaSearch } from 'react-icons/fa';

import CustomButton from '../buttons/CustomButton';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setApiKey, setQuery } from '../../../state/slices/newsApiSlice';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showButton, setShowButton] = useState(true); // State to control button visibility

  const { theme, handleThemeSwitch } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Check local storage for API key
    const apiKey = localStorage.getItem('apiKey');
    setShowButton(!!apiKey); // Set showButton based on whether apiKey is present
  }, []); // Run only once on component mount

  const handleClick = () => {
    dispatch(setApiKey(''));
    navigate('/');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setQuery(searchValue));
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <div className={'sticky top-0 z-50 text-skin-primary'}>
      {/* Navigation Bar */}
      <nav className='bg-skin-navbar bg-opacity-90 backdrop-blur-sm'>
        <div className='mx-auto max-w-9xl'>
          <div className='h-16 grid grid-cols-3'>
            {/* Empty div to center the serach input */}
            <div />

            {/* Centered content */}
            <div className='col-span-1 flex justify-center items-center text-skin-primary'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search'
                  ref={inputRef}
                  value={searchValue}
                  onChange={handleChange}
                  onKeyDown={handleEnterPress}
                  className='bg-skin-input border border-gray-200 border-opacity-50 rounded-[20px] px-5 py-2 focus:outline-none'
                  style={{ display: showButton ? 'block' : 'none' }} // Hide/show input based on showButton state
                />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'>
                  <FaSearch
                    className='h-4 w-4 text-gray-600 hover:text-skin-highlight/80 transition-colors duration-300'
                    style={{ display: showButton ? 'block' : 'none' }} // Hide/show search icon based on showButton state
                  />
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className='flex justify-end items-center'>
            {showButton && ( // Render button only if showButton is true
                <CustomButton onClick={handleClick} padding='10px'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 512 512'
                  >
                    <title>ionicons-v5-i</title>
                    <path d='M335.69,272h-161V240h161V92a12,12,0,0,0-12-12h-280a12,12,0,0,0-12,12V420a12,12,0,0,0,12,12h280a12,12,0,0,0,12-12Z' />
                    <polygon points='419.06 272 355.06 336 377.69 358.63 480.31 256 377.69 153.37 355.06 176 419.06 240 335.69 240 335.69 272 419.06 272' />
                  </svg>
                </CustomButton>
              )}


              <IconButton onClick={handleThemeSwitch}>
                {theme === 'dark-theme' ? (
                  <Brightness4Icon className='text-skin-highlight' />
                ) : (
                  <Brightness7Icon />
                )}
              </IconButton>
          
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
