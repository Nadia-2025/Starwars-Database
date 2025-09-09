export const API_URL = "https://www.swapi.tech/api";

export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/people/`);
  if (response.ok) {
    const data = await response.json();
    const results = data.results;

    const detailedCharacters = await Promise.all(
      results.map(async (character) => {
        const res = await fetch(character.url);

        if (res.ok) {
          const detailedData = await res.json();
          return detailedData.result;
        } else {
          return { uid: character.uid, error: true };
        }
      })
    );
    return { results: detailedCharacters };
  } else {
    console.log("error: ", response.status, response.statusText);
    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};

export const getPlanets = async () => {
  const response = await fetch(`${API_URL}/planets/`);
  if (response.ok) {
    const data = await response.json();
    const results = data.results;

    const detailedPlanets = await Promise.all(
      results.map(async (planet) => {
        const res = await fetch(planet.url);

        if (res.ok) {
          const detailedData = await res.json();
          return detailedData.result;
        } else {
          return { uid: planet.uid, error: true };
        }
      })
    );
    return { results: detailedPlanets };
  } else {
    console.log("error: ", response.status, response.statusText);
    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};

export const getVehicles = async () => {
  const response = await fetch(`${API_URL}/vehicles/`);
  if (response.ok) {
    const data = await response.json();
    const results = data.results;

    const detailedVehicles = await Promise.all(
      results.map(async (vehicle) => {
        const res = await fetch(vehicle.url);

        if (res.ok) {
          const detailedData = await res.json();
          return detailedData.result;
        } else {
          return { uid: vehicle.uid, error: true };
        }
      })
    );
    return { results: detailedVehicles };
  } else {
    console.log("error: ", response.status, response.statusText);
    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};
