import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import { useSelector } from "react-redux";

export const SearchResultsList = ({ results }) => {
  const LocationChosen = useSelector((state) => state.location.LocationChosen);

  return (
    <div className="results-list">
      {LocationChosen ? "" : results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};