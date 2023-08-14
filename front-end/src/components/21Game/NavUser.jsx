// eslint-disable-next-line react/prop-types
const NavUser = ({ position, name }) => {
  return (
    <div
      className={`px-10 ${
        position == 1 ? "last:flex justify-end" : "fex justify-start"
      }`}
    >
      <div>
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={position ? "/img/Logos-partidas1.png" : "img/foto-usuario.jpeg"}
          alt="Logo User"
        />
      </div>
      <div>
        <h2 className={`text-center p.normal text-white text-[20px]`}>
          {name}
        </h2>
      </div>
    </div>
  );
};

export default NavUser;
