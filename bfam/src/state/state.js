import { useSelector } from "react-redux";

const useAppState = () => {
  const isLoggedIn = useSelector((state) => state.login.loggedIn);
  const user = useSelector((state) => state.login.user);
  const applicationState = { loggedIn: isLoggedIn, user: user };
  return applicationState;
};
export default useAppState;
