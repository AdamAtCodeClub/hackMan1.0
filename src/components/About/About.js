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
                    <p>What is a Hackathon? A hackathon is a 24–48-hour period where groups of primarily students come together, either in teams or individually, to create a piece of software. Under the high-paced environment, the teams compete aiming to create software following certain criteria for specific challenges, or just to create for fun. Ultimately, teams can win prizes for creating the best solution to a challenge or for creating the best project overall.</p>
                    <h2>What is hackMan?</h2>
                    <p>hackMan is the Isle of Man’s first ever hackathon, held between the 28th to the 30th of October. We are looking to host upwards of 1OO “hackers” (competitors), not only from across the Isle of Man but also further afield, with an additional support pathway for those travelling to the island.</p>
                </Col>
                <Col>
                    <Row>
                        <Col sm={12} md={6}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8787.294640685568!2d-4.411613909833771!3d54.32747103244227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48639f3e6c7e2977%3A0xa41cf10fc8ade59f!2sMountain%20View%20Innovation%20Centre!5e0!3m2!1sen!2sim!4v1659875062194!5m2!1sen!2sim" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                        <Col sm={12} md={6}>
                            <h2>Where are we?</h2>
                            <p>We will be taking residency in Studio One at <a href="https://mvic.im">Mountain View Innovation Centre</a> in the Isle of Man.</p>
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