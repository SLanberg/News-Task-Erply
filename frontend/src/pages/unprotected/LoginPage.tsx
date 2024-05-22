import Navbar from '../../components/ui/navbar/Navbar';
import CustomInput from '../../components/ui/inputs/CustomInput';
import CustomButton from '../../components/ui/buttons/CustomButton';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setApiKey } from '../../state/slices/newsApiSlice';

import homePageStyles from '../../styles/login_page.module.scss';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState(''); // New state variable for error message

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userData = { email, key };

    try {
      const response = await fetch(
        'http://localhost:8000/authentication/users/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          mode: 'cors', // This ensures CORS mode is enabled
          body: JSON.stringify(userData),
        },
      );

      if (response.ok) {
        dispatch(setApiKey(key));
        navigate('/news');
      } else {
        const errorData = await response.json();

        setError(errorData.email || errorData.key || 'An error occurred');
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div id={`${homePageStyles.background}`}>
      <Navbar />
      <div
        className={'mx-auto max-w-7xl flex justify-center text-skin-primary'}
      >
        <div className='box-border bg-skin-infoBox md:w-[580px] h-screen md:h-auto border-1 md:mt-[20px] md:rounded-[10px] shadow-lg flex overflow-hidden'>
          <div className='box-border mt-10 mx-10 flex flex-col'>
            <h1 className='text-center text-[22px] m-2 font-bold '>
              Reading «News» is now easier than ever.
            </h1>

            <p className='text-center m-2 font-bold text-[14px]'>
              Unlock the Power of Data with Your Own API Key! Seamlessly access
              the latest news and insights tailored to your needs. Sign up now
              at {''}
              <a
                href='https://newsapi.org/register'
                target='_blank'
                className='text-[#00e1ed]'
              >
                newsapi.org/register
              </a>
              {''} and start exploring limitless possibilities today!
            </p>
            <p className='text-center m-4 font-bold text-[14px]'>
              After registration enter your email and API key down below and
              press «Enter»
            </p>

            <CustomInput
              className='bg-skin-input'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            ></CustomInput>
            <CustomInput
              className='bg-skin-input'
              placeholder='Key'
              onChange={(e) => setKey(e.target.value)}
            ></CustomInput>

            {error && (
              <div className='block shadow-sm rounded-[8px] w-100 p-[12px] text-sm text-primary outline-none m-[10px] bg-red-500'>
                {error}
              </div>
            )}

            <CustomButton onClick={handleSubmit}>Enter</CustomButton>

            <p className='text-center text-[11px] m-5'>
              By pressing «Enter» you agree with <br /> <u>privacy policy</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
