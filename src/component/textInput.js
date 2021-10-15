export const TextInput = (props) => {
  const setText = props.setText;
  const isQuotation = props.isQuotation || false;

  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        onChange={(event) => {
          if (isQuotation && event.target.value.length > 0) {
            setText('"' + event.target.value + '"');
          } else {
            setText(event.target.value);
          }
        }}
      />
      　
    </div>
  );
};
