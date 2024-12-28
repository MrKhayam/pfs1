import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openImg } from '../Features/project/projectSlice';

const Project = ({project}) => {
    const dispatch = useDispatch();
  return (
      <>
      <div className="md:w-[380px] w-full overflow-hidden cursor-pointer flex items-center justify-center rounded-md md:h-[250px] h-[200px] bg-[#dadada]">
              <img
                  onClick={() => dispatch(openImg())}
          src={project.pImg}
          alt="Project"
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
    </>
  );
}

export default Project;
