import NavBar from "../src/components/NavBar"
import Balance from "../src/components/Balance"
import UserList from "../src/components/UserList"
import { useEffect } from "react"

const Dashboard = () => {
  useEffect
  return(
    <div>
      <NavBar></NavBar>
      <Balance amount={0}></Balance>
      <UserList></UserList>
    </div>
  )
}

export default Dashboard