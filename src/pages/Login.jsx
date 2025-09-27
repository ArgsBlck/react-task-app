import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/users?email=${data.email}&password=${data.password}`
      );
      if (res.data.length > 0) {
        login(res.data[0]);
        navigate('/');
      } else {
        alert('Грешни имейл или парола');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Имейл" type="email" required />
        <input {...register('password')} placeholder="Парола" type="password" required />
        <button type="submit">Вход</button>
      </form>
    </div>
  );
}

export default Login;