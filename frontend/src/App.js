import { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const submit = (event) => 
  {
    event.preventDefault();
    const data = {
      name: searchField,
    };
    let fetchoption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
      fetch("http://localhost:3001/", fetchoption)
        .then((response) => response.json())
        .then((data) => setItems(data))
        .then((data) => console.log(data));
  
    setSearchField("");
  };

  return (
    <div className="App">
      <form className="example" action="action_page.php" onSubmit={submit}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      <div className="searcheddata">
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </div>
  );
}

export default App;
