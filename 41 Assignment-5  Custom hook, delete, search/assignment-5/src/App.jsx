import Search from "./component/Search";
import useFetch from "./component/useFetch";
import Users from "./component/Users";
import "./index.css";

function App() {
  const { data, isLoading, error, filterUser, setFilter } = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleDelete = (id) => {
    const filter = filterUser.filter((user) => user.id !== id);
    return setFilter(filter);
  };

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const filterSearch = filterUser.filter((searchItem) => {
      const item = searchItem.name.toLowerCase();
      return item.startsWith(searchValue);
    });
    setFilter(filterSearch);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", padding: "1rem" }}>Users Management App</h1>
      <Search onhandleSearch={handleSearch} />
      {isLoading && <h3>Loading... </h3>}
      {error && <h3>{error.message} </h3>}
      {data && <Users users={filterUser} onhandleDelete={handleDelete} />}
    </>
  );
}

export default App;
