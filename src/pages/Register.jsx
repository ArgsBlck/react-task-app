import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const check = await axios.get(`http://localhost:3001/users?email=${data.email}`);
      if (check.data.length > 0) {
        alert('Имейлът вече е регистриран');
        return;
      }
      const res = await axios.post('http://localhost:3001/users', data);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Имейл" type="email" required />
        <input {...register('password')} placeholder="Парола" type="password" required />
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
}

export default Register;