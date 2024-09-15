export default function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Search for trademarks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
}
