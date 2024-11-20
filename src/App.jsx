import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <h1>My todo list</h1>
      <TodoItem text="Finish plus project." />
      <TodoItem text="Feed cat." />
      <TodoItem text="Be awesome." />
    </div>
  );
}

export default App;
