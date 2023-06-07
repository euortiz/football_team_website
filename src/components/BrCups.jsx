import tbg from "../assets/tbg.jpg";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";
import t8 from "../assets/t8.png";
import t9 from "../assets/t9.png";
import fam from "../assets/fam.png";
import crefisa from "../assets/crefisa.png";
import puma1 from "../assets/puma1.png";
import brahma from "../assets/brahma.png";
import betfair from "../assets/betfair.png";
import gatorade from "../assets/gatorade.png";
import pernambucanas from "../assets/pernambucanas.png";
import cimed from "../assets/cimed.png";
import allianz from "../assets/allianz.png";
import App from "../App.css";

const BrCups = () => (
  <div
    className="sm:w-full items-center justify-center flex flex-col w-screen"
    style={{ backgroundImage: `url(${tbg})`, backgroundRepeat: "no-repeat" }}
  >
    <div className="items-center justify-center mt-5">
      <h1 className="text-white font-robotto sm:text-[50px] font-bold">
        #MAIOR<span className="text-gray-300 ">CAMPEÃO</span>DOBRASIL
      </h1>
    </div>
    <div className="flex flex-row justify-end">
      <div className="w-screen overflow-x-auto justify-start sm:justify-center items-center flex">
        <ul className="flex flex-row mt-0 h-[20rem]">
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t1} className="image-size" alt="Image" />
            <p className="text-white font-bold sm:text-[1.25rem] text-[1rem]">
              1994
            </p>
            <p className="text-white font-bold text-base sm:text-[1.25rem] text-[0.8rem]">
              Campeonato Brasileiro
            </p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t2} className="image-size" alt="Image" />
            <p className="text-white font-bold sm:text-xl">1998</p>
            <p className="text-white font-bold text-base">Copa do Brasil</p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t3} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2000</p>
            <p className="text-white font-bold text-base">Copa dos Campeoes</p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t4} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2012</p>
            <p className="text-white font-bold text-base">Copa do Brasil</p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t5} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2015</p>
            <p className="text-white font-bold text-base">Copa do Brasil</p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t6} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2016</p>
            <p className="text-white font-bold text-base">
              Campeonato Brasileiro
            </p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t7} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2018</p>
            <p className="text-white font-bold text-base">
              Campeonato Brasileiro
            </p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t9} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2020</p>
            <p className="text-white font-bold text-base">Copa do Brasil</p>
          </li>
          <li className="flex flex-col justify-center items-center sm:m-5 cursor-pointer sm:mr-0 mr-[10rem]">
            <img src={t8} className="image-size" alt="Image" />
            <p className="text-white font-bold text-xl">2022</p>
            <p className="text-white font-bold text-base">
              Campeonato Brasileiro
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="w-full">
      <div className="bg-gray-300">
        <ul
          className="flex flex-row items-center sm:justify-center max-w-full overflow-x-auto py-2"
          style={{
            borderBottom: ".3125rem solid #9B8542",
            borderTop: ".3125rem solid #9B8542",
          }}
        >
          <li className="sm:mx-0 mx-5">
            <img
              src={puma1}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={brahma}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={crefisa}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={betfair}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={gatorade}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={pernambucanas}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={cimed}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={fam}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
          <li className="sm:mx-0 mx-5">
            <img
              src={allianz}
              className="w-12 sm:w-16 m-5 filter grayscale hover:filter-none cursor-pointer"
              alt="Image"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default BrCups;
