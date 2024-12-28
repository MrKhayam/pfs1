import React from 'react';
import Project from '../Components/Project';
import { useSelector } from 'react-redux';
import Preview from '../Components/Preview';
import Footer from '../Components/Footer';

const Projects = () => {
      const { img, projects } = useSelector((state) => state.project);

  return (
    <>
      <section className="w-full h-auto">
        {img && <Preview />}
        <div className="w-[90%] h-auto mt-[80px] projects mx-auto">
          <h1 className="md:text-4xl text-2xl font-semibold text-center">
            My Projects
          </h1>
          <div className="md:mt-14 mt-10 flex flex-wrap gap-5 justify-center">
            {
              projects.map((project, index) => {
                return <Project key={index} project={project} />
              })
            }
          </div>
        </div>
          <Footer />
      </section>
    </>
  );
}

export default Projects;
