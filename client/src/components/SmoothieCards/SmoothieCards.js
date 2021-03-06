//Terra Claycamp
//Purpose:retrieves all the smoothies on the server and maps all the smoothieCards
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { useState, useEffect } from "react";
import "./SmoothieCards.css";
import SmoothieCard from "../SmoothieCard/SmoothieCard";
import { getSmoothies } from "../../services/smoothies";

const SmoothieCards = () => {
  const [smoothies, setSmoothies] = useState([]);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const allSmoothies = await getSmoothies();
      setSmoothies(allSmoothies);
    };
    fetchSmoothies();
  }, []);

  const CARDS = smoothies
    .reverse()
    .map((smoothie, index) =>
      index < 8 ? (
        <SmoothieCard
          _id={smoothie._id}
          name={smoothie.name}
          imageURL={smoothie.imgURL}
          key={index}
        />
      ) : null
    );

  return (
    <div className="smoothie-cards">
      <div className="latest">LATEST</div>
      <div className="cards">{CARDS}</div>
    </div>
  );
};

export default SmoothieCards;
