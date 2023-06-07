import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.png";
import spo1 from "../assets/spo1.jpg";
import spo2 from "../assets/spo2.jpg";

const News = () => (
  <div className="flex mt-8 w-full flex-wrap justify-center items-center bg-dwhite">
    <div className="flex w-full md:w-[50%] items-center grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img1}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">
            DESCONTO PARA AVANTI
          </h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Pacotes para jogo contra Cerro Porteno no Paraguay
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img2}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">FEMININO</h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Em Jundiai, Palestrinas encaram Ferroviaria pelo Brasileiro
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img3}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">
            PALESTRINAS
          </h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Ingressos para duelo com a Ferroviaria pelo Brasileiro em Jundiai
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img4}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">DERBY</h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Verdao empata com Corinthians pela terceira rodada do Paulista
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img5}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">
            PAULISTA SUB-20
          </h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Palmeiras vence Sao Jose em Barueri e mantem os 100%
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img6}
          alt=""
          className="sm:w-[15.625rem] w-[14rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">ESTADUAL</h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Sub-15 empata com Flamengo-SP e segue invicto
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img7}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">
            CRIAS DA ACADEMIA
          </h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Sub-13 do Verdao disputa a Burchalkin Cup, na Russia
          </p>
        </div>
      </div>

      <div className="flex bg-white rounded-[.3125rem] shadow-md m-2">
        <img
          src={img8}
          alt=""
          className="sm:w-[15.625rem] w-[13rem] sm:h-[10.3125rem] h-[8rem] rounded-l-[.3125rem]"
        />
        <div className="flex flex-col ml-3 mt-3 sm:w-[11rem] w-screen">
          <h2 className="text-[.6875rem] font-bold text-green-700">
            SELECAO BRASILEIRA SUB-17
          </h2>
          <p className="mr-2 mt-1 font-sans sm:text-[1rem] text-[0.8rem]">
            Trio do futsal e convocado para disputa do Sul-Americano
          </p>
        </div>
      </div>
    </div>

    <div className="flex sm:grid sm:grid-cols-1 md:grid-cols-1">
      <img
        src={spo1}
        alt=""
        className="sm:w-[12.5rem] sm:h-[22.8125rem] w-[11rem] h-[21rem] sm:mb-7 shadow-md sm:ml-4 sm:mt-0 mt-2"
      />
      <img
        src={spo2}
        alt=""
        className="sm:w-[12.5rem] sm:h-[22.8125rem] w-[11rem] h-[21rem] bottom-0 shadow-md sm:ml-4 ml-4 sm:mt-0 mt-2"
      />
    </div>
  </div>
);

export default News;
