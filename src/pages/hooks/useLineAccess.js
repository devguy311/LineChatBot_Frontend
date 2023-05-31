import { useState, useEffect } from "react";
import axios from "axios";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

let loaded = false;
const useLineAccess = (code) => {
    const [lineAccess, setLineAccess] = useState();
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loaded && code !== undefined && code !== null && code !== "") {
            loaded = true;
            axios.post("https://linebotserver-two.vercel.app/auth", {code: code})
            .then((response) => {
                if (response.status === 200){
                    setToken(response.data);
                    navigate("/main");
                }
            });
        }
    }, [code]);

    return {
        lineAccess: lineAccess,
        setLineAccess: setLineAccess,
    };
};

export default useLineAccess;
