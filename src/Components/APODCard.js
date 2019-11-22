import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

{/* <Nav style={{backgroundColor: '#f1f1f1'}}>Something</Nav> */}

const APODCard = props => {
return (
    <div className="card">
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>Photography Credit: {props.copyright}</CardSubtitle>
                <CardSubtitle>Date: {props.date}</CardSubtitle>
            </CardBody>
            <div className="text-center">
                <img className="propsPic" align-content='center' width="60%" src={props.hdurl} alt='Astronomy Picture of the Day' /></div>
            <CardBody>
                <CardText>Description: {props.explanation}</CardText>
            </CardBody>
        </Card>
    </div>      
    );
};

export default APODCard
