import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectApiKey } from '../../state/slices/newsApiSlice'; // Import selectApiKey from apiSlice

const UnauthenticatedRoutes = () => {
  const apiKey = useSelector(selectApiKey); // Use selectApiKey from apiSlice to get the apiKey

  // If apiKey is not present, allow only "/" route
  if (apiKey) {
    return <Navigate to='/news' />;
  } else {
    return <Outlet />;
  }
};

export default UnauthenticatedRoutes;
