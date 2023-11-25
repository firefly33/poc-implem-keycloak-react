# POC d'implementation of keycloak in a react (vite) app

## Prerequisites

### Docker local keycloak for test purposes

```zsh
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.0 start-dev --http-relative-path=/auth
```

## In the codebase

- First, create a Keycloak.ts file

It should look like this :

```ts
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://<your_keycloak_domain>/auth",
  realm: "<realm_name>",
  clientId: "<client_id>",
});

export default keycloak;
```

- Then, in your App.tsx, right before setting the Router...

Inject the keycloak provider

```ts
<>
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <Routes>...</Routes>
    </BrowserRouter>
  </ReactKeycloakProvider>
</>
```

### Must read tutorial

https://blog.logrocket.com/implement-keycloak-authentication-react/
