// typing effect animation video https://www.youtube.com/watch?v=42M9esAvAEU&ab_channel=EasyTutorials

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/bird.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

// import Typed from "typed.js";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "हिन्दी", "English", "日本語 にほんご ニホンゴ","pусский язык" ];
  const period = 2000;


  // var typed= new Typed(".auto-input",{
  //   strings:['Aaaaaa','Baaaa','Caaaaa'],
  //   typeSpeed:100,
  //   backSpeed:100,
  //   loop:true
  // })

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
         
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>


         <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <span className="tagline">Jetty Your Multilanguage JSON Generator</span>
                {/* <h1>I am <span className="auto-input"></span></h1> */}
                <h1>{`Translate Your Website to`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "हिन्दी", "English", "日本語 にほんご ニホンゴ","pусский язык" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Jetty is an instant translation solution for making your website support multiple languages for free.</p>
                  <p>To make a website support multiple languages people use i18 library along with key value pairs for each language for eg. if a text is wrapped around key naming "k1" and selected language is "en" then i18 library will go to the en.json file and look for value mapped on "k1" similarily if the selected language is hindi then it will look for "k1" in "hi.json" file</p>
                  <p>This is a huge labour to map those keys with values and find their appropriate translations and create an error free JSON file</p>
                  <p>This is where Jetty comes in picture! Leave all your manual labour to Jetty and focus on programming Logic</p>
                  <Link to={"/login"} style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}>Sign In <ArrowRightCircle size={25} /></button></Link>
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
