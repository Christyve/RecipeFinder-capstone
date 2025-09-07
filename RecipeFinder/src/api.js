
const BASE = "https://www.themealdb.com/api/json/v1/1";

// 🔍 Search recipes by name
export async function searchRecipes(query) {
  try {
    const res = await fetch(`${BASE}/search.php?s=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("searchRecipes error", err);
    return [];
  }
}


export async function getRecipeById(id) {
  try {
    const res = await fetch(`${BASE}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch (err) {
    console.error("getRecipeById error", err);
    return null;
  }
}

// 🎲 Fetch multiple random recipes
export async function getRandomRecipes(count = 6) {
  try {
    const promises = Array.from({ length: count }, () =>
      fetch(`${BASE}/random.php`).then((r) => r.json())
    );
    const results = await Promise.all(promises);
    return results.map((r) => r.meals[0]);
  } catch (err) {
    console.error("getRandomRecipes error", err);
    return [];
  }
}


export function parseIngredients(meal) {
  if (!meal) return [];
  const items = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      items.push({
        ingredient: ingredient.trim(),
        measure: (measure || "").trim(),
      });
    }
  }

  return items;
}
