import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage";
import Secured from "./pages/SecuredPage";
import keycloak from "./Keycloak";
import PrivateRoute from "./helpers/PrivateRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="w-full h-screen">
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route
                path="/secured"
                element={
                  <PrivateRoute>
                    <Secured />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
