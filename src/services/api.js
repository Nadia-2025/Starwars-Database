export const API_URL = "https://www.swapi.tech/api";

export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/people/`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("error: ", response.status, response.statusText);
    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};

// export const getPlanets = async () => {
//   const response = await fetch(`${API_URL}/planets`);
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     console.log("error: ", response.status, response.statusText);
//     return {
//       error: { status: response.status, statusText: response.statusText },
//     };
//   }
// };

// export const getVehicles = async () => {
//   const response = await fetch(`${API_URL}/vehicles`);
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     console.log("error: ", response.status, response.statusText);
//     return {
//       error: { status: response.status, statusText: response.statusText },
//     };
//   }
// };
