
import ReactDOM from 'react-dom/client';
import './index.css';
import MenuIcon from '@mui/icons-material/Menu';
import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Lr from './Lr';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
 
<Routes>
  <Route path='/reg' element={<Lr/>}/>
</Routes>
 <Routes>
 
 <Route path="/reg/note" element={<Header />} >
 

 <Route path='/reg/note/mec' element={<Navbar4/>}>
 <Route
          path="/reg/note/mec/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/reg/note/mec/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/mec/18ME86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>

 </Route>
 <Route path='/reg/note/eee' element={<Navbar3/>}>
 <Route
          path="/reg/note/eee/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/reg/note/eee/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/eee/18EE86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>

 </Route>
 <Route path='/reg/note/ece' element={<Navbar2/>}>
 <Route
          path="/reg/note/ece/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/reg/note/ece/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/ece/18EC86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>

 </Route>
 <Route path="/reg/note/cse" element={<Navbar/>} >
 <Route
          path="/reg/note/cse/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/reg/note/cse/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/reg/note/cse/18CS86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
 </Route>
 </Route>




    </Routes>
    
   
   
    </Router>
  
);
function Header() {
  const [burgerStatus,setburgerStatus]=useState(false);
 

return (
  <>
  <Container>
  <IconButton>
   <ChatIcon fontSize='large'/>
   </IconButton>
  
    <Menu>
    <IconButton>
 
  <h1 className='text'>Sri Sairam College Of Engineering</h1>
  </IconButton>
  
       
        
     

    </Menu>
   
    <RightMenu>
       
        <CustomMenu fontSize='large' onClick={()=>setburgerStatus(true)}/>
      
       
    </RightMenu>
    <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setburgerStatus(false)}/> 

         </CloseWrapper>
        <Link to="/reg/note/cse" className='sub'><button className='ui'> COMPUTER SCIENCE AND ENGINEERING
  
</button></Link><hr />
        <Link to="/reg/note/ece" className='sub'><button className='ui'> ELECTRONICS AND COMMUNICATION ENGINEERING
  
</button></Link><hr />
        <Link to="/reg/note/eee" className='sub'><button className='ui'> ELECTRICAL AND ELECTRONICS ENGINEERGING
  
</button></Link><hr />
        <Link to="/reg/note/mec" className='sub'><button className='ui'> MECHANICAL ENGINEERING
  
</button></Link><hr />
        
       
        
       
    </BurgerNav>
   
    
 
  </Container>
 <Outlet/>
  </>
  
)
}
function Navbar() {
  return (
    <div className='navb'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CSE
          </Link>
        </div>
      </nav>
      <div className="bg-light text-dark">
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          c-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21Mat11">
              21Mat11
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21CHE12">
              21che12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21CPS13">
              21cps13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21ELN14">
              21ELN14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21ME15">
              21ME15
            </Link>
          </li>
        </ul>

        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          p-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21Mat21">
              21Mat21
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21PHY12">
              21PHY12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21ELE13">
              21ELE13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21CIV14">
              21CIV14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/21EGDL25">
              21EGDL25
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          3rd-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18MAT31">
              18MAT31
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS32">
              18CS32
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS33">
              18CS33
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS34">
              18CS34
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS35">
              18CS35
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS36">
              18CS36
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          4th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18MAT41">
              18MAT41
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS42">
              18CS42
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS43">
              18CS43
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS44">
              18CS44
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS45">
              18CS45
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS46">
              18CS46
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          5th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS51">
              18CS51
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS52">
              18CS52
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS53">
              18CS53
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS54">
              18CS54
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS55">
              18CS55
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS56">
              18CS56
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          6th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS61">
              18CS61
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS62">
              18CS62
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS63">
              18CS63
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS64">
              18CS64
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS65">
              18CS65
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS66">
              18CS66
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          7th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS71">
              18CS71
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS72">
              18CS72
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS73">
              18CS73
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS74">
              18CS74
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS75">
              18CS75
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS76">
              18CS76
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          8th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS81">
              18CS81
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS82">
              18CS82
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS83">
              18CS83
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS84">
              18CS84
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS85">
              18CS85
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/cse/18CS86">
              18CS86
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
function Navbar2() {
  return (
    <div className='navb'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ECE
          </Link>
        </div>
      </nav>
      <div className="bg-light text-dark">
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          c-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21Mat11">
              21Mat11
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21CHE12">
              21che12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21CPS13">
              21cps13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21ELN14">
              21ELN14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21ME15">
              21ME15
            </Link>
          </li>
        </ul>

        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          p-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21Mat21">
              21Mat21
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21PHY12">
              21PHY12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21ELE13">
              21ELE13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21CIV14">
              21CIV14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/21EGDL25">
              21EGDL25
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          3rd-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18MAT31">
              18MAT31
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC32">
              18EC32
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC33">
              18EC33
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC34">
              18EC34
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC35">
              18EC35
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC36">
              18EC36
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          4th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18MAT41">
              18MAT41
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC42">
              18EC42
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC43">
              18EC43
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC44">
              18EC44
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC45">
              18EC45
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC46">
              18EC46
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          5th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC51">
              18EC51
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC52">
              18EC52
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC53">
              18EC53
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC54">
              18EC54
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC55">
              18EC55
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC56">
              18EC56
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          6th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC61">
              18EC61
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC62">
              18EC62
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC63">
              18EC63
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC64">
              18EC64
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC65">
              18EC65
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC66">
              18EC66
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          7th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC71">
              18EC71
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC72">
              18EC72
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC73">
              18EC73
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC74">
              18EC74
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC75">
              18EC75
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC76">
              18EC76
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          8th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC81">
              18EC81
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC82">
              18EC82
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC83">
              18EC83
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC84">
              18EC84
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC85">
              18EC85
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/ece/18EC86">
              18EC86
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
function Navbar3() {
  return (
    <div className='navb'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EEE
          </Link>
        </div>
      </nav>
      <div className="bg-light text-dark">
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          c-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21Mat11">
              21Mat11
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21CHE12">
              21che12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21CPS13">
              21cps13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21ELN14">
              21ELN14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21ME15">
              21ME15
            </Link>
          </li>
        </ul>

        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          p-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21Mat21">
              21Mat21
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21PHY12">
              21PHY12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21ELE13">
              21ELE13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21CIV14">
              21CIV14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/21EGDL25">
              21EGDL25
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          3rd-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18MAT31">
              18MAT31
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE32">
              18EE32
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE33">
              18EE33
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE34">
              18EE34
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE35">
              18EE35
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE36">
              18EE36
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          4th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18MAT41">
              18MAT41
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE42">
              18EE42
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE43">
              18EE43
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE44">
              18EE44
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE45">
              18EE45
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE46">
              18EE46
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          5th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE51">
              18EE51
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE52">
              18EE52
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE53">
              18EE53
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE54">
              18EE54
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE55">
              18EE55
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE56">
              18EE56
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          6th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE61">
              18EE61
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE62">
              18EE62
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE63">
              18EE63
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE64">
              18EE64
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE65">
              18EE65
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE66">
              18EE66
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          7th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE71">
              18EE71
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE72">
              18EE72
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE73">
              18EE73
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE74">
              18EE74
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE75">
              18EE75
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE76">
              18EE76
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          8th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE81">
              18EE81
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE82">
              18EE82
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE83">
              18EE83
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE84">
              18EE84
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE85">
              18EE85
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/eee/18EE86">
              18EE86
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
function Navbar4() {
  return (
    <div className='navb'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mech
          </Link>
        </div>
      </nav>
      <div className="bg-light text-dark">
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          c-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21Mat11">
              21Mat11
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21CHE12">
              21che12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21CPS13">
              21cps13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21ELN14">
              21ELN14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21ME15">
              21ME15
            </Link>
          </li>
        </ul>

        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          p-cycle
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21Mat21">
              21Mat21
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21PHY12">
              21PHY12
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21ELE13">
              21ELE13
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21CIV14">
              21CIV14
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/21EGDL25">
              21EGDL25
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          3rd-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18MAT31">
              18MAT31
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME32">
              18ME32
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME33">
              18ME33
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME34">
              18ME34
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME35">
              18ME35
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME36">
              18ME36
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          4th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18MAT41">
              18MAT41
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME42">
              18ME42
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME43">
              18ME43
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME44">
              18ME44
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME45">
              18ME45
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME46">
              18ME46
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          5th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME51">
              18ME51
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME52">
              18ME52
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME53">
              18ME53
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME54">
              18ME54
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME55">
              18ME55
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME56">
              18ME56
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          6th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME61">
              18ME61
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME62">
              18ME62
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME63">
              18ME63
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME64">
              18ME64
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME65">
              18ME65
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME66">
              18ME66
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          7th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME71">
              18ME71
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME72">
              18ME72
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME73">
              18ME73
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME74">
              18ME74
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME75">
              18ME75
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME76">
              18ME76
            </Link>
          </li>
        </ul>
        <Link
          class="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          8th-sem
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME81">
              18ME81
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME82">
              18ME82
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME83">
              18ME83
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME84">
              18ME84
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME85">
              18ME85
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-primary mx-5 my-1" to="/reg/note/mec/18ME86">
              18ME86
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
function Notes(props) {
  return (
    <div className="Notes">
      <h1>{props.title}</h1>
      
      
      
      <br />
      <br />
      <div className="Notes">
        <h1>Notes</h1>
        <hr />
        <h1>module 1 - {props.name1}</h1>
        <a className="btn btn-danger" href={props.link1} >
          pdf-{props.name1}
        </a>
        <hr />
        <h1>module 2 - {props.name2}</h1>
        <a className="btn btn-danger" href={props.link2} >
          pdf-{props.name2}
        </a>
        <hr />
        <h1>module 3 - {props.name3}</h1>
        <a className="btn btn-danger" href={props.link3} >
          pdf-{props.name3}
        </a>
        <hr />
        <h1>module 4 - {props.name4}</h1>
        <a className="btn btn-danger" href={props.link4} >
          pdf-{props.name4}
        </a>
        <hr />
        <h1>module 5 - {props.name5}</h1>
        <a className="btn btn-danger" href={props.link5} >
          pdf-{props.name5}
        </a>
        <hr />
      </div>
    </div>
  );
}


const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
background:rgb(240, 191, 191);;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
border:2px solid black;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;

justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;
}
@media(max-width:768px){
  display:none;
}



`
const RightMenu=styled.div`
display:flex;

align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin:10px;

}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
border:2px solid black;

right:0;
background:rgb(225, 163, 81);
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
text-align:start;
flex-direction:column;
transform:${props=>props.show? `translateX(0)`:`translateX(100%)`};
transition: transform 0.2s ;
li{
  padding:15px;
  border-bottom:1px solid rgba(0,0,0,0.2);
  a{
      font-weight:600;
  }
}

`
const CustomClose=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`





reportWebVitals();
