import { useState } from "react";

const useToken = () => {
    const getToken = () => {
        const idToken =
            localStorage.getItem("id_token") === "undefined" || localStorage.getItem("id_token") === null
                ? undefined
                : (localStorage.getItem("id_token"));
        const accessToken =
            localStorage.getItem("access_token") === "undefined" || localStorage.getItem("access_token") === null
                ? undefined
                : (localStorage.getItem("access_token"));
        const refreshToken =
            localStorage.getItem("refresh_token") === "undefined" || localStorage.getItem("refresh_token") === null
                ? undefined
                : (localStorage.getItem("refresh_token"));
        const sub =
            localStorage.getItem("sub") === "undefined" || localStorage.getItem("sub") === null
                ? undefined
                : (localStorage.getItem("sub"));
        const name =
            localStorage.getItem("name") === "undefined" || localStorage.getItem("name") === null
                ? undefined
                : (localStorage.getItem("name"));
        const picture =
            localStorage.getItem("picture") === "undefined" || localStorage.getItem("picture") === null
                ? undefined
                : (localStorage.getItem("picture"));
        const email =
            localStorage.getItem("email") === "undefined" || localStorage.getItem("email") === null
                ? undefined
                : (localStorage.getItem("email"));

        return [idToken, accessToken, refreshToken, sub, name, picture, email];
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (newToken) => {
        if (newToken.id_token === undefined) localStorage.removeItem("id_token");
        else localStorage.setItem("id_token", newToken.id_token);

        if (newToken.access_token === undefined) localStorage.removeItem("access_token");
        else localStorage.setItem("access_token", newToken.access_token);

        if (newToken.refresh_token === undefined) localStorage.removeItem("refresh_token");
        else localStorage.setItem("refresh_token", newToken.refresh_token);

        if (newToken.sub === undefined) localStorage.removeItem("sub");
        else localStorage.setItem("sub", newToken.sub);

        if (newToken.name === undefined) localStorage.removeItem("name");
        else localStorage.setItem("name", newToken.name);

        if (newToken.picture === undefined) localStorage.removeItem("picture");
        else localStorage.setItem("picture", newToken.picture);

        if (newToken.email === undefined) localStorage.removeItem("email");
        else localStorage.setItem("email", newToken.email);

        setToken(newToken);
    };

    return {
        token,
        setToken: saveToken,
    };
};

export default useToken;
