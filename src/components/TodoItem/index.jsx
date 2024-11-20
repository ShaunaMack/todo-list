import "./style.css";

function TodoItem(props) {
  // use destructuring to get access to things passed in through props
  // this is instead of using props.text props.completeTodo and props.index
  const { todo, completeTodo, index, removeTodo } = props;

  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default TodoItem;
