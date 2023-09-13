import { createContext, useState } from "react";

export const AuthContext = createContext<any>({
    user: null,
    setUser: undefined
});

export const AuthContextProvider = (props: any) => {

    const setUser = (user: any) => {
      setState({...state, user: user})
    }
  
    const initState = {
      user: null,
      setUser: setUser
    } 
  
    const [state, setState] = useState(initState);
  
    return(
        <AuthContext.Provider value={state}>
        {props.children}
        </AuthContext.Provider>
    );
  }
