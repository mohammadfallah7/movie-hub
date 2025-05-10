const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="Search" />

        <input
          type="search"
          placeholder="Seaech through thounsands of movies"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
