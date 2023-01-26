import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const userLogin = (token) => {
    localStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
}

export const userLogout = (history) => {
    localStorage.removeItem(TOKEN);
    isLoggedInVar(false);
    history?.replace();
}

const DARK_MODE = "darkMode";

export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const onDarkMode = () => {
    localStorage.setItem(DARK_MODE, "on");
    darkModeVar(true);
}

export const offDarkMode = () => {
    localStorage.removeItem(DARK_MODE);
    darkModeVar(false);
}

export const apollo = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
})
