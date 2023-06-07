import logo from "../assets/logo.png";
import crefisa from "../assets/crefisa.png";
import fam from "../assets/fam.png";
import puma from "../assets/puma.png";
import avantilogo from "../assets/avantilogo.jpg";
import search from "../assets/search.svg";
import bgnav from "../assets/bgnav.jpg";
import team2 from "../assets/team2.png";
import tv from "../assets/tv.png";
import arrowdown from "../assets/arrowdown.png";

import { navLinks, navLinksone } from "../constants";

const Nav = () => {
  return (
    <nav
      className="w-screen mt-0 h-[10.625rem] relative sm:mb-0 mb-[2.1rem]"
      style={{ backgroundImage: `url(${bgnav})` }}
    >
      <div
        className="bg-white w-screen top-[7.8125rem] absolute sm:h-[2.875rem] h-[5rem] flex justify-center"
        style={{ borderBottom: ".3125rem solid #9B8542" }}
      >
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-[1.875rem] m-2" />
          <span>X</span>
          <img src={team2} alt="" className="w-[1.4375rem] m-2" />
          <div className="flex items-center">
            <div className="mb-1">
              <p className="text-[.625rem]">
                <strong>BRASILEIRO</strong>| 20/05 | 21:00
              </p>
              <div className="flex items-center">
                <p className="text-[.625rem]">
                  <strong>ALLIANZ PARQUE </strong>|
                </p>
                <img
                  src={tv}
                  alt="tv icon"
                  className="w-[.9375rem] h-[.9375rem] ml-3"
                />
              </div>
            </div>
            <p className="ml-[1.5625rem] p-1 text-[.6875rem] bg-customColor cursor-pointer text-white">
              INGRESSOS
            </p>
          </div>
        </div>
        <div className="text-[.625rem] sm:ml-[2.5rem] ml-[1rem] items-center justify-center sm:mt-2 mt-6 text-customColor">
          <p>PRÓXIMAS</p>
          <p>PARTIDAS</p>
        </div>
        <img
          src={arrowdown}
          alt="arrow down"
          className="w-[1.25rem] h-[1.25rem] ml-1 sm:mt-3 mt-7 sm:mr-0 mr-6 sm:p-0 p-1"
        />
      </div>

      <div className="bg-verde h-[1.875rem] absolute inset-x-0 top-0 flex items-center justify-between px-2">
        <h1 className="text-white mt-0 ml-2 absolute top-[3.125rem] left-[6.25rem] sm:left-[0.25rem] text-[.725rem] w-[5.625rem] font-roboto font-bold sm:text-[0.875rem] sm:relative sm:top-0 sm:w-screen sm:le">
          #
          <strong>
            MAIOR<span className="text-bege">CAMPEÃO</span>DOBRASIL{" "}
            <span className="text-[.75rem">|</span>{" "}
            <span className="text-[.625rem] sm:text-[0.875rem]">
              SITE OFICIAL
            </span>
          </strong>
        </h1>

        <div className="sm:flex sm:items-center sm:justify-center sm:relative flex items-center">
          <img
            src={search}
            alt="search"
            className="w-[1.5625rem] m-2 cursor-pointer"
            justi
          />
          <img
            src={crefisa}
            alt="crefisa"
            className="w-[3.75rem] m-2 cursor-pointer"
          />
          <img src={fam} alt="fam" className="w-[3.75rem] m-2 cursor-pointer" />
          <img
            src={puma}
            alt="puma"
            className="w-[1.875rem] m-2 cursor-pointer"
          />
          <img
            src={avantilogo}
            alt="avanti"
            className="h-[4rem] w-[5rem] mt-[6.1rem] ml-[3.8rem] sm:w-[9.9375rem] sm:h-[8.6875rem] sm:mt-[5.625rem] sm:ml-0 sm:mr-[15.9375rem] shadow-lg shadow-gray-500 shadow-opacity-50"
          />
        </div>
      </div>

      <div className="relative z-10 px-4 py-3">
        <img
          src={logo}
          alt="logo"
          className="w-[5rem] h-[5rem] ml-[0rem] mt-6 cursor-pointer sm:w-[9.375rem] sm:h-[9.375rem] sm:ml-[4.375rem] sm:mt-6"
        />
      </div>

      <div className="absolute inset-x-0 top-[25%] items-center mx-[50%]">
        <ul className="list-none sm:flex hidden justify-center max-w-[37.5rem] mt-1">
          {navLinksone.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[.75rem] ${
                index === navLinksone.length - 1 ? "mr-0" : "mr-5"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <ul className="list-none sm:flex hidden justify-center max-w-[43.75rem] mt-5">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[1rem] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-5"
              } text-white font-sans`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
                <span className="arrow">▼</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
