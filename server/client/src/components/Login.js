import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/login.svg";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {NavBar} from "./NavBar"
import Axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Login');
  const [status, setStatus] = useState({});
  const [error,seterror]=useState(null);
  const navigate=useNavigate();

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  Axios.post("api/auth/", {         
    email: formDetails.email,
    password: formDetails.password
  }).then(function(response) {
    console.log('Logged in');
    window.localStorage.setItem("isLoggedIn",true);
    window.localStorage.setItem("emailid",formDetails.email);
  }).then(()=>{
    navigate("/dashboard");
  }).catch(function(error) {
    // console.log(error.response.data.message);
    seterror(error.response.data.message);
    console.log('Error on logging',formDetails);
  })
    
    // setButtonText("Sending...");
    // let response = await fetch("", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully'});
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    // }
    console.log("subimt clicker");
  };

  return window.localStorage.getItem("isLoggedIn")=="true" ?<Navigate to="/"/>: (
    <section className="contact" id="connect">
      
      <NavBar/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Login</h2>
                <h5 style={{color:"red"}}>{error}</h5>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required="true" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)} required="true"/>
                    </Col>
                    <Col size={12} className="px-1">
                      {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;