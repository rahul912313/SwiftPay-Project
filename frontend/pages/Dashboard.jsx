import NavBar from "../src/components/NavBar"
import Balance from "../src/components/Balance"
import UserList from "../src/components/UserList"

const Dashboard = () => {
  return(
    <div>
      <NavBar></NavBar>
      <Balance></Balance>
      <UserList></UserList>
    </div>
  )
}

export default Dashboard