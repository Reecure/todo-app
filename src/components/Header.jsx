import { useState } from 'react';
import sun from '../media/icon-sun.svg';
import styles from './Header.module.css';

function Header({ addTodo }) {
  const [todo, setTodo] = useState('');
  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <div className={styles.mainHeader}>
      <div className={styles.todoBlock}>
        <h1>TODO</h1>
        <button>
          <img src={sun} alt="sun"></img>
        </button>
      </div>
      <form onSubmit={addTodoHandler} className={styles.todoTextBlock}>
        <input
          className={styles.todoText}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo..."
        ></input>
      </form>
    </div>
  );
}

export default Header;
