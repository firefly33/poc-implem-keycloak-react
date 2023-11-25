import { useKeycloak } from "@react-keycloak/web";

function NotLoggedInPage() {
  const { keycloak } = useKeycloak();

  return (
    <section className="flex flex-col items-center gap-4">
      <h1>Vous n'êtes pas connecté !</h1>
      <p>Veuillez vous identifier afin d'accéder à la page</p>
      <div>
        <button
          onClick={() => keycloak.login()}
          className="rounded-md bg-red-400 text-white px-4 py-2"
        >
          Se connecter
        </button>
      </div>
    </section>
  );
}

export default NotLoggedInPage;
