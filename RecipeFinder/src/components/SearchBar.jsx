import React, { useState } from "react";

function SearchBar({ onSearch, initial = "" }) {
  const [q, setQ] = useState(initial);

  function onSubmit(e) {
    e?.preventDefault();
    onSearch(q.trim());
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex justify-center">
      <div className="w-full max-w-md">
        <div className="flex items-center bg-primary text-white rounded-2xl shadow-default px-4 py-2">
          <input
            className="flex-1 bg-transparent outline-none px-2 py-1 font-inter placeholder-white text-sm"
            placeholder="Search recipes..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button
            type="submit"
            className="ml-3 bg-white text-primary font-medium px-4 py-2 rounded-full shadow-default hover:opacity-90 transition"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
