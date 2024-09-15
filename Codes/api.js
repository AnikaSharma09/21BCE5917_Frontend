export async function fetchSearchResults(query, filters) {
  const response = await fetch(
    `/api/search?query=${query}&owner=${filters.owner}&lawFirm=${filters.lawFirm}&attorney=${filters.attorney}&status=${filters.status}`
  );
  return response.json();
}
