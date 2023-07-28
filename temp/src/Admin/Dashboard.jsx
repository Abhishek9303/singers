import React, { useRef, useState } from 'react'
import '../component/Navbr.css'
import gsap  from 'gsap'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Dash.css'
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [flag, setFlag] = useState(1)
    const first = useRef(null)
    const rightNAV =(e)=>{
      e.preventDefault();
      if(flag === 1){
        gsap.to(first.current,{
          left:"0%",
          duration:1,
        })
        setFlag(0);
      }
      else{
        gsap.to(first.current,{
          left:"-16%",
          duration:1,
        })
        
        setFlag(1);
      }
    }
  
  return (
    
    <>
        <div id="main">
          <div className='rightNav' ref={first}>
            <h1 onClick={rightNAV}>Dashboard <i class="ri-menu-4-line"></i></h1>
            <div className="txtdash">
                <Sidebar>
  <Menu 
  menuItemStyles={{
      button: {
          // the active class will be added automatically by react router
          // so we can use it to style the active menu item
          color:'black',
          [`&.active`]: {
          backgroundColor: 'white',
          color: 'black',
        },
      },
    }}
  >
    <SubMenu label="Video" >
      <MenuItem> <Link to={'/admin/addVideo'}>Add Video</Link> </MenuItem>
      <MenuItem> Delete Video </MenuItem>
    </SubMenu>
    <SubMenu label="Events" >
      <MenuItem> <Link to={'/admin/addEvent'}>Add Event</Link> </MenuItem>
      <MenuItem> Delete Event </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
            </div>
          </div>

            {/* <h1>Admin Panel</h1> */}
        </div>
    </>
  )
}

export default Dashboard