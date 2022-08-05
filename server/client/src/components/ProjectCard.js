import { Col } from "react-bootstrap";
import projImg1 from "../assets/img/endless-constellation.svg";
import { Link } from "react-router-dom";
export const ProjectCard = ({ _id,PName,Languages, date}) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      <Link to={"/menu/"+_id}>
      <div className="proj-imgbx">
      <div class="centered">{PName}</div>
        <img src={projImg1} />
        <div className="proj-txtx">
          <h4>Number of Languages: {Languages.length}</h4>
          <span>Created on: {date}</span>
        </div>
      </div>
      </Link>
    </Col>
    
  )
}
