import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);

  const handleTaskAdded = () => setRefresh(prev => prev + 1);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <div>
      <h2>Начало - Здравей, {user?.email}</h2>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList key={refresh} />
    </div>
  );
}

export default Home;