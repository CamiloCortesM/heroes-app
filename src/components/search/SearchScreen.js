import React from "react";
import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {

  const [values,handleInputChange]= useForm({
    searchText:'',
  })

  const {searchText} = values;

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(searchText)
  }
  return (
    <>
      <h1>Searchs</h1>
      <hr />

      <div className="row">
        <div className="col-5">
            <h4>Search</h4>
            <hr />

            <form  onSubmit={handleSubmit}>
            <input type="text"
            placeholder="seach a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}/>

            <button
            className="btn btn-outline-primary mt-1"
            type="submit"
            >
              Buscar...
            </button>

            </form>
        </div>
      </div>
    </>
  );
};
