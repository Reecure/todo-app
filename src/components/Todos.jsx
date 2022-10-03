import Todo from './Todo';
import style from './Todos.module.css';
function Todos({ todos, setTodos, setStatus, filtered }) {
  const allStatusHandler = () => {
    setStatus('all');
  };
  const activeStatusHandler = () => {
    setStatus('uncompleted');
  };
  const completedStatusHandler = () => {
    setStatus('completed');
  };
  const clearCompletedHandler = () => {
    setTodos(todos.filter((item) => item.completed === false));
  };

  return (
    <div className={style.wrapper}>
      {filtered.map((todo, i) => {
        return (
          <Todo key={i} todo={{ ...todo }} todos={todos} setTodos={setTodos} />
        );
      })}
      <div className={style.actions}>
        <p>{filtered.length} items left</p>
        <button onClick={allStatusHandler}>All</button>
        <button onClick={activeStatusHandler}>Active</button>
        <button onClick={completedStatusHandler}>Completed</button>
        <button onClick={clearCompletedHandler}>Clear Completed</button>
      </div>
    </div>
  );
}

export default Todos;
