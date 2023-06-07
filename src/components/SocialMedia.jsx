{
  /* IMPORT LOGOS */
}
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import pinterest from "../assets/pinterest.svg";
import instagram from "../assets/instagram.svg";
import spotify from "../assets/spotify.svg";
import periscope from "../assets/periscope.svg";
import tiktok from "../assets/tiktok.svg";
import logo from "../assets/logo.png";

{
  /* IMPORT IMGS */
}
import cards1 from "../assets/cards1.jpg";
import cards2 from "../assets/cards2.jpg";
import cards3 from "../assets/cards3.jpg";
import cards4 from "../assets/cards4.jpg";
import cards5 from "../assets/cards5.jpg";

{
  /* IMPORT INTERACT */
}
import likes from "../assets/likes.png";
import share from "../assets/share.png";
import comment from "../assets/comment.png";

const SocialMedia = () => (
  <div>
    {/* SOCIAL MEDIA ICONS */}

    <div className="flex flex-col items-center mt-10 mb-5 text-[1.5625rem] text-gray-500 sm:flex-row sm:justify-center">
      <h2 className="font-fjalla font-bold">
        SIGA O <span className="text-green-700">VERDÃO</span> NAS REDES
      </h2>
      <div className="flex flex-row">
        <img
          src={facebook}
          alt="facebook"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={twitter}
          alt="twitter"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={youtube}
          alt="youtube"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={pinterest}
          alt="pinterest"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={instagram}
          alt="instagram"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={spotify}
          alt="spotify"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={periscope}
          alt="periscope"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
        <img
          src={tiktok}
          alt="tiktok"
          className="w-[1.25rem] mx-1 cursor-pointer"
        />
      </div>
    </div>

    <div>
      {/* FIRST CARD */}

      <div className="flex flex-row w-full flex-wrap items-center justify-center">
        <div className="flex flex-col w-[22.3125rem] bg-white rounded-[.9375rem] m-2 shadow-md">
          <div className="flex flex-row m-5">
            <img
              src={logo}
              alt="palmeiras"
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            />
            <div className="items-left flex flex-col ml-3">
              <h3 className="text-[.9375rem] font-roboto text-green-600 font-bold cursor-pointer">
                SE Palmeiras - Clube Social
              </h3>
              <p className="text-[.75rem] font-roboto text-gray-400 font-bold cursor-pointer">
                SE Palmeiras - C... 1h ago
              </p>
            </div>
          </div>
          <img
            src={cards1}
            alt="jogadores"
            className="w-full h-[18.75rem] cursor-pointer hover:cursor-zoom-in"
          />
          <div>
            <div className="w-full h-[15.625rem] border-b border-solid border-gray-100">
              <p className="text-[1rem] text-gray-400 p-5 font-roboto">
                Trio do futsal é convocado pela Seleção Brasileira ⚽
              </p>
              <p className="mb-9 text-[.875rem] text-gray-400 p-5 font-roboto">
                O goleiro Renan, o fixo Bruno e o ala Gabriel foram convocados
                pela Seleção Brasileira, na tarde da última sexta-feira (19),
                para a disputa do Campeonato CONMEBOL...
              </p>
            </div>
            <div className="flex flex-row justify-between w-[50%] p-4 items-end">
              <img
                src={likes}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">25K</p>
              <img
                src={share}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">2k</p>
              <img
                src={comment}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">8k</p>
            </div>
          </div>
        </div>

        {/* SECOND CARD */}

        <div className="flex flex-col w-[22.3125rem] bg-white rounded-[.9375rem] m-2 shadow-md">
          <div className="flex flex-row m-5">
            <img
              src={logo}
              alt="palmeiras"
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            />
            <div className="items-left flex flex-col ml-3">
              <h3 className="text-[.9375rem] font-roboto text-green-600 font-bold cursor-pointer">
                SE Palmeiras - Clube Social
              </h3>
              <p className="text-[.75rem] font-roboto text-gray-400 font-bold cursor-pointer">
                SE Palmeiras - C... 2h ago
              </p>
            </div>
          </div>
          <img
            src={cards2}
            alt="jogadores"
            className="w-full h-[18.75rem] hover:cursor-zoom-in"
          />
          <div>
            <div className="w-full h-[15.625rem] border-b border-solid border-gray-100">
              <p className="text-[1rem] text-gray-400 p-5 font-roboto">
                PAREDÃO! 🧤
              </p>
              <p className="mb-9 text-[.875rem] text-gray-400 p-5 font-roboto">
                Weverton atingiu 50% de jogos sem sofrer gols (148 em 296) e se
                tornou o goleiro com maior índice de 𝒃𝒂𝒍𝒊𝒛𝒂 𝒂 𝒛𝒆𝒓𝒐 entre os 10
                que mais defenderam o manto na história! Cesar Greco / Powered
                by @canonbr
              </p>
            </div>
            <div className="flex flex-row justify-between w-[50%] p-4 items-end">
              <img
                src={likes}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">38k</p>
              <img
                src={share}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">8k</p>
              <img
                src={comment}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">15k</p>
            </div>
          </div>
        </div>

        {/* THIRD CARD */}

        <div className="flex flex-col w-[22.3125rem] bg-white rounded-[.9375rem] m-2 shadow-md">
          <div className="flex flex-row m-5">
            <img
              src={logo}
              alt="palmeiras"
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            />
            <div className="items-left flex flex-col ml-3">
              <h3 className="text-[.9375rem] font-roboto text-green-600 font-bold cursor-pointer">
                SE Palmeiras - Clube Social
              </h3>
              <p className="text-[.75rem] font-roboto text-gray-400 font-bold cursor-pointer">
                SE Palmeiras - C... 2h ago
              </p>
            </div>
          </div>
          <img
            src={cards3}
            alt="jogadores"
            className="w-full h-[18.75rem] hover:cursor-zoom-in"
          />
          <div>
            <div className="w-full h-[15.625rem] border-b border-solid border-gray-100">
              <p className="text-[1rem] text-gray-400 p-5 font-roboto">
                Fala pra gente, Avanti! 🗣️
              </p>
              <p className="mb-9 text-[.875rem] text-gray-400 p-5 font-roboto">
                Quem é você comemorando um gol do Verdão?! 👀🐷#SempreAvanti
              </p>
            </div>
            <div className="flex flex-row justify-between w-[50%] p-4 items-end">
              <img
                src={likes}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">17K</p>
              <img
                src={share}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">9K</p>
              <img
                src={comment}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">12K</p>
            </div>
          </div>
        </div>

        {/* FOURTH CARD */}

        <div className="flex flex-col w-[22.3125rem] bg-white rounded-[.9375rem] m-2 shadow-md">
          <div className="flex flex-row m-5">
            <img
              src={logo}
              alt="palmeiras"
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            />
            <div className="items-left flex flex-col ml-3">
              <h3 className="text-[.9375rem] font-roboto text-green-600 font-bold cursor-pointer">
                SE Palmeiras - Clube Social
              </h3>
              <p className="text-[.75rem] font-roboto text-gray-400 font-bold cursor-pointer">
                SE Palmeiras - C... 3h ago
              </p>
            </div>
          </div>
          <img
            src={cards4}
            alt="jogadores"
            className="w-full h-[18.75rem] hover:cursor-zoom-in"
          />
          <div>
            <div className="w-full h-[15.625rem] border-b border-solid border-gray-100">
              <p className="text-[1rem] text-gray-400 p-5 font-roboto">
                SUPER CAPITÃO! 🦸‍️
              </p>
              <p className="mb-9 text-[.875rem] text-gray-400 p-5 font-roboto">
                Gómez chegou à 8ª posição na lista de zagueiros com mais
                triunfos pelo #MaiorCampeãoDoBrasil. Tá bom ou quer mais? Quer
                mais? Em nosso site oficial, confira todas as marcas alcançadas
                na noite de ontem
              </p>
            </div>
            <div className="flex flex-row justify-between w-[50%] p-4 items-end">
              <img
                src={likes}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">24K</p>
              <img
                src={share}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">13K</p>
              <img
                src={comment}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">10K</p>
            </div>
          </div>
        </div>

        {/* FIFTH CARD */}

        <div className="flex flex-col w-[22.3125rem] bg-white rounded-[.9375rem] m-2 shadow-md">
          <div className="flex flex-row m-5">
            <img
              src={logo}
              alt="palmeiras"
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            />
            <div className="items-left flex flex-col ml-3">
              <h3 className="text-[1rem] font-roboto text-green-600 font-bold cursor-pointer">
                SE Palmeiras - Clube Social
              </h3>
              <p className="text-[.875rem] font-roboto text-gray-400 font-bold cursor-pointer">
                SE Palmeiras - C... 4h ago
              </p>
            </div>
          </div>
          <img
            src={cards5}
            alt="jogadores"
            className="w-full h-[18.75rem] hover:cursor-zoom-in"
          />
          <div>
            <div className="w-full h-[15.625rem] border-b border-solid border-gray-100">
              <p className="text-[.875rem] text-gray-400 p-5 font-roboto ">
                AMASSA, !
              </p>
              <p className="mb-9 text-[.8125rem] text-gray-400 p-5 font-roboto">
                Zé Rafael se isolou na 4ª posição do ranking de atletas com mais
                jogos defendendo o manto na @libertadoresbr Cesar Greco /
                Powered by @canonbr
              </p>
            </div>
            <div className="flex flex-row justify-between w-[50%] p-4 items-end">
              <img
                src={likes}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">12K</p>
              <img
                src={share}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">2K</p>
              <img
                src={comment}
                alt=""
                className="w-[1.6875rem] cursor-pointer hover:bg-gray-200 rounded-[3.125rem] p-1"
              />
              <p className="text-[.8125rem] mr-4 p-1">5K</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center m-5">
      <h3 className="bg-green-800 text-white font-sans py-3 px-8 text-[.9375rem] rounded-[.5rem] cursor-pointer">
        MOSTRAR MAIS
      </h3>
    </div>
  </div>
);

export default SocialMedia;
