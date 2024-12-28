import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { closeImg } from '../Features/project/projectSlice';

const Preview = () => {
    const dispatch = useDispatch();
          const { preview } = useSelector((state) => state.project);

  return (
    <>
          <div className="w-full top-0 z-50 flex items-center justify-center absolute h-screen bg-[#000000b1] backdrop-blur-sm">
              <div className="md:w-[60%] relative w-[95%] shadow-md h-[200px] md:h-[450px] overflow-hidden flex items-center justify-center object-cover rounded-md">
                  <img className='w-full h-full' src={preview} alt="" />
              <IoClose color='white' onClick={() => dispatch(closeImg())} size={25} cursor="pointer" className='absolute top-2 right-2' />
              </div>
      </div>
    </>
  );
}

export default Preview;
