// src/pages/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipeById, parseIngredients } from "../api";

function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeal() {
      setLoading(true);
      const recipe = await getRecipeById(id);
      setMeal(recipe);
      setLoading(false);
    }
    loadMeal();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-lg text-gray-500">Loading recipe...</p>;
  }

  if (!meal) {
    return <p className="text-center mt-10 text-lg text-red-500">Recipe not found.</p>;
  }

  const ingredients = parseIngredients(meal);

  return (
    <section className="max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-lg">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-block text-sm font-medium px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          ← Back
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-6">
        {meal.strMeal}
      </h1>

      {/* Image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-xl shadow-md mb-8 max-h-[400px] object-cover"
      />

      {/* Ingredients */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
          Ingredients
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ingredients.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 font-inter"
            >
              <span className="font-medium">{item.ingredient}</span> —{" "}
              <span className="text-gray-500">{item.measure}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
          Instructions
        </h2>
        <p className="leading-relaxed font-inter text-gray-700 whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>

      {/* YouTube */}
      {meal.strYoutube && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
            Video Tutorial
          </h2>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-medium font-inter px-6 py-3 rounded-full shadow-md hover:bg-accent-dark transition"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      )}
    </section>
  );
}

export default RecipeDetails;
