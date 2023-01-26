import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Rouuter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { apollo, darkModeVar, isLoggedInVar } from "./apollo";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ApolloProvider client={apollo}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Rouuter>
            <Switch>
              <Route path={routes.home} exact>
                {isLoggedIn ? <Home /> : <Login />}
              </Route>
              {!isLoggedIn ? 
              (<Route path={routes.signUp} exact>
                <SignUp />
              </Route>)
              : null}
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Rouuter>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
