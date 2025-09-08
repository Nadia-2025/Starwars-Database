export const initialStore = () => ({
  characters: [],
  planets: [],
  vehicles: [],
  favorits: [],
});

export default function reducer(state, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...state, characters: action.payload };
    case "GET_PLANETS":
      return { ...state, planets: action.payload };
    case "GET_VEHICLES":
      return { ...state, vehicles: action.payload };
    default:
      return state;
  }
}
