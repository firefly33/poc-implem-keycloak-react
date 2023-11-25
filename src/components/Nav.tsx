import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";
const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <header>
      <div className="top-0 w-full flex flex-wrap">
        <section className="x-auto">
          <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <h1 className="text-3xl font-bold font-heading">
                Keycloak React AUTH.
              </h1>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link className="hover:text-blue-800" to={"/"}>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-800" to={"/secured"}>
                    Page sécurisée
                  </Link>
                </li>
              </ul>
              <div className="flex items-center space-x-5">
                <div className="hover:text-gray-200">
                  {!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.login()}
                    >
                      Se connecter
                    </button>
                  )}

                  {!!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.logout()}
                    >
                      Déconnexion ({keycloak?.tokenParsed?.preferred_username})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Nav;
