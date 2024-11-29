import Lista, { useMyContext } from '../context/MeuContexto';

export default function Listar() {
  const { listaArray } = useMyContext();

  return (
    <div>
      {listaArray && listaArray.map((item: Lista) => (
        <div key={item.id}>
          <div>{item.nome}</div>
          <div>{item.cardapio}</div>
          <div>{item.data && item.hora}</div>
          <div>{item.status}</div>
        </div>
      ))}
    </div>
  );
}
