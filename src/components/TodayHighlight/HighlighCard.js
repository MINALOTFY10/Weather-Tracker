import classes from "./HighlighCard.module.css";

const HighlighCard = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      <p className={classes.title}>{props.title}</p>
      {props.children}
    </section>
  );
};

export default HighlighCard;
