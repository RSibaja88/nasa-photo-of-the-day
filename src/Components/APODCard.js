import React from "react";
import Axios from "axios";



function PicCard() 

const [photo, grabphoto] = useState([]);

{useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`)
      .then(data => {
        console.log(data);
        // setPetData(data.data.message);
      });
  }, []);
//API goes here
// return (

//     <section className="picCard">
//         <img src={require("./img/NasaLogo.png")} height='17%' width='17%' />
//         <div className="title">Astronomy Photo of the Day</div>
//         <div className="contactBox">Call Us: 1800-385-9687</div>
//     </section>
//     );

// };

export default PicCard;