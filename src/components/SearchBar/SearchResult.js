import "./SearchResult.css";
import { useDispatch } from "react-redux";
import { locationActions } from "../../store";

export const SearchResult = ({ result }) => {
  const dispatch = useDispatch();


  const onClickCountryHandler = () => {
    dispatch(locationActions.chnageLocation(result))
    // alert(`You selected ${result}!`)
  }


  return (
    <div
      className="search-result"
      onClick={onClickCountryHandler}
    >
      {result}
    </div>
  );
};