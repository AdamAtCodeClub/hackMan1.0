import './Intro.css'; 
import { Container } from "react-bootstrap";
import React from 'react';

export default function Intro(){


    return(
            <Container className="Intro">
                <div className="imgBox"><div className="imgInner"><img src="images/logo-dark.png" alt="hackMan logo"/></div></div>
                <div className="postImgBox">
                    <h1>hackMan</h1>
                    <h2>Mountain View Innovation Centre</h2>
                    <h2>Ramsey, Isle of Man</h2>
                    <h3>The Isle of Man's First Ever Hackathon</h3>
                </div>
                <br />
            </Container>
    )

}