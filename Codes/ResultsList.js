import ResultItem from './ResultItem';

export default function ResultsList({ results }) {
  return (
    <div>
      {results.length === 0 ? (
        <p>No results to display</p>
      ) : (
        results.map((result) => <ResultItem key={result.id} result={result} />)
      )}
    </div>
  );
}
