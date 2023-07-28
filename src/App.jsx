
import "./index.css";
import "remixicon/fonts/remixicon.css";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Event from "./component/Event";
import ImageEvent from "./component/ImageEvent";
import AllEvent from "./component/AllEvent";
import Dashboard from "./Admin/Dashboard";
import AddVideo from "./Admin/AddVideo";
import AddEvent from "./Admin/AddEvent";
import Login from "./Admin/Login";



function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/AllEvent" element = {<AllEvent/>}/>
          <Route path="/Event" element = {<Event/>}/>
          <Route path="/ImageEvent/:id" element = {<ImageEvent/>}/>
          <Route path="/admin" element = {<Login/>}/>
          <Route path="/admin/dashboard" element = {<Dashboard/>}/>
          <Route path="/admin/addVideo" element = {<AddVideo/>}/>
          <Route path="/admin/addEvent" element = {<AddEvent/>}/>
        </Routes>
        
    </>
  );
}

export default App;
