import GlobalStyle from "./shared/globalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { formProductInput, formUserInputs } from "./util/formDataSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { darkTheme, lightTheme } from "./shared/theme";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    // THEME PROVIDER FOR THEME SWITCHING
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* GLOBAL STYLES */}
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New userInputs={formUserInputs} />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New userInputs={formProductInput} />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
