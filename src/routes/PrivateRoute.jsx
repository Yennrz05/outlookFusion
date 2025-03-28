import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  return token ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default PrivateRoute;
