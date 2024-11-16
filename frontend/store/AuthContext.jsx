import { createContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { set } from "mongoose";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {

      setAuthenticated(true);
      // try{
      //   const decoded = jwtDecode(token);
      //   const currrentTime = Date.now()/1000;

      //   if(decoded.exp > currrentTime){
      //     setAuthenticated(true);
      //   }else{
      //     localStorage.removeItem("authToken");
      //     setAuthenticated(false);
      //   }

      // }catch(e){
      //   logout();
      // }
    }
    setLoading(false);
  }, []);

  // // Log isAuthenticated here to see the updated value
  // useEffect(() => {
  //   console.log("isAuthenticated:", isAuthenticated); // This will show the updated value
  // }, [isAuthenticated]); // This effect will run whenever isAuthenticated changes

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuthenticated(true);
  }

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthenticated(false);
  }

  return(
    <AuthContext.Provider value = {{isAuthenticated, login, logout, isLoading}}>
      {children}
    </AuthContext.Provider>
  )

}


export {AuthContext, AuthProvider};