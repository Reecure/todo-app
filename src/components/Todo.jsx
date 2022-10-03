import styles from './Todo.module.css';
import check from '../media/icon-check.svg';

function Todo({ todo, todos, setTodos }) {
  const CompleteHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={styles.todoBlock}>
      <button
        onClick={CompleteHandler}
        className={
          todo.completed
            ? `${styles.check} ${styles.checkActive}`
            : `${styles.check}`
        }
      >
        {todo.completed ? <img src={check} alt="check" /> : ''}
      </button>
      <p
        className={
          todo.completed
            ? `${styles.todoText} ${styles.todoTextcompleted}`
            : `${styles.todoText}`
        }
      >
        {todo.body}
      </p>
    </div>
  );
}

export default Todo;
