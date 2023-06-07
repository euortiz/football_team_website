import l99 from "../assets/l99.png";
import l20 from "../assets/l20.png";
import l21 from "../assets/l21.png";
import lbg from "../assets/lbg.jpg";
import lmap from "../assets/lmap.png";

const Champion = () => (
  <div
    className="w=full flex sm:flex-row flex-col items-center justify-center mt-10"
    style={{ backgroundImage: `url(${lbg})`, backgroundRepeat: "no-repeat" }}
  >
    <div className="sm:w-[20%]">
      <h1
        className="text-white font-fjalla sm:text-[3.125rem] mt-5 sm:mt-0"
        style={{ borderBottom: ".125rem solid white" }}
      >
        TRICAMPEÃO DA LIBERTADORES
      </h1>
      <p className="text-white text-[2.5rem] font-thin font-roboto sm:block hidden">
        O MAIOR TIME
        <span className="text-white font-thin text-[3.125rem]">
          {" "}
          BRASILEIRO{" "}
        </span>
        DO CONTINENTE
      </p>
    </div>
    <div>
      <ul className="flex items-center justify-center mb-10 mt-10">
        <li className="flex flex-col items-center justify-center">
          <img src={l21} className="w-[18.125rem]" />
          <p className="text-white font-roboto text-[1.25rem] font-bold">
            2021
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={l20} className="w-[18.125rem]" />
          <p className="text-white font-roboto text-[1.25rem] font-bold">
            2020
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={l99} className="w-[18.125rem]" />
          <p className="text-white font-roboto text-[1.25rem] font-bold">
            1999
          </p>
        </li>
      </ul>
    </div>
    <div>
      <img src={lmap} className="w-[21.875rem] float-right sm:block hidden" />
    </div>
  </div>
);

export default Champion;
