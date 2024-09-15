export default function ResultItem({ result }) {
  return (
    <div className="border p-4 mb-2">
      <h2 className="font-bold">{result.name}</h2>
      <p>Owner: {result.owner}</p>
      <p>Law Firm: {result.lawFirm}</p>
      <p>Attorney: {result.attorney}</p>
      <p>Status: {result.status}</p>
    </div>
  );
}
