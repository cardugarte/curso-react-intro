import '../App.css'

function TodoItem({text, completed}) {
  return (
    <li className='item__container'>
      <span className={`check ${completed && 'completed'}`}>V</span>
      <p className='text'>{text}</p>
      <span className='delete'>X</span>
    </li>
  );
}

export { TodoItem };