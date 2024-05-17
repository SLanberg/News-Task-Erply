import Navbar from '../../components/ui/navbar/Navbar';
import CustomInput from '../../components/ui/inputs/CustomInput';
import CustomButton from '../../components/ui/buttons/CustomButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import homePageStyles from '../../styles/login_page.module.scss';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Key:', key);

    navigate('/news');
  };

  return (
    <div id={`${homePageStyles.background}`}>
      <Navbar />
      <div className={'mx-auto max-w-7xl flex justify-center'}>
        <div className='box-border bg-[#E0E0E0] w-[580px] border-1 m-10 rounded-[10px] shadow-lg flex overflow-hidden'>
          <div className='box-border mt-5 mx-10 flex flex-col'>
            <h1 className='text-center text-[22px] m-2 font-bold'>
              Reading «News» is now easier than ever.
            </h1>

            <p className='text-center m-2 font-bold text-[14px]'>
              Unlock the Power of Data with Your Own API Key! Seamlessly access
              the latest news and insights tailored to your needs. Sign up now
              at{' '}
              <a
                href='https://newsapi.org/register'
                target='_blank'
                className='text-[#0000FF]'
              >
                newsapi.org/register{' '}
              </a>
              and start exploring limitless possibilities today!
            </p>
            <p className='text-center m-4 font-bold text-[14px]'>
              After registration enter your email and API key down below and
              press «Enter»
            </p>

            <CustomInput
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            ></CustomInput>
            <CustomInput
              placeholder='Key'
              onChange={(e) => setKey(e.target.value)}
            ></CustomInput>
            <CustomButton onClick={handleSubmit}>Enter</CustomButton>

            <p className='text-center text-[11px] m-5 text-[#989898]'>
              By pressing «Enter» you agree with <br /> <u>privacy policy</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
