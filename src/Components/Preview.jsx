import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { closeImg } from '../Features/project/projectSlice';

const Preview = () => {
    const dispatch = useDispatch();
  return (
    <>
          <div className="w-full top-0 z-50 absolute h-screen bg-[#ffffff79] backdrop-blur-sm">
              <IoClose onClick={() => dispatch(closeImg())} size={25} cursor="pointer" className='absolute top-5 right-5' />
      </div>
    </>
  );
}

export default Preview;
