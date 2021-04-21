const Filter = ({ value, onChange }) => (
  <label className={"form"}>
    Find contacts by name
    <input value={value} onChange={onChange} />
  </label>
);

export default Filter;
