import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatFavorite = favorite.some((item) => item.id === newFavorite.id);
    let newList = [...favorite];
    if (!repeatFavorite) {
      newList.push(newFavorite);
    } else {
      newList = favorite.filter((favorite) => favorite.id !== newFavorite.id);
    }
    return setFavorite(newList);
  }

  return {
    favorite, addFavorite
  };
}


export default FavoritesProvider;