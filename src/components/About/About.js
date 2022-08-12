import './About.css'; 
import { Col, Container, Row } from "react-bootstrap";

export default function About(){


    return(
        <Container className="About" id="about">
            <Row className="aboutContent">
                <Col md={6} sm={12}><img src="images/logo-light.png" alt="hackMan logo" /></Col>
                <Col md={6} sm={12}>
                    <h1>About</h1>
                    <h2>What is a Hackathon?</h2>
                    <p>What is a Hackathon? A hackathon is a 24–48-hour period where <a href="https://www.webroot.com/us/en/resources/glossary/what-is-a-hacker#:~:text=A%20hacker%20is%20just%20a%20person%20who%20uses%20computer%20programming%20or%20technical%20skills%20to%20overcome%20a%20challenge%20or%20problem." target="_blank" rel="noreferrer">hackers</a> come together, either in teams or individually, to create a piece of software. During the event, hackers compete against each other by participating in challenges to create software to meet specific criteria or hackers may choose to just experiment and have fun to see what the world of coding can allow them to create. Teams have the ability to win prizes by creating the most effective response to the challenges or by having the top project overall.</p>
                    <h2>What is hackMan?</h2>
                    <p>hackMan is the Isle of Man’s first ever hackathon, held between the 28th to the 30th of October. We are looking to host upwards of 1OO “hackers” (competitors), not only from across the Isle of Man but also further afield, with an additional support pathway for those travelling to the island.</p>
                </Col>
                <Col>
                    <Row>
                        <Col sm={12} md={6}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8787.294640685568!2d-4.411613909833771!3d54.32747103244227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48639f3e6c7e2977%3A0xa41cf10fc8ade59f!2sMountain%20View%20Innovation%20Centre!5e0!3m2!1sen!2sim!4v1659875062194!5m2!1sen!2sim" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                        </Col>
                        <Col sm={12} md={6}>
                            <h2>Where are we?</h2>
                            <p>We will be taking residency in Studio One at <a href="https://mvic.im" target="_blank">Mountain View Innovation Centre</a> in the Isle of Man.</p>
                            <p>Mountain View Innovation Centre
                                <br />Jurby Road
                                <br />Lezayre, Ramsey
                                <br />Isle of Man
                                <br />IM7 2DZ</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}