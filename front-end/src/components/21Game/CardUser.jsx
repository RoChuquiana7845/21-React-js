import { useEffect} from "react";
import "tailwindcss/tailwind.css";
import { useCard } from '../../context/CardsContext.jsx';

const CardUser = () => {
  const {
    isInit,
    cardUser1,
    cardUser2,
    getCard,
    nameDeck,
    deck,
    Winner,
    user1points,
    user2points,
    Reiniciar,
    setIsInit
  } = useCard();

  useEffect(() => {
    async function game() {
      await nameDeck();
    }
    game();
  }, []);

  useEffect(() => {
    Winner();
  }, [user1points, user2points]);

  const starGame = () => { 
    getCard(deck, false, 4, true); 
    setIsInit(true);
  }

  return (
    <>
      <div className="bg-gray-400 p-4 rounded-lg mb-5">
        <h2 className="text-white font-italic font-serif">{"Usuario no maquina"}</h2>
        <h3 className="text-white font-italic font-sans">{user1points}</h3>
        <div className="p-2 flex flex-row flex-wrap">
          {cardUser1.map((card, index) => (
            <div key={index} className="inline w-20 h-34 rounded-[8%] transform origin-center animate-flip-in-ver-right">
              <img src={card.cardImg} alt="Card Img" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-400 p-4 rounded-lg">
        <h2 className="text-white font-italic font-serif">Maquina Super Pro</h2>
        <h3 className="text-white font-italic font-sans">{user2points}</h3>
        <div className="p-2 flex flex-row">
        {cardUser2.map((card, index) => (
          <div key={index} className="inline w-20 h-34 rounded-[8%]">
            <img src={card.cardImg} alt="Card Img" />
          </div>
        ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => getCard(deck)}
          className={`bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 ${isInit || "btn hidden"}`}
        >
          GetCard
        </button>
        <button
          onClick={() => getCard(deck, true)}
          className={`bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2  ${isInit || "btn hidden"}`}
        >
          Plantarse
        </button>
        <button
          onClick={() => starGame()}
          className={`bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 ${!isInit || "btn hidden"}`}  disabled={isInit}
        >
          Inicar Juego
        </button>
        <button
          onClick={() => Reiniciar()}
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
        >
          Reiniciar
        </button>
      </div>
    </>
  );
};

export default CardUser;
