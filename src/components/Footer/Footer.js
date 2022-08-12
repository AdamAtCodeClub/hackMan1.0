import './Footer.css'; 
import { Container } from "react-bootstrap";

export default function Footer(){


    return(
        <Container className="Footer">
            <p>&copy; hackMan 2021 | <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" rel="noreferrer" target="_blank">Major League Hacking Code of Conduct</a></p>
        </Container>
    )

}