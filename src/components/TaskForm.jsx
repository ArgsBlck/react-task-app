import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function TaskForm({ onTaskAdded }) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const task = { ...data, userId: user.id };
      await axios.post('http://localhost:3001/tasks', task);
      onTaskAdded();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Добави задача</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="Заглавие" required />
        <input {...register('description')} placeholder="Описание" />
        <button type="submit">Добави</button>
      </form>
    </div>
  );
}

export default TaskForm;