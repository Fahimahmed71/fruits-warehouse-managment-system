import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

function RequiredAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <img
        alt="gif"
        src="https://media.tenor.com/v6WhA6XvorQAAAAC/yourname-kiminonawa.gif"
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
      />
    );
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default RequiredAuth;
