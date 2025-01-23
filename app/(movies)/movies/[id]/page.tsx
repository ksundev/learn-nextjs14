import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { IParams } from "../../../../types/types";

export async function generateMetadata({ params }: { params: IParams }) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: { params: IParams }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
