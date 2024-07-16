import { useEffect, useState } from "react";
import style from './search.module.css'

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" value={searchText} placeholder="Search" onChange={handleChange} className={style.search} />
    </div>
  );
};

export default Search;
