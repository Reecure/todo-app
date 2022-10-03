import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const addTodoHandler = (text) => {
    setTodos([...todos, { body: text, completed: false, id: Date.now() }]);
  };

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  return (
    <div className="App">
      <Header addTodo={addTodoHandler} />
      <Todos
        todos={todos}
        setTodos={setTodos}
        filtered={filtered}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
