import React from "react";
import {Card, CardBody, CardTitle, Row, Container} from 'reactstrap';

function Header() {

return (
    <section className="headerBlock">
    <Container>
    <Card>
    <CardBody>
    <Row>
        <img src={require("./img/NasaLogo.png")} alt='NASA Logo' height='9%' width='9%' />
        <h1>Astronomy Photo of the Day</h1>
        <CardTitle>Call Us: 1800-385-9687</CardTitle>
        </Row>
        </CardBody>
        </Card>
        </Container>
        
    </section>
    );

};

export default Header;