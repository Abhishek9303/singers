import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div id="login-form">
    <div id="login-head">
         <h1>Log.In</h1>
    </div>
<div id="login-details">
    <form action="" >
         
         <div id="user">
    <input type="text" name="name" placeholder="Username"/>
    </div>
    
    <div id="pass">
    <input type="password" name="password" placeholder="Password"/>
    </div>

    <div id="submit">
    <input type="submit" value="Log-In"/>
         </div>
    </form>

</div>
</div>

  )
}

export default Login