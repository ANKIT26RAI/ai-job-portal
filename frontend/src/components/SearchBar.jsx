import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-8 flex items-center gap-4">

      <FaSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search jobs, companies..."
        className="w-full outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;