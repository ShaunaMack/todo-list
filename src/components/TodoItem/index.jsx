import "./style.css";

function TodoItem(props) {
  // use destructuring to get access to things passed in through props
  // this is instead of using props.text props.completeTodo and props.index
  const { todo, completeTodo, index } = props;

  return (
    <div className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

export default TodoItem;
