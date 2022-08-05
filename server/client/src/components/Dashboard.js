import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/endless-constellation.svg";
import { useState,useEffect } from "react";

import colorSharp2 from "../assets/img/color-sharp2.png";
import {NavBar} from "./NavBar"
import TrackVisibility from 'react-on-screen';
import Axios from "axios";
import { Link } from "react-router-dom";

import { colourOptions } from "./data.js";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "black" }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: "grey",
        color: "white",
        cursor: isDisabled ? "not-allowed" : "default"
      };
    }
  };

const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

function Dashboard(){
    var date2 = new Date().toDateString();
    const [name, setName] = useState("");
    const[date,setDate]=useState(date2);
    const [langs,setLangs]=useState([]);
    const [langs2,setLangs2]=useState([]);
    const [optionSelected,setoption]=useState(null);
    const [projects,setprojects]=useState([]);
    // const emailid=useSelector(state => console.log("mmm",state));
    const emailid=window.localStorage.getItem("emailid");

    useEffect(()=>{
      Axios.post("api/projects/", {    
      
        useremail: emailid
    }).then(function(response) {
      console.log('Project injected successfully');
      setprojects(response.data.data);
    }).catch(function(error) {
      console.log(error);
      console.log('There was an error fetching the project');
    });

    },[])

    useEffect(() => {

      const data={
        PName:name,
        date:date,
        useremail: emailid,
        Languages:langs
      }

      Axios.post("api/projects/create", {    
        PName:name,
        date:date,
        useremail: emailid,
        Languages:langs,
        translations:[]
    }).then(function(response) {
      console.log('Project created successfully');
      setoption(null);
      setLangs([]);
      setName("");
      setprojects(data=>[...projects,response.data]);
      console.log(projects);
      console.log(response.data);
      // console.log(data);
    }).catch(function(error) {
      console.log(error);
      console.log('There was an error creating the project');
    });

    }, [langs2]);

    function handleChange(selected){
        setoption(selected);
    }
    function handleAdd(e){
        e.preventDefault();    

        
          
            console.log("post ke andar");
            for (let element of optionSelected) {
              console.log("element",element);
              setLangs(langs =>[...langs, element]);
            }
            setLangs2(langs);         
          };

  

  return window.localStorage.getItem("isLoggedIn")==null ? <Navigate to="/"/>:(
    <section className="project" id="project">
        <NavBar/>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Welcome To Jetty</h2>
                <p>Add Project and Start your Journey</p>
                
                <input className="addtext" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <ReactSelect
                className="reactselect"
                options={colourOptions}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                styles={colourStyles}
                components={{
                    Option
                }}
                onChange={handleChange}
                allowSelectAll={true}
                value={optionSelected}
                />
                <Button className="addbutton" onClick={handleAdd}>Add</Button>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            console.log("Proj",project);
                            return (
                              
                              // <Link style={{position: 'relative'}} to={"/menu/"+project.PName} >
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                                // </Link>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Dashboard;