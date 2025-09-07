import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="bg-bg min-h-screen px-6 py-10">
      {/* Header */}
      <div className="bg-primary text-white text-center py-4 rounded-md shadow-default mb-10">
        <h1 className="font-poppins text-3xl font-bold tracking-wide">
          FAVORITES
        </h1>
      </div>

      {/* Grid */}
      {favorites.length === 0 ? (
        <p className="text-center text-dark font-inter">
          No favorite recipes yet.
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} showRemove />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
