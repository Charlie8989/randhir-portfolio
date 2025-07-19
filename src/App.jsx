import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./assets/home.svg";
import about from "./assets/mySvg.svg";
import p1 from "/digits_image_1752285480548.png";
import p2 from "/distribution plot_1752285638805.png";
import p3 from "/p3.png";
import p4 from "/p4.jpeg";
import { useState } from "react";

const App = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClick1 = () => {
    setShow1(true);
    setTimeout(() => setShow1(false), 2000);
  };
  const handleClick2 = () => {
    setShow2(true);
    setTimeout(() => setShow2(false), 2000);
  };
  const handleClick3 = () => {
    setShow3(true);
    setTimeout(() => setShow3(false), 2000);
  };
  const handleClick4 = () => {
    setShow4(true);
    setTimeout(() => setShow4(false), 2000);
  };
  return (
    <>
      <nav className="z-50 bg-transparent backdrop-blur-sm shadow-md  flex justify-between items-center py-4 sticky top-0">
        <div className="sm:pl-30 pl-5 text-[#84A98C] sm:text-lg lemon text-[8px]">
          Randhir's Portfolio
        </div>

        <ul className="sm:pr-30 text-[10px] sm:text-sm pr-10 flex gap-2 sm:gap-5">
          <a href="#Home" className="cursor-pointer  hover:text-white">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-white">
            About
          </a>
          <a className="cursor-pointer hover:text-white" href="#Projects">
            Projects
          </a>
          <a className="cursor-pointer hover:text-white" href="#Skill">
            Skills
          </a>
          <a className="cursor-pointer hover:text-white" href="#Contact">
            Contact
          </a>
        </ul>
      </nav>
      <section
        id="Home"
        className="sm:my-10 my-0 flex sm:h-[80vh] h-[35vh] flex-row "
      >
        <div className="w-1/2 text-center mx-auto my-auto pb-25">
          <p className="font-medium sm:text-2xl text-lg">
            Hii,Myself
            <div className="text-[#84A98C] text-xl sm:text-4xl lemon">
              Randhir Kumar
            </div>
            <div className="font-medium sm:text-[15px] text-[10px] lg:text-2xl px-5">
              B.Tech Metallurgical And Materials Engineering Student | LAMMPS
              Simulations | ML/DL Enthusiast
            </div>
          </p>
          <a href="#Projects">
            {" "}
            <button className="mt-5 sm:px-5 sm:py-3 px-3 py-2 rounded-md text-[10px] sm:text-[15px] bg-[#84A98C] text-black shadow-md transition duration-300 hover:shadow-[0_0_15px_#84A98C]">
              View Projects
            </button>
          </a>
          <a href="#Contact">
            {" "}
            <button className="sm:ml-5 ml-1 mt-5 sm:px-5 sm:py-3 px-3 py-2 rounded-md text-[10px] sm:text-[15px] bg-transparent outline-1 text-[#84A98C] shadow-md transition duration-300 hover:shadow-[0_0_15px_#84A98C] ">
              Get In Touch
            </button>
          </a>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={home}
            alt="SVG"
            className="w-[60%] sm:w-[70%] lg:w-[50%] h-auto"
          />
        </div>
      </section>
      <section
        id="About"
        className="sm:my-10 text-center my-0 flex sm:h-[80vh] h-[35vh] sm:flex-row flex-col justify-center items-center "
      >
        <div className="sm:w-1/2 flex justify-center w-full pl-3 ml-0 sm:ml-30">
          <img src={about} className="sm:w-fit w-[40%]" />
        </div>
        <div className="sm:w-1/2 w-full pr-3 mr-0 sm:mr-30">
          <h1 className="mt-5 lemon text-xl sm:text-3xl text-[#84A98C] ">
            About Me
          </h1>
          <div className="mt-2 ml-3 rounded-lg w-fit sm:w-full h-fit sm:h-full border-1 border-[#84A98C]">
            <p className="my-2 sm:mx-4 mx-2 text-justify sm:my-3 text-[7px] sm:text-[15px] poppins ">
              Hi, I’m Randhir Kumar, a pre-final year student pursuing B.Tech in
              Metallurgical & Materials Engineering. I'm passionate about
              understanding materials at the atomic level and leveraging
              technology to solve real-world engineering problems. My interests
              lie at the intersection of materials science, computational
              simulations, and emerging technologies like Machine Learning and
              Deep Learning. I’ve worked on several simulation-based projects
              using LAMMPS involving BCC titanium, Cu-Ni nanoindentation, and
              MEAM/spline potentials. On the data side, I’ve developed ML/DL
              projects such as stock price prediction using news sentiment,
              handwritten digit recognition, and review classification—fusing
              analytical thinking with coding skills to build meaningful
              solutions. I'm always eager to learn, collaborate, and
              innovate—whether it’s through research projects, internships, or
              creative side hustles.
            </p>
          </div>
        </div>
      </section>
      <section id="Projects" className="sm:my-10 px-20 my-0 h-full ">
        <h1 className="mt-5 w-full text-center mb-6 lemon text-2xl sm:text-4xl text-[#84A98C] ">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            onClick={handleClick1}
            className="relative border-1 hover:border-[#84A98C] sm:w-110 w-70 h-50 sm:h-80 rounded-md m-5 bg-cover  group overflow-hidden"
            style={{ backgroundImage: `url(${p4})` }}
          >
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/90 flex items-center justify-center transition duration-500 
          ${show1 ? "opacity-100" : "opacity-0"} 
          sm:group-hover:opacity-100`}
            >
              <p className="text-white px-4 ">
                <h4 className="lemon my-2 sm:text-lg text-sm">
                  BCC Titanium Simulation
                </h4>
                <p className="sm:text-sm mb-1 sm:mb-3 text-xs ">
                  Molecular dynamics simulations using LAMMPS to study BCC
                  titanium structures, nanoindentation behavior, and mechanical
                  properties. Implementation of MEAM/spline potentials for
                  accurate atomic-scale modeling.
                </p>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  LAMMPS
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Python
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  MEAM
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Nanoindentation
                </span>
                <div className="mt-1 sm:mt-5">View Details</div>
              </p>
            </div>
          </div>

          <div
            onClick={handleClick2}
            className="relative border-1 hover:border-[#84A98C] sm:w-110 w-70 h-50 sm:h-80 rounded-md m-5 bg-cover  group overflow-hidden"
            style={{ backgroundImage: `url(${p1})` }}
          >
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/90 flex items-center justify-center transition duration-500 
          ${show2 ? "opacity-100" : "opacity-0"} 
          sm:group-hover:opacity-100`}
            >
              <p className="text-white px-4 ">
                <h4 className="lemon my-2 sm:text-lg text-sm">
                  Handwritten Digit Recognition
                </h4>
                <p className="sm:text-sm mb-1 sm:mb-3 text-xs ">
                  Deep learning neural network model for recognizing handwritten
                  digits using convolutional neural networks. Implemented using
                  TensorFlow/Keras with high accuracy on MNIST dataset.
                </p>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  TensorFlow
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Keras
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  CNN
                </span>
                <div className="mt-1 sm:mt-5">View Details</div>
              </p>
            </div>
          </div>
          <div
            onClick={handleClick3}
            className="relative border-1 hover:border-[#84A98C] sm:w-110 w-70 h-50 sm:h-80 rounded-md m-5 bg-cover  group overflow-hidden"
            style={{ backgroundImage: `url(${p3})` }}
          >
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/90 flex items-center justify-center transition duration-500 
          ${show3 ? "opacity-100" : "opacity-0"} 
          sm:group-hover:opacity-100`}
            >
              <p className="text-white px-4 ">
                <h4 className="lemon my-2 sm:text-lg text-sm">
                  Cu-Ni Nanoindentation
                </h4>
                <p className="sm:text-sm mb-1 sm:mb-3 text-xs ">
                  Molecular dynamics simulation study of copper-nickel alloy
                  nanoindentation using LAMMPS. Analysis of mechanical
                  properties, deformation mechanisms, and force- displacement
                  curves at nanoscale.
                </p>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  LAMMPS
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Cu-Ni
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  MD
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Simulation
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Python
                </span>
                <div className="mt-1 sm:mt-5">View Details</div>
              </p>
            </div>
          </div>
          <div
            onClick={handleClick4}
            className="relative border-1 hover:border-[#84A98C] sm:w-110 w-70 h-50 sm:h-80 rounded-md m-5 bg-cover  group overflow-hidden"
            style={{ backgroundImage: `url(${p2})` }}
          >
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/90 flex items-center justify-center transition duration-500 
          ${show4 ? "opacity-100" : "opacity-0"} 
          sm:group-hover:opacity-100`}
            >
              <p className="text-white px-4 ">
                <h4 className="lemon my-2 sm:text-lg text-sm">
                  Stock Price Prediction
                </h4>
                <p className="sm:text-sm mb-1 sm:mb-3 text-xs ">
                  Machine learning model for predicting stock prices using
                  historical data and technical indicators. Implemented using
                  LSTM neural networks and time series analysis with data
                  visualization.
                </p>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  LSTM
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Python
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Pandas
                </span>
                <span className="sm:p-2 p-1 mx-1 rounded-sm sm:rounded-md text-[9px] sm:text-[10px] outline-1">
                  Matplotlib
                </span>
                <div className="mt-1 sm:mt-5">View Details</div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sm:my-10 sm:px-20 px-5 my-0 sm:h-[70vh] h-fit"
        id="Skill"
      >
        <h1 className="mt-5 w-full text-center mb-6 lemon text-2xl sm:text-4xl text-[#84A98C] ">
          Technical Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center">
          <div className="sm:w-110 w-70 h-65 sm:h-80 rounded-md m-5 my-5 border-1 border-[#84A98C]">
            <div className="w-full flex items-center pt-2">
              <i className="ri-flask-line text-2xl sm:text-3xl pl-5 text-[#84A98C] hover:text-shadow-[0_0_10px_#84A98C]"></i>
              <span className="text-[#84A98C] lemon text-md sm:text-lg ml-2">
                Materials Science
              </span>
            </div>
            <p className="sm:text-sm p-2 text-xs text-justify">
              My understanding of{" "}
              <span className="text-[#84A98C] text-md sm:text-lg">Materials Science </span>{" "}
              spans key concepts that define how materials behave and perform.
              I’ve explored{" "}
              <span className="text-[#84A98C] text-md sm:text-lg">Crystallography</span> to
              understand atomic arrangements and how they influence material
              structure. Through{" "}
              <span className="text-[#84A98C] text-md sm:text-lg">Phase Diagrams</span>, I
              analyze how different phases form under varying conditions. I’m
              comfortable applying{" "}
              <span className="text-[#84A98C] text-md sm:text-lg"> Thermodynamics</span> to
              study energy changes during material transformations. I also focus
              on Mechanical Properties like strength and elasticity, and use
              <span className="text-[#84A98C] text-md sm:text-lg">
                {" "}
                Material Characterization
              </span>{" "}
              methods—like microscopy and diffraction techniques—to gain
              insights into internal structures and defects.
            </p>
          </div>
          <div className="sm:w-110 w-70 h-65 sm:h-80 rounded-md m-5 my-5 border-1 border-[#84A98C]">
            <div className="w-full flex items-center pt-2">
              {/* <i class="ri-code-s-slash-line"></i> */}
              <i className="ri-code-s-slash-line text-3xl text-[#84A98C] hover:text-shadow-[0_0_10px_#84A98C] pl-5"></i>
              <span className="text-[#84A98C] lemon text-lg ml-2">
                Computational Tools
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                LAMMPS
              </span>
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                OVITO
              </span>
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                Python
              </span>

              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                MATLAB
              </span>
            </div>
          </div>
          <div className="sm:w-110 w-70 h-fit sm:h-80 rounded-md m-5 my-5 border-1 border-[#84A98C]">
            <div className="w-full flex items-center pt-2">
              {/* <i class="ri-brain-fill"></i> */}
              <i className="ri-brain-fill text-3xl pl-5 text-[#84A98C] hover:text-shadow-[0_0_10px_#84A98C]"></i>
              <span className="text-[#84A98C] lemon text-lg ml-2">
                Machine Learning
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                Tensor Flow
              </span>
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                CNN
              </span>
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                Sci Kit-learn
              </span>

              <span className="p-2 m-4 sm:px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                Neural Networks
              </span>
              <span className="p-2 m-4 px-4 bg-transparent text-[#84A98C] border border-[#84A98C] rounded-full transition-all duration-300 hover:bg-[#84A98C] hover:text-black hover:shadow-[0_0_15px_#84A98C]">
                RNN
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sm:px-20 px-5 flex mt-10 sm:mt-0 sm:h-[20vh] h-[15vh]"
        id="Contact"
      >
        <div className="w-1/2 h-full">
          <p className="text-[#84A98C] lemon text-sm sm:text-3xl">
            Let's Work Together <br /> On Your Next project
          </p>
          <hr className="mt-3 w-1/3 " />
        </div>
        <div className="w-1/2 h-full ">
          <p className="lemon text-sm sm:text-3xl text-end mr-9">Get In Touch</p>
          <div className="w-full h-1/3 flex text-lg sm:text-3xl gap-2 sm:gap-7 justify-end pr-9 sm:pr-15 mt-4">
            <a
              href="mailto:randhirkumar2331@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-mail-line text-[#84A98C] hover:shadow-[0_0_10px_#84A98C] hover:scale-110 transition-all duration-300"></i>
            </a>
            <a
              href="https://github.com/Mrghostraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill text-[#84A98C] hover:text-shadow-[0_0_10px_#84A98C] hover:scale-110 transition-all duration-300"></i>
            </a>
            <a
              href="https://linkedin.com/in/randhir--kumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill text-[#84A98C] hover:text-shadow-[0_0_10px_#84A98C] hover:scale-110 transition-all duration-300"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
