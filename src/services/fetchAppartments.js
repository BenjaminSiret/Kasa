export async function fetchAppartments() {
  const response = await fetch('data/logements.json');
  const appartments = await response.json();
  return appartments;
}
