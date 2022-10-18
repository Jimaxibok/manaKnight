import React, {useContext} from "react";
import { logOut } from "../authContext";
import userIcon from '../assets/images/userIcon.svg'
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom"


const AdminDashboardPage = () => {

  const navigate = useNavigate()
  const { dispatch, state } = useContext(AuthContext)

  const handleLogout = () =>{
    logOut(dispatch, state.role)
    navigate("/" + state.role + "/login")
  }
  
  return (
    <>
    <div className='w-full flex justify-end'>
      <button onClick={handleLogout}>Logout</button>
    </div>

      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
        Dashboard 
      </div>

    </>
  );
};

export default AdminDashboardPage;
