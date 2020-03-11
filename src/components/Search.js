import React from "react";
// import { Link } from "react-router-dom";

const people = [
  "Paved",
  "Bathrooms",
  "Snack Shop",
  "Gift Shop",
  "Educational Facilities",
  "Events",
  "Emergency Services"
];

export const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
    )
}