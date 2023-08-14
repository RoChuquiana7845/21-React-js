// eslint-disable-next-line react/prop-types
import { useCard } from '../context/CardsContext.jsx';
import { ButtonLink } from './../components/ui/ButtonLink';

// eslint-disable-next-line react/prop-types
const WinGame = ({message}) => {
    const {
        cardUser1,
        cardUser2,
        user1points,
        user2points,
      } = useCard();
  return (
    <div> 
        <h1>{message}</h1>
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
      <div className="flex justify-center space-x-4 mt-4"></div>
      <ButtonLink to='/21Game'>Regresar</ButtonLink>
    </div>
  )
}

export default WinGame
