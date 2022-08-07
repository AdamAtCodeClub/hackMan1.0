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
            </Row>
        </Container>
    )

}