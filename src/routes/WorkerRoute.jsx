import Loading from '../components/Loading';
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'

const WorkerRoute = ({children}) => {
    const [role, isLoading] = useRole();

    if (isLoading) return <Loading/>;
    if (role === "Worker") return children;
    return <Navigate to="/dashboard" replace="true" />;
  };

export default WorkerRoute;