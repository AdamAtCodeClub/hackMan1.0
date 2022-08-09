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
                        <p className="answer"><b>Anyone can attend hackMan!</b><br />Whilst the event is aimed at students and recent graduates, if you can get yourself to the Isle of Man, you're welcome to join in!</p>
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
                        <p className="answer"><b>Yes - kind of.</b><br />We recommend only locals as under 18s will need to source their own accommodation overnight, such as going home.</p>
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
                        <p className="answer"><b>Not this time.</b><br />In order to create the best experience for all attendees, we wanted to keep it all in person so we could focus fully on their experience.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} className="qa">
                   <div className="qaInner">
                        <p className="question">How much does hackMan cost?</p>
                        <p className="answer"><b>Completely Nothing!</b><br />We aim to provide an all-inclusive weekend for hackers. From the moment you step foot on the Island (<i>and possibly before!</i>), meals, snacks and much more will all be provided.</p>
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
            </Row>
        </Container>
    )

}