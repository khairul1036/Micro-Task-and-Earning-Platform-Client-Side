import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading'

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loading/>
  if (role === 'Admin') return children
  return <Navigate to='/dashboard' replace='true' />
}

export default AdminRoute
