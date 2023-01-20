import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Rouuter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { darkTheme, GlobalStyles, lightTheme } from "./style";

function App() {

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Rouuter>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>

      </Rouuter>
    </ThemeProvider>
  );
}

export default App;
