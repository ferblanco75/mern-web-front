import {useState, useEffect, createContext} from "react";

export const AuthContext  = createContext();

export function AuthProvider(props){
    const { children } = props;
    const [user, setUser] =useState(null);
    const [token, setToken] =useState(null);

    useEffect(()=> {
        //comprueba si ell user esta logueado o no
    },[]);   



const login = async (accessToken) => {
    try {
        setUser({username:"pepe"});
        setToken(accessToken);
    } catch(error) {
        console.log(error)
    }
}

const data = {
    accessToken: token,
    user,
    login,
};
//el provider tiene una propiedad que es value, ahi le pongo lo que quiero exportar
//en mi caso quiero exportar data
return <AuthContext.Provider value={data}> {children} </AuthContext.Provider> ;

}