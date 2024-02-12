import React from 'react'

const Sidebar = () =>{
  return (
    <div className='sidebar'>
        <div className="logo side">
            <img src="../src/assets/logo.png" alt="image" />
        </div>
        <div className="mainMenu side">
        <div className="menutext">
            <p>MAIN MENU</p>
        </div>
            <div className="menulists">
            <img src="../src/assets/Vector.png" alt="Dashboard" />
            <li>Dashboard</li>
            </div>
            <div className="menulists">
            <img src="../src/assets/recruitment.png" alt="Dashboard" />
            <li>Recruitment</li>
            </div>
            <div className="menulists">
            <img src="../src/assets/schdule.png" alt="Dashboard" />
            <li>Schdule</li>
            </div>
            <div className="menulists">
            <img src="../src/assets/employee.png" alt="Dashboard" />
            <li>Employee</li>
            </div>
            <div className="menulists">
            <img src="../src/assets/department.png" alt="Dashboard" />
            <li>Department</li>
            </div>
        </div>
        <div className="other side">
        <div className="menutext">
            <p>OTHER</p>
        </div>
            <div className="menulists">
            <img src="../src/assets/ic_support.png" alt="Dashboard" />
            <li>Support</li>
            </div>
            <div className="menulists">
            <img src="../src/assets/settings.png" alt="Dashboard" />
            <li>Settings</li>
            </div>
        </div>
    </div>
  )
  }
export default Sidebar;