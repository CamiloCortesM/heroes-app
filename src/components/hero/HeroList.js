import { useMemo } from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

export const HeroList = ({ publisher = "marvel" }) => {
  const heroes = useMemo(()=>getHeroeByPublisher(publisher),[publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  );
};
