import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/tasks?userId=${user.id}`);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h3>Твоите задачи</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => deleteTask(task.id)}>Изтрий</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;