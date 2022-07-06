import GlobalStyle from "./shared/globalStyles";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  formOrderInput,
  formProductInput,
  formUserInputs,
} from "./util/formDataSource";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { darkTheme, lightTheme } from "./shared/theme";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  // Authentication
  const { user } = useContext(AuthContext);
  interface AuthProps {
    children: JSX.Element;
  }
  const RequireAuth: React.FC<AuthProps> = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    // THEME PROVIDER FOR THEME SWITCHING
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* GLOBAL STYLES */}
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New userInputs={formUserInputs} />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={<New userInputs={formProductInput} />}
              />
            </Route>
            <Route path="orders">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New userInputs={formOrderInput} />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
