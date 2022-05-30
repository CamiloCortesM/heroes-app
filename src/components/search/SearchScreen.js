import React, { useMemo } from "react";
import queryString from 'query-string';
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../../selectors/getHeoresByName";
import HeroCard from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const heroesFileted = useMemo(()=>getHeroeByName(q),[q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  };
  return (
    <>
      <h1>Searchs</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="seach a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {
            (q==='')
           ? <div className="alert alert-info">Buscar un Heroe</div>
           : (heroesFileted.length===0) && <div className="alert alert-danger">no hay resultados: {q}</div>
          }

          {heroesFileted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
