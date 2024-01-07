export const Filter = ({ changeFilter, title }) => {
  return (
    <div>
      <p>{title}</p>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        onChange={changeFilter}
      />
    </div>
  );
};
