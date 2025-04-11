const Input = (props) => {
  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
