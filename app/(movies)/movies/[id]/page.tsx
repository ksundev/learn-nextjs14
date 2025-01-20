import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/movies/${id}`);
  return await response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/movies/${id}/videos`);
  console.log(response);
  return await response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start fetching");
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.vote_average}</p>
    </div>
  );
}
