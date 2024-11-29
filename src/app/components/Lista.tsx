import Lista, { useMyContext } from '../context/MeuContexto';

export default function Listar() {
  const { listaArray } = useMyContext();

  return (
    <div>
      {listaArray && listaArray.map((item: Lista) => (
        <div key={item.id}>
          <div>{item.nome}</div>
          {/* Adicione outros detalhes */}
        </div>
      ))}
    </div>
  );
}
