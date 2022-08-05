import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/undrawsvg.svg";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {NavBar} from "./NavBar"
import Axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";

function Register(){
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Register');
  const [status, setStatus] = useState({});
  const [confirmpass,setconfirmpass]=useState("");
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
    if(confirmpass==formDetails.password)
    {
      
      Axios.post("api/users/", {         
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        password: formDetails.password
      }).then(function(response) {
        console.log('registered sussessfully');
        navigate("/login");
      }).catch(function(error) {
        console.log(error.response.data.message);
        seterror(error.response.data.message);
        console.log('Error on Authentication',formDetails);
      })
    }else{
      seterror("Password not matching");
    }
    
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
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={confirmpass} placeholder="Confirm Password" onChange={(e) => setconfirmpass(e.target.value)}/>
                    </Col>
                    <p></p>
                    <Col size={12} className="px-1">
                      {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      error!=null ?
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{error}</p>
                      </Col> :""
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

export default Register;