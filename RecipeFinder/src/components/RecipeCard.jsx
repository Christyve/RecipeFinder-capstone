import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function RecipeCard({ meal }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(meal.idMeal);

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-poppins font-semibold text-gray-900 line-clamp-2 mb-3">
          {meal.strMeal}
        </h3>

        {/* Buttons */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            to={`/recipe/${meal.idMeal}`}
            className="bg-primary text-white px-4 py-2 rounded-lg font-inter font-medium text-sm hover:bg-primary-dark transition"
          >
            VIEW RECIPE
          </Link>

          <button
            onClick={() => toggleFavorite(meal)}
            aria-label="Toggle favorite"
            className={`px-3 py-2 rounded-lg font-bold text-lg transition ${
              fav
                ? "bg-yellow-100 text-yellow-500 border border-yellow-300"
                : "bg-gray-100 text-gray-400 border border-gray-200"
            }`}
          >
            {fav ? "★" : "☆"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
