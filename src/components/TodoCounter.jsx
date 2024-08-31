import '../App.css';


function TodoCounter({ total, completed }) {
  return (
    <h1 className='count__container'>
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };