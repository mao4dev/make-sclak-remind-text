export const RepeatSelect = (props) => {
  const setSelected = props.setSelected;
  const handleChange = (e) => setSelected(e.target.value);
  const data = [
    { value: "", label: "--" },
    { value: "every day", label: "毎日" },
    { value: "every weekday", label: "毎日(平日)" },
    { value: "every Monday", label: "毎週月曜日" },
    { value: "every Tuesday", label: "毎週火曜日" },
    { value: "every Wednesday", label: "毎週水曜日" },
    { value: "every Thursday", label: "毎週木曜日" },
    { value: "every Friday", label: "毎週金曜日" }
  ];

  return (
    <div>
      <label>{props.label}</label>
      <select defaultValue="" onChange={handleChange}>
        {data.map((d) => (
          <option value={d.value}>{d.label}</option>
        ))}
      </select>
    </div>
  );
};
