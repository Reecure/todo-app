import { useState } from 'react';
import Todo from './Todo';
import style from './Todos.module.css';
import ActionButton from './UI/ActionButton';
function Todos({ todos, setTodos, setStatus, filtered }) {
  const [active, setActive] = useState('All');

  const actionToggleHandler = (e) => {
    setActive(e);
  };

  const statusHandler = (status) => {
    setStatus(status);
  };

  const clearCompletedHandler = () => {
    setTodos(todos.filter((item) => item.completed === false));
  };

  const actionBtns = [
    { id: 'All', title: 'All', status: 'all' },
    { id: 'Active', title: 'Active', status: 'uncompleted' },
    { id: 'Completed', title: 'Completed', status: 'completed' },
  ];

  return (
    <div className={style.wrapper}>
      {filtered.map((todo, i) => {
        return (
          <Todo key={i} todo={{ ...todo }} todos={todos} setTodos={setTodos} />
        );
      })}
      <div className={style.actions}>
        <p>{filtered.length} items left</p>
        {actionBtns.map((btn, i) => {
          return (
            <ActionButton
              active={active}
              setActive={actionToggleHandler}
              id={btn.id}
              key={i}
              status={btn.status}
              statusHandler={statusHandler}
            >
              {btn.title}
            </ActionButton>
          );
        })}
        <button onClick={clearCompletedHandler}>Clear Completed</button>
      </div>
    </div>
  );
}

export default Todos;
