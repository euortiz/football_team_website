import veiga from "../assets/veiga.jpg";
import weverton from "../assets/weverton.jpg";
import YouTube from "react-youtube";

const Hero = () => (
  <div className="cursor-pointer relative w-screen sm:flex mt-0 flex-wrap sm:mb-0 mb-[14rem]">
    <img src={veiga} alt="Rafael Veiga Img" className="sm:w-[81.25rem] block" />
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-verde to-transparent">
      <p className="text-[.8375rem] font-bold font-fjalla text-white ml-8 mb-2 sm:text-[1.875rem]">
        PALMEIRAS E PUMA LANÇAM UNIFORMES EM VERSÕES MANGA LONGA
      </p>
    </div>

    <div className="absolute right-0 flex flex-col justify-end items-end mr-0 flex-wrap">
      <div className="mb-0">
        <img src={weverton} alt="Weverton" className="sm:w-[40rem] w-screen" />
        <div className="absolute bottom-0 sm:bottom-[50%] sm:left-0 sm:w-full w-screen bg-gradient-to-t from-verde to-transparent">
          <p className="text-[.9375rem] font-bold font-fjalla text-white ml-8 mb-2 sm:text-[1.25rem]">
            CLUBE ELEVA PADRÃO DE QUALIDADE DA LINHA CASUAL
          </p>
        </div>
      </div>

      <div className="sm:w-full sm:block hidden ">
        <YouTube videoId="ruxSf_wKvyA" className="w-full h-full" />
      </div>
    </div>
  </div>
);

export default Hero;
