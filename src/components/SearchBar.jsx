const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search employee..."
      className="w-full md:w-80 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;