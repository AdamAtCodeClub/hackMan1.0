import './FAQ.css'; 
import { Container, Row, Col } from "react-bootstrap";

export default function FAQ(){

    return(
        <Container className="FAQ" id="faq">
            <h1>Frequently Asked Questions</h1>
            <Row className="faqContent">
                
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Who can attend hackMan?</p>
                        <p className="answer"><b>Anyone can attend hackMan!</b><br />The event is open to all, if you can get yourself to the Isle of Man, you're welcome to join in!</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Do I have to be studying Computer Science or Computing?</p>
                        <p className="answer"><b>Nope!</b><br />As mentioned before, anyone is welcome at hackMan, as long as you have a passion to create something, you're good to come.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Can under 18s take part in hackMan?</p>
                        <p className="answer"><b>Yes - kind of.</b><br />Anyone is welcome, however certain arrangements for under 18s are TBC.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Do I need a team before joining?</p>
                        <p className="answer"><b>It's up to you.</b><br />If you don't have a team, there will be opportunities to meet new people when travelling to the event or during check-in. The maximum team size is 4 hackers. Alternatively, you can take part individually.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Can I start before arrival?</p>
                        <p className="answer"><b>Absolutely not!</b><br />To make hackMan as fair and enjoyable as possible for all, hacking must not start until after the opening ceremony. You are, of course, welcome to come up with ideas and plans beforehand.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Can I join online?</p>
                        <p className="answer"><b>Not this time.</b><br />In order to create the best experience for all attendees, we wanted to keep it all in person so we can fully focus on the experience.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                   <div className="qaInner">
                        <p className="question">How much does hackMan cost?</p>
                        <p className="answer"><b>Just your travel.</b><br />We aim to provide an all-inclusive weekend for hackers. From the moment you arrive at the venue, meals, snacks and much more will all be provided.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">What do I need to bring?</p>
                        <p className="answer"><b>The essentials.</b><br />You will, of course, need a computer to code on. We recommend bringing something comfortable to sleep with.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                    <div className="qaInner">
                        <p className="question">Is there a Code of Conduct?</p>
                        <p className="answer"><b>Yes.</b><br />We follow the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Major League Hacking Code of Conduct</a>. Put short, be respectful.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={12} className="qa">
                    <div className="qaInner">
                        <p className="question">How do I get to the Isle of Man?</p>
                        <p className="answer"><b>Boat or Plane.</b><br />There are air links to England (Liverpool, Manchester, Birmingham and London), Scotland (Edinburgh), NI and Ireland (Belfast and Dublin) If you are choosing to fly to IOM airport, please ensure that flights arrive before 5pm in order to make it to the coaches to the event. We are hoping to have a group travel plan on the boat, more information on that is available if needed.</p>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={12} className="qa">
                    <div className="qaInner">
                        <h3>If you have any more questions, feel free to get in touch via <a href="mailto:hi@hackman.im">hi@hackman.im</a></h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}