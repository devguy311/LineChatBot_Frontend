import { useState } from "react";

const useAuthorizationCode = () => {
    const getAuthorizationCode = () => {
        return localStorage.getItem("authorization_code") === "undefined" || localStorage.getItem("authorization_code") === null
            ? undefined
            : (localStorage.getItem("authorization_code"));
    };

    const [authorizationCode, setAuthorizationCode] = useState(getAuthorizationCode());

    const saveAuthorizationCode = (newAuthorizationCode) => {
        if (newAuthorizationCode === undefined) localStorage.removeItem("authorization_code");
        else localStorage.setItem("authorization_code", newAuthorizationCode);
        setAuthorizationCode(newAuthorizationCode);
    };

    return {
        authorizationCode,
        setAuthorizationCode: saveAuthorizationCode,
    };
};

export default useAuthorizationCode;
