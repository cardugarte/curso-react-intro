import '../App.css';


function CreateTodoButton({texto}) {
  return (
  <div className="button__container">
    <button className='button'>
      {texto}
    </button>
  </div>
  );
}

export { CreateTodoButton };