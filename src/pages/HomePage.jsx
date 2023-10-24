import { Link } from "react-router-dom";
import { useAuth } from "hooks/use-auth";

const HomePage = () => {
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <Link to="/table" />
  ) : (
    alert("Please write correct username or password")
  );
};

export default HomePage;
