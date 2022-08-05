import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./NavBar"
import {Banner} from "./Banner"
import {useEffect, useState} from "react"
import Axios from "axios";

import {incNumber} from "./actions";
import {decNumber} from "./actions";
import { setEmail } from './actions';

import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';

function Home() {
  const [listofUsers,setlistofUsers]=useState([]);
  const changeTheNumber = useSelector(state => state.changeTheNumber.num);
  const emailid=useSelector(state => state.changeTheNumber.email);
  
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   Axios.post("api/auth/", {         
  //       email: "kira5@dn.com",
  //       password: "12345678@aA"
  //   }).then(function(response) {
  //     console.log('Authenticated');
  //     dispatch(setEmail("kira5@dn.com"));
  //     window.localStorage.setItem("isLoggedIn",true);
  //     window.localStorage.setItem("emailid","kira5@dn.com");
  //   }).catch(function(error) {
  //     console.log(error);
  //     console.log('Error on Authentication');
  //   });

  // },[]);

  return window.localStorage.getItem("isLoggedIn")=="true" ?<Navigate to="/dashboard"/>:(
    <div className="App">
      <NavBar/>
      
      <Banner/>
      {console.log("local",window.localStorage.getItem("isLoggedIn"))}
      
    </div>
  );
}

export default Home;
