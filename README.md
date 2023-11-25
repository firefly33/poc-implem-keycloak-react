# POC d'implementation of keycloak in a react (vite) app

## Prerequisites

### Docker local keycloak for test purposes

```zsh
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.0 start-dev --http-relative-path=/auth
```

### Must read tutorial

https://blog.logrocket.com/implement-keycloak-authentication-react/
