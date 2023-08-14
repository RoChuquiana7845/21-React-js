import "tailwindcss/tailwind.css";
import { useCard } from '../../context/CardsContext.jsx';

const Table = () => {
  const { deck } = useCard();
  return (
    <div >
        <h2 className="text-center font-serif text-white"> Mazo:{deck}</h2>      
    </div>
  )
}

export default Table
