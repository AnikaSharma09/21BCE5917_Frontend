import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ResultsList from '../components/ResultsList';
import StatusIndicator from '../components/StatusIndicator';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    owner: '',
    lawFirm: '',
    attorney: '',
    status: ''
  });
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('');

  const handleSearch = async () => {
    setStatus('Searching...');
    try {
      const response = await fetch(`/api/search?query=${searchQuery}&owner=${filters.owner}&lawFirm=${filters.lawFirm}&attorney=${filters.attorney}&status=${filters.status}`);
      const data = await response.json();
      if (data.length === 0) {
        setStatus('No Results Found');
      } else {
        setResults(data);
        setStatus('');
      }
    } catch (error) {
      setStatus('Error Occurred');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
      <Filters filters={filters} setFilters={setFilters} />
      <StatusIndicator status={status} />
      <ResultsList results={results} />
    </div>
  );
}
