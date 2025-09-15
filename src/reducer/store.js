export const initialStore = () => ({
  characters: [],
  planets: [],
  vehicles: [],
  favorites: [],
});

export default function reducer(state, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...state, characters: action.payload };
    case "GET_PLANETS":
      return { ...state, planets: action.payload };
    case "GET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "ADD_FAVORITE":
      if (state.favorites.some((fav) => fav.uid === action.payload.uid))
        return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.uid !== action.payload),
      };
    default:
      return state;
  }
}
