import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;

  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dish, setdish] = useState("");
  const [cuisine, setcuisine] = useState("");
  const [rating, setrating] = useState("");
  const [calories, setcalories] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`http://localhost:8080/RecipeBackend/api/recipes?page=${currentPage}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);
        setHasNextPage(data.length >= recipesPerPage);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setRecipes([]);
        setFilteredRecipes([]);
        setHasNextPage(false);
        setError("Unable to load recipes right now.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) => {
      return (
        (dish === "" ||
          recipe.title?.toLowerCase().includes(dish.toLowerCase())) &&
        (cuisine === "" ||
          recipe.cuisine?.toLowerCase().includes(cuisine.toLowerCase())) &&
        (rating === "" || recipe.rating >= parseFloat(rating)) &&
        (calories === "" || recipe.calories <= parseInt(calories, 10))
      );
    });

    setFilteredRecipes(filtered);
  };

  const handleNext = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="content">
      <h1 className="title">Recipe Finder</h1>

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search by dish"
          value={dish}
          onChange={(e) => setdish(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search by cuisine"
          value={cuisine}
          onChange={(e) => setcuisine(e.target.value)}
        />

        <select value={rating} onChange={(e) => setrating(e.target.value)}>
          <option value="">Min Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>

        <input
          type="number"
          placeholder="Max calories"
          value={calories}
          onChange={(e) => setcalories(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="status-message">{error}</p>}
      {loading && <p className="status-message">Loading recipes...</p>}

      {!loading && (
        <div className="recipe-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <div className="card-image-wrap">
                  <img
                    src={
                      recipe.image ||
                      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
                    }
                    alt={recipe.title}
                    className="recipe-image"
                  />
                </div>

                <div className="card-topline">
                  <span className="card-chip">{recipe.cuisine}</span>
                  <span className="card-score">{recipe.rating} Rating</span>
                </div>

                <h2>{recipe.title}</h2>
                <p>Calories: {recipe.calories}</p>
              </div>
            ))
          ) : (
            <p className="status-message">No recipes found for these filters.</p>
          )}
        </div>
      )}

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>

        <span>Page {currentPage}</span>

        <button onClick={handleNext} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
