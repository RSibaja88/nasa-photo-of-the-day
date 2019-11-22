import React, {useEffect, useState} from "react";
import axios from "axios";
import APODCard from "./APODCard";
import { className } from "postcss-selector-parser";

// https://api.nasa.gov/planetary/apod?api_key=PbNGveVUg0O5CjepfhL0Y2O3uCD7gCWxzv8vZVUK
// GET https://api.nasa.gov/planetary/apod

// copyright:
// date:
// explanation:
// astro:



export default function APODPic() {
    const [astro, setAstro] = useState([]);

    useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=PbNGveVUg0O5CjepfhL0Y2O3uCD7gCWxzv8vZVUK")
          .then(res => {
          setAstro(res.data);
          console.log(res.data);
        })
        .catch(_error => {
            console.log("ERROR")
    })
 }, []);

    return (
        <div className='container'>
            <APODCard hdurl={astro.hdurl} title={astro.title} copyright={astro.copyright} date={astro.date} explanation={astro.explanation}/>
        </div>
         
    );
}
    
    
    
