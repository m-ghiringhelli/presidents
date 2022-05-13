export async function fetchPresidents() {
  const response = await fetch('https://api.sampleapis.com/presidents/presidents');
  const data = await response.json();

  return data;
}