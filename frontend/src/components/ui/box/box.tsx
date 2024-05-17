import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { RootState } from '../../../state/store';
import { setLoading } from '../../../state/images/imageSlice';

interface BoxProps {
  id: number;
}

const Box: React.FC<BoxProps> = ({ id }) => {
  // Retrieve the loading state for the specific image from the Redux store
  const loading = useSelector((state: RootState) => state.image.loading[id] ?? true);

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Simulate a network delay using useEffect and setTimeout
  useEffect(() => {
    // Set loading state to true when component mounts
    dispatch(setLoading({ id, loading: true }));

    // Simulate a 10-second network delay
    const timeoutId = setTimeout(() => {
      // After delay, set the loading state to false
      dispatch(setLoading({ id, loading: false }));
    }, 10000000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [dispatch, id]);

  return (
    <div className='box-border bg-skin-boxColor border-1 m-4 rounded-[10px] shadow-lg overflow-hidden'>
      <div className='h-[250px] relative'>
        {loading && (
          <div className='absolute inset-0 flex items-center justify-center bg-skin-boxColor'>
            <ClipLoader />
          </div>
        )}
        <img
          src='https://docs.flutter.dev/assets/images/dash/dash-fainting.gif'
          alt='Description of the image'
          className={`h-full w-full object-cover ${loading ? 'hidden' : 'block'}`}
        />
      </div>
      <div className='flex'>
        <p className='m-2 text-skin-highlight'>NEWS</p>
      </div>
      <div className='flex h-[125px] text-skin-primary'>
        <p className='m-2'>Dash fainted</p>
      </div>
      <div className='mt-auto'>
        <p className='m-2 text-[12px] text-[#ACACAC] font-light'>2 days ago</p>
      </div>
    </div>
  );
};

export default Box;
