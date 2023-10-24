import { useSelector } from "react-redux";

export function useAuth() {
  const { email, password } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    password,
  };
}
