import bgavanti from "../assets/bgavanti.jpg";
import tav1 from "../assets/tav1.png";
import mav1 from "../assets/mav1.png";
import mav2 from "../assets/mav2.png";
import mav3 from "../assets/mav3.png";
import mav4 from "../assets/mav4.png";
import dav1 from "../assets/dav1.jpg";
import dav2 from "../assets/dav2.png";
import dav3 from "../assets/dav3.jpg";
import dav4 from "../assets/dav4.jpg";
import dav5 from "../assets/dav5.jpg";
import mbg from "../assets/mbg.png";

const Avanti = () => (
  <div
    className="mt-5 flex flex-col items-center w-full"
    style={{ backgroundImage: `url(${bgavanti})` }}
  >
    <div className="flex sm:flex-row flex-col items-center mt-5">
      <img src={tav1} className="w-[12.5rem] mr-5 mt-5" />
      <h1 className="text-white font-fjalla text-[1.5625rem] mt-5">
        SOMOS{" "}
        <span className="text-white font-fjalla text-[2.1875rem] font-bold">
          181.755
        </span>{" "}
        SÓCIOS
      </h1>
    </div>

    <div
      className="sm:w-[70%] m-0 bg-customColor flex sm:flex-row"
      style={{
        backgroundImage: `url(${mbg})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="sm:w-[100%] flex sm:flex-row items-center justify-center sm:mx-[15%] flex-col">
        <div className=" sm:w-[55%] sm:m-0 m-5">
          <h1 className="text-white font-fjalla text-[1.25rem]">
            PLANO PLATINA
          </h1>
          <p className="text-white font-sans text-[.75rem] w-[50%] my-0 mx-0">
            Se você costuma cantar e vibrar com o Palmeiras no estádio, este é
            seu plano ideal! Descontos de até 100%, 3ª pré-venda garantida e
            sistema de rating que privilegia os mais assíduos!
          </p>
          <h2 className="text-white font-fjalla text-[.9375rem] mt-5 mb-2">
            DESCONTOS POR SETOR
          </h2>
          <ul className="flex flex-row ">
            <li className="text-white text-[1.25rem] mx-4 font-bold font-fjalla">
              100%
            </li>
            <li className="text-white text-[1.25rem] mx-4 font-bold font-fjalla">
              75%
            </li>
            <li className="text-white text-[1.25rem] mx-4 font-bold font-fjalla">
              75%
            </li>
            <li className="text-white text-[1.25rem] mx-4 font-bold font-fjalla">
              25%
            </li>
          </ul>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center sm:m-0 sm:mb-0 mb-5">
          <h1 className="text-white font-bold font-fjalla text-[1.25rem] bg-green-800 p-5 rounded-[100%] sm:m-0 m-5">
            R$<span className="text-[1.875rem]">144,99</span>
          </h1>
          <img src={mav1} className="mr-10 sm-mr-0" />
          <p className="text-white text-[2.5rem] font-fjalla py-2 px-5 bg-green-500 sm:ml-5 cursor-pointer sm:mt-0 mt-5">
            SEJA AVANTI{" "}
          </p>
        </div>
      </div>
    </div>
    <h1 className="text-white font-fjalla text-[1.875rem] items-center justify-center sm:mt-2 mt-5">
      BENEFÍCIOS EXCLUSIVOS
    </h1>
    <div className="flex flex-row items-center justify-center mt-5 sm:mx-0 mx-5">
      <div className="mr-[10%] flex flex-col items-center justify-center">
        <img src={mav2} className="w-[18.75rem]" />
        <p className="text-white font-fjalla text-[.9375rem] items-center justify-center mt-1">
          DESCONTO NA ESCOLA OFICIAL
        </p>
      </div>
      <div className="mr-[10%] flex flex-col items-center justify-center">
        <img src={mav4} className="w-[15rem]" />
        <p className="text-white font-fjalla text-[.9375rem] items-center justify-center mt-1">
          PROMOÇÕES CLUBE DE VANTAGENS
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={mav3} className="w-[18.75rem]" />
        <p className="text-white font-fjalla text-[.9375rem] items-center justify-center mt-1">
          FRETE GRÁTIS NA LOJA
        </p>
      </div>
    </div>
    <h1 className="text-white font-fjalla text-[1.875rem] items-center justify-center mt-5 mb-2">
      EXPERIÊNCIAS EXCLUSIVAS
    </h1>
    <div>
      <ul className="flex">
        <li>
          <img src={dav1} />
        </li>
        <li>
          <img src={dav2} />
        </li>
        <li>
          <img src={dav3} />
        </li>
        <li>
          <img src={dav4} />
        </li>
        <li>
          <img src={dav5} />
        </li>
      </ul>
    </div>
  </div>
);

export default Avanti;
