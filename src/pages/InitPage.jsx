import { Link } from "react-router-dom";
const InitPage = () => {
  return (
    <>
      <div className="movie-card w-full max-h-fit p-1 bg-gray-800 rounded-[5px]">
        <h3>Título do filme</h3>
        <h4>Ano</h4>
        <h4>Nota</h4>
        <p>Descrição breve</p>
        <div className="h-25 bg-gray-500 text-center">Imagem</div>
        <Link to="#" className="text-xs">
          Género
        </Link>
        <Link to="#" className="block text-xs">
          Ver detalhes
        </Link>
      </div>
    </>
  );
};

export default InitPage;
