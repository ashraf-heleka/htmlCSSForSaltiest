import React from "react";
import {
  Card, CardImg, CardText, CardBody, 
  CardTitle
} from 'reactstrap';


const StarWarsCard = (props) => {
  return(
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Hair Color: {props.hair_color}</CardText>
          <CardText>Height in cm: {props.height}</CardText>
          <CardText>Homeworld: {props.homeworld}</CardText>
          
          <CardText>Mass in kg: {props.mass}</CardText>
          <CardText>Skin color: {props.skin_color}</CardText>
          <CardText>Species: {props.species}</CardText>
          <CardText>Starships: {props.starships}</CardText>
          <CardText>Vehicles: {props.vehicles}</CardText>

          {/* <CardImg className="image" src={props.imgURL} top width="100%" alt="Card image cap" /> */}

        </CardBody>
      </Card>
    </div>


  //  <div className="NASACard">
  //    <h2>Title: {props.title}</h2>
  //    <img className="NASAIMG" alt="random NASA" src={props.imgURL} />
  //     <p className="explanation"> Explanation: {props.explanation}</p>
  //     <p className="date">Date: {props.date}</p>
  //  </div>
  );
};

export default StarWarsCard;

