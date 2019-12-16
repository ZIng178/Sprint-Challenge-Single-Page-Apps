import React  from "react";

export default function SearchForm({handleSubmit, placeholder, handleChange}) {
 
  return (
    <section className="search-form">
    <form onSubmit={handleSubmit}>
    <label htmlFor= 'search'>
      Search
    </label>
    <input
    name= "search" 
    type= "search"
    placeholder={placeholder}
    onChange={handleChange}
    />
    <button type="submit">Submit Info</button>
     </form>
    
    </section>
  );
}
