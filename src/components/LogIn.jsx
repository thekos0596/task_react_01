import Form from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const dispatch = useDispatch;
  const push = useNavigate;

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ email }) => {
        console.log(email);
        dispatch(
          setUser({
            userName: email,
            password: password,
          })
        );
        push("/");
      })
      .catch(console.error);
  };

  return <Form title="LogIn" handleClick={handleLogin} />;
};

export default LogIn;
