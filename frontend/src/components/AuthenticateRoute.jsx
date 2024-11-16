import { useContext, useEffect } from "react"
import { AuthContext } from "../../store/AuthContext"
import { useNavigate } from "react-router-dom";

const AuthenticatedRoute = ({children}) => {
  const {isAuthenticated, isLoading} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    console.log(isAuthenticated);

    if(!isAuthenticated && !isLoading){
      navigate("/");
    }
  }, [isAuthenticated])

  // Show loading if still checking for authentication 
  if(isLoading){
    return(
      <div>Loading</div>
    )
  }

  // If authenticated return the children routes in the Authenticated routes 
  return children;

}

export default AuthenticatedRoute