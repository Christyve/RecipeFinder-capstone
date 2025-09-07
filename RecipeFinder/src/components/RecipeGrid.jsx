import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeGrid({ meals }) {
  if (!meals || meals.length === 0) {
    return <p className="text-center text-muted mt-6">No recipes to show.</p>;
  }

  // 🔹 Remove duplicate meals by idMeal
  const uniqueMeals = Array.from(
    new Map(meals.map(m => [m.idMeal, m])).values()
  );

  return (
    <section className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 justify-center">
      {uniqueMeals.map(m => (
        <RecipeCard key={m.idMeal} meal={m} />
      ))}
    </section>
  );
}

export default RecipeGrid;
