import "./Button.scss";

function Button(props) {
  return (
    <button className={props.className}>
      <p className={`${props.className}-text`}>{props.text}</p>
    </button>
  );
}

export default Button;
