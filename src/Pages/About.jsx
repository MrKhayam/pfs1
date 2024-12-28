import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about w-full h-screen mt-[52px]">
        <div className="md:w-[90%] w-[95%] flex md:items-center md:flex-row flex-col gap-5 md:gap-5  mx-auto h-full">
          <div className="left md:mt-0 mt-5">
            <div className="userImage md:w-[300px] w-full overflow-hidden h-[400px] rounded-md bg-[#dadada]">
              <img
                src="https://i.pinimg.com/736x/2a/97/84/2a9784adbd64c0d0fe688bfb5f64772c.jpg"
                alt="User Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="right md:w-[60%] w-full md:mt-0 mt-4 h-auto md:h-[400px]">
            <h1 className="md:text-5xl text-2xl md:text-left text-center">About Me</h1>
            <p className="mt-2 md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              placeat, corrupti consectetur eligendi pariatur ex obcaecati nihil
              facilis tempore? Aliquam in pariatur commodi ratione amet
              voluptates debitis non perspiciatis! Dolorum, et voluptatum
              corrupti voluptatem dolores repellendus accusamus, eum dignissimos
              facilis nulla minima est obcaecati, esse quisquam ratione!
              Nesciunt nam in aut cupiditate, eligendi ipsum amet repellat
              aliquam impedit earum architecto obcaecati eos, explicabo at!
              Consequuntur, veniam accusamus blanditiis, qui labore assumenda
              ratione voluptates cumque iste, fuga praesentium cupiditate quod
              cum eaque doloremque. Minima pariatur ratione ad repellendus
              laudantium eos inventore reiciendis doloribus provident veniam,
              earum doloremque consequuntur quam quisquam deserunt.
            </p>
            <div className="btns md:w-full w-[90%] mx-auto mt-3 flex md:flex-row flex-col gap-3 items-center">
              <NavLink className="bg-[#CFEDFF] md:w-auto w-full text-center px-5 py-3 rounded-md hover:bg-[#b0e1ff] transition-all duration-300 shadow">
                Contact Me
              </NavLink>
              <NavLink className="border-[#CFEDFF] md:w-auto w-full justify-center flex gap-2 hover:gap-4 items-center border-2 px-7 py-3 rounded-md hover:bg-[#b0e1ff] transition-all duration-300">
                View Projects <FaArrowRightLong />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
