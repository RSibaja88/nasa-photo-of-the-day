import React from "react";
import {Card, CardBody, CardTitle,} from 'reactstrap';

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




function Header() {

return (
    <section className="headerBlock">
    <Card>
    <CardBody>
        <img src={require("./img/NasaLogo.png")} alt='NASA Logo' height='17%' width='17%' />
        <h1>Astronomy Photo of the Day</h1>
        <CardTitle>Call Us: 1800-385-9687</CardTitle>
        </CardBody>
        </Card>
    </section>
    );

};

export default Header;