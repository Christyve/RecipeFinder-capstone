import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Add recipe to favorites
  const addFavorite = (recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  // Remove recipe from favorites
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  // ✅ Check if a recipe is already in favorites
  const isFavorite = (id) => {
    return favorites.some((recipe) => recipe.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook for easy access
export function useFavorites() {
  return useContext(FavoritesContext);
}
