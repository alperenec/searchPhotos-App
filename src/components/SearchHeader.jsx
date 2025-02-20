import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  return (
    <div className="searchHeaderContainer">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ne Arıyorsunuz?"
        />
      </form>
    </div>
  );
}

export default SearchHeader;
