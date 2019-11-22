import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';



// const Example = (props) => {
//     return (
//       <div>
//         <Card>
//           <CardBody>
//             <CardTitle>Card title</CardTitle>
//             <CardSubtitle>Card subtitle</CardSubtitle>
//           </CardBody>
//           <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//           <CardBody>
//             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//             <CardLink href="#">Card Link</CardLink>
//             <CardLink href="#">Another Link</CardLink>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   };




const APODCard = props => {
    return (
    <div>
    <Card>
    <CardBody>
    <CardTitle>{props.title}</CardTitle>
    <CardSubtitle>Photography Credit: {props.copyright}</CardSubtitle>
    <CardSubtitle>Date: {props.date}</CardSubtitle>
    </CardBody>
       <img className="propsPic" width="80%" src={props.hdurl} alt='Astronomy Picture of the Day' />
    <CardBody>
            <CardText>Description: {props.explanation}</CardText>
            </CardBody>
            </Card>
            </div>
        
    );
};

export default APODCard
