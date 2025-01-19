"use client";

import { useEffect, useState } from "react";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev";

export default function Page() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    const response = await fetch(`${API_URL}/movies`);
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? `Loading...` :JSON.stringify(movies)}
    </div>
  );
}
