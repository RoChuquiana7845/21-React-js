import { Navbar } from "../components/21Game/Navbar";
import Table from "./../components/21Game/Table";
import CardUser from "./../components/21Game/CardUser";
import { CardsProvider } from "../context/CardsContext";

const Game = () => {
  return (
    <CardsProvider>
      <div className="flex flex-col items-center bg-slate-800 h-screen">
        <Navbar />
        <div className="h-[128px]">
          <Table />
          <CardUser />
        </div>
      </div>
    </CardsProvider>
  );
};

export default Game;
