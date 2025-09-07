// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeGrid from "../components/RecipeGrid";
import { searchRecipes, getRandomRecipes } from "../api";

function Home() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load some random recipes on first render
  useEffect(() => {
    (async () => {
      setLoading(true);
      const randomMeals = await getRandomRecipes(6);
      setMeals(randomMeals);
      setLoading(false);
    })();
  }, []);

  // Handle search from SearchBar
  async function handleSearch(query) {
    if (!query) return;
    setLoading(true);
    const results = await searchRecipes(query);
    setMeals(results);
    setLoading(false);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="text-center mt-8">Loading…</p>
      ) : (
        <RecipeGrid meals={meals} />
      )}
    </div>
  );
}

export default Home;
