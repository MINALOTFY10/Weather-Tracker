import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { locationActions } from "../../store";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const LocationChosen = useSelector((state) => state.location.LocationChosen);

  const fetchData = (value) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => {
        const results = json
          .filter((name) =>
            name.name.common.toLowerCase().startsWith(value.toLowerCase())
          )
          .map((name) => name.name.common.toLowerCase());

        console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    if (value == "") {
      dispatch(locationActions.locationChosen());
    } else {
      dispatch(locationActions.searchLocation());
      setInput(value);
      fetchData(value);
    }
  };

  return (
    <div className="input-wrapper">
      <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
      <input
        placeholder="Search Places"
        value={LocationChosen ? "" : input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
