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

         <div className="dashboard-container">
            <div className='app-logout-div flex items-center justify-between m-4'>
            <h2  className='dash-header'>APP</h2>
            <button className="flex">
              <img src={userIcon} alt="userIcon" />
              <span>Logout</span>
            </button>
            </div>

            <div className='leaderboard'>
                <div className='today-leaderboard flex items-center justify-between m-4'>
                  <h3>Today"s leaderboard</h3>

                  <div id='sub-date' >
                    <p>30 May 2022  <span> SUBMISSIONS OPEN </span> 11:34</p>
                  </div>


                </div>

            </div>
       
           
      </div>
    </>
  );
};

export default AdminDashboardPage;
