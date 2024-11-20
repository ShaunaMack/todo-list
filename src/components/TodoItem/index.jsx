function TodoItem(props) {
  // use destructuring to get access to things passed in through props
  // this is instead of using props.text where we want to have the text shown:x
  const { text } = props;

  return <div>{text}</div>;
}

export default TodoItem;
