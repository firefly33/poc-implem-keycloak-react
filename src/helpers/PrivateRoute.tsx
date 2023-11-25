import { useKeycloak } from "@react-keycloak/web";
import NotLoggedInPage from "../pages/NotLoggedInPage";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { keycloak } = useKeycloak();

  // const navigate = useNavigate();

  const isLoggedIn = keycloak.authenticated;

  /* redirect auto to homepage if not authed
  useEffect(() => {
    if (!keycloak.authenticated) navigate("/");
  }, [keycloak.authenticated]);*/

  return isLoggedIn ? children : <NotLoggedInPage />;
}

export default PrivateRoute;
