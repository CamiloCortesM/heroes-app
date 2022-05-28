import { getHeroeByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroList = ({ publisher = "marvel" }) => {
  const heroes = getHeroeByPublisher(publisher);
  return (
    <>
      <ul>
          {
              heroes.map(hero => (
                  <li key={hero.id}>{hero.superhero}</li>
              ))
          }
      </ul>
    </>
  );
};
