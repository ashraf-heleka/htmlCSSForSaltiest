import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
// import { tsPropertySignature } from "@babel/types";


export default function StarWarsContent() {
const [content, setContent] = useState([])


  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(response => {
      console.log(response.data.results);
      setContent(response.data.results)
    })

    .catch(error => {
      console.log("the data was not returned", error)
    });
  }, [])

  return (
    <div className="film">
      {content.map((con, index) => {
        return (
          <StarWarsCard key={con.id} 
          name={con.name} 
          birth_year ={con.birth_year}
          gender ={con.gender}
          hair_color={con.hair_color}
          height={con.height}
          homeworld={con.homeworld}
          mass={con.mass}
          skin_color={con.skin_color}
          species={con.species}
          starships={con.starships}
          vehicles={con.vehicles}
          />
        )
      })}
    </div>
    )
}



