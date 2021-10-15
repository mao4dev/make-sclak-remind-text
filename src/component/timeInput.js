export const TimeInput = (props) => {
  const setText = props.setTime;
  const prefix = props.prefix || "";

  return (
    <div>
      <label>{props.label}</label>
      <input
        type="time"
        onChange={(event) => {
          if (event.target.value.length > 0) {
            setText(prefix + event.target.value);
          } else {
            setText(event.target.value);
          }
        }}
      />
      　
    </div>
  );
};
