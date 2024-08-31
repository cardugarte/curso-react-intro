import '../App.css';

function TodoList(props) {
  return (
    <ul className='list__container'>
      {props.children}
    </ul>
  );
}

export { TodoList };