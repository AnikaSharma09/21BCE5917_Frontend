export default function Filters({ filters, setFilters }) {
  return (
    <div className="mb-4">
      <div>
        <label>Owner:</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={filters.owner}
          onChange={(e) => setFilters({ ...filters, owner: e.target.value })}
        />
      </div>
      <div>
        <label>Law Firm:</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={filters.lawFirm}
          onChange={(e) => setFilters({ ...filters, lawFirm: e.target.value })}
        />
      </div>
      <div>
        <label>Attorney:</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={filters.attorney}
          onChange={(e) => setFilters({ ...filters, attorney: e.target.value })}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        />
      </div>
    </div>
  );
}
