const Boton = ({ texto }) => {
  return (
    <button className="text-white border-2 px-6 py-3 my-4 hover:bg-pink-600 hover:border-pink-600 w-fit self-center">
      {texto}
    </button>
  );
}

export default Boton