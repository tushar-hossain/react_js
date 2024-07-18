import { useEffect, useState } from "react";

import style from "./search.module.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.onhandleSearch(search);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.input}>
      <input type="text" value={search} onChange={handleSearch} placeholder="Search" />
    </div>
  );
};

export default Search;
