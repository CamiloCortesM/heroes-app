import { useParams,Navigate } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { id } = useParams();

  const hero = getHeroeById(id);

if(!hero){
  return <Navigate to='/' />
}
  return (
    <div>
      <h1>HeroScreen</h1>
      <p>{hero.superhero}</p>
    </div>
  );
};
