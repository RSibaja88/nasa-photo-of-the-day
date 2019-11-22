import React from "react";
import {Card, CardBody, CardTitle, Row, Container, Col} from 'reactstrap';


// import styled from 'styled-components';

function Header() {

return (
<section className="text-center">
    <Container>
        <Card>        
            <CardBody>                
                    <Row>                   
                    <img src={require("./img/NasaLogo.png")}  alt='NASA Logo' height='9%' width='9%' />
                    <h1 >Astronomy Photo of the Day</h1>
                    </Row>           
                </CardBody>
            </Card>
    </Container>
</section>
    );

};

export default Header;