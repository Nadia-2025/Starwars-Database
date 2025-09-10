export const API_URL = "https://www.swapi.tech/api";

export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/people/`);
  if (!response.ok) throw new Error("Error fetching characters");
  const data = await response.json();
  return data.results;
};

export const getDetailedCharacter = async (uid) => {
  const response = await fetch(`${API_URL}/people/${uid}`);
  if (!response.ok) throw new Error("Error fetching character");
  const data = await response.json();
  return data.result;
};

export const getPlanets = async () => {
  const response = await fetch(`${API_URL}/planets/`);
  if (!response.ok) throw new Error("Error fetching planets");
  const data = await response.json();
  return data.results;
};

export const getDetailedPlanet = async (uid) => {
  const response = await fetch(`${API_URL}/planets/${uid}`);
  if (!response.ok) throw new Error("Error fetching planet");
  const data = await response.json();
  return data.result;
};

export const getVehicles = async () => {
  const response = await fetch(`${API_URL}/vehicles/`);
  if (!response.ok) throw new Error("Error fetching vehicles");
  const data = await response.json();
  return data.results;
};

export const getDetailedVehicle = async (uid) => {
  const response = await fetch(`${API_URL}/vehicles/${uid}`);
  if (!response.ok) throw new Error("Error fetching vehicle");
  const data = await response.json();
  return data.result;
};
