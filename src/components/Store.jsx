import camisa1 from "../assets/camisa1.png";
import camisa2 from "../assets/camisa2.png";
import camisa3 from "../assets/camisa3.png";
import camisa4 from "../assets/camisa4.png";
import camisa5 from "../assets/camisa5.png";
import camisa6 from "../assets/camisa6.png";
import camisa7 from "../assets/camisa7.png";
import logo from "../assets/logo.png";
import gif from "../assets/gif.gif";
import gif2 from "../assets/gif2.gif";

import cart from "../assets/cart.png";
import location from "../assets/location.png";

const Store = () => (
  <div className="flex flex-row items-center justify-center mt-5 w-full">
    <div className="flex flex-col mt-5">
      <div className="flex flex-row float-left justify-between">
        <div className="flex flex-row">
          <img
            src={logo}
            className="sm:w-[3.625rem] sm:h-[3.625rem] w-[2.5rem] h-[2.5rem]"
          />
          <div className="ml-1 items-center border-l-2 border-gray-300 p-1 h-[4.375rem]">
            <h1 className="sm:text-[1.25rem] text-[0.8rem] text-green-800 font-bold">
              Palmeiras
            </h1>
            <p className="sm:text-[1.25rem] text-[1rem] text-green-800">
              Store.com
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row mr-3 border border-green-800 py-1 px-3 cursor-pointer sm:ml-0 ml-8">
            <img
              className="w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem]"
              src={cart}
              alt="shopping-cart"
            />
            <p className="text-green-800 font-bold text-[0.8rem] sm:text-[1.25rem]">
              Loja online
            </p>
          </div>
          <div className="flex flex-row mr-3 border border-green-800 py-1 px-3 cursor-pointer">
            <img
              className="w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem]"
              src={location}
              alt="shopping-cart"
            />
            <p className="text-green-800 font-bold text-[0.8rem] sm:text-[1.25rem]">
              Encontre a loja mais próxima
            </p>
          </div>
          <div className="sm:block hidden mr-3 border border-green-800 py-1 px-3 cursor-pointer bg-green-800 flex-row">
            <p className="sm:block hidden text-white font-bold text-[0.8rem] sm:text-[1.25rem]">
              Produtos
            </p>
          </div>
        </div>
      </div>

      <div className="sm:w-full w-screen overflow-x-auto justify-start sm:justify-center items-center flex">
        <ul className="flex flex-row">
          <li className="flex flex-col items-center justify-center sm:mx-2 mx-10">
            <img src={camisa1} className="w-[12.5rem] h-auto cursor-pointer" />
            <div className="w-[6.25rem] flex flex-col items-center justify-center">
              <p className="text-[.625rem] text-gray-600 text-center my-1 font-semibold">
                CAMISA LINHA I PUMA 2023/24
              </p>
              <p className="text-[.625rem] text-gray-600 my-1 font-semibold">
                A PARTIR DE:
              </p>
              <p className="text-[1.25rem] text-green-800 font-bold">
                R$ 179,90
              </p>
              <p className="text-[.75rem] text-white bg-green-800 font-bold py-0.1 px-5 cursor-pointer mt-1">
                COMPRAR
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center justify-center sm:mx-2 mx-10">
            <img src={camisa2} className="w-[12.5rem] h-auto cursor-pointer" />
            <div className="w-[6.25rem] flex flex-col items-center justify-center">
              <p className="text-[.625rem] text-gray-600 text-center my-1 font-semibold">
                CAMISA LINHA II PUMA 2023/24
              </p>
              <p className="text-[.625rem] text-gray-600 my-1 font-semibold">
                A PARTIR DE:
              </p>
              <p className="text-[1.25rem] text-green-800 font-bold">
                R$ 179,90
              </p>
              <p className="text-[.75rem] text-white bg-green-800 font-bold py-0.1 px-5 cursor-pointer mt-1">
                COMPRAR
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center justify-center sm:mx-2 mx-10">
            <img src={camisa3} className="w-[12.5rem] h-auto cursor-pointer" />
            <div className="w-[6.25rem] flex flex-col items-center justify-center">
              <p className="text-[.625rem] text-gray-600 text-center my-1 font-semibold">
                CAMISA LINHA IIII PUMA 2023/24
              </p>
              <p className="text-[.625rem] text-gray-600 my-1 font-semibold">
                A PARTIR DE:
              </p>
              <p className="text-[1.25rem] text-green-800 font-bold">
                R$ 269,90
              </p>
              <p className="text-[.75rem] text-white bg-green-800 font-bold py-0.1 px-5 cursor-pointer mt-1">
                COMPRAR
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center justify-center sm:mx-2 mx-10">
            <img src={camisa4} className="w-[12.5rem] h-auto cursor-pointer" />
            <div className="w-[6.25rem] flex flex-col items-center justify-center">
              <p className="text-[.625rem] text-gray-600 text-center my-1 font-semibold">
                CAMISA GOLEIRO PUMA 2023/24
              </p>
              <p className="text-[.625rem] text-gray-600 my-1 font-semibold">
                A PARTIR DE:
              </p>
              <p className="text-[1.25rem] text-green-800 font-bold">
                R$ 329,90
              </p>
              <p className="text-[.75rem] text-white bg-green-800 font-bold py-0.1 px-5 cursor-pointer mt-1">
                COMPRAR
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col z-10">
      <img src={gif} alt="GIF" className="w-[14.375rem] cursor-pointer" />
      <img src={gif2} alt="GIF" className="w-[14.375rem] cursor-pointer" />
    </div>
  </div>
);

export default Store;
