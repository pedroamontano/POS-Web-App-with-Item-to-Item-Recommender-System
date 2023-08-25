function Button(props) {
  return (
    <button className={props.className}>
      <p>{props.text}</p>
    </button>
  );
}

export default Button;
