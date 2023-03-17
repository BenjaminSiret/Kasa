export async function fetchAllAppartments() {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const appartments = await response.json();
  return appartments;
}
