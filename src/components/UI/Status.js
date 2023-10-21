import classes from "./Status.module.css";

const Status = ({ value,Visibility }) => {
  let genre = " ";
  if (value < 30) {
    genre = "Bad Quality";
  } else if (value > 30 && value < 70) {
    genre = "Average";
  } else {
    genre = "Good Quality";
  }

  if(Visibility){
    genre = "Average"
  }

  return (
    <div className="d-flex">
      <p className={classes["p-first"]}>Status: </p>
      <p
        className={
          genre == "Bad Quality"
            ? `${classes["p-socend"]} ${classes["bad-quality"]}`
            : genre == "Average"
            ? `${classes["p-socend"]} ${classes["average"]}`
            : `${classes["p-socend"]} ${classes["good-quality"]}`
        }
      >
        {genre}
      </p>
    </div>
  );
};

export default Status;
