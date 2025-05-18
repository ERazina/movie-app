import MovieCard from "@/components/MovieCard/MovieCard";
import { Movie } from "@/types";
import { API_KEY, MOVIE_BASE_URL, LANG } from "@/app/constants";
import ClientPagination from "@/components/Pagination/Pagination";

type Props = {
  searchParams: { page?: string };
};

export default async function Home ({searchParams}: Props) {
  const page = Number(searchParams.page || "1");
  const popularFilmsUrl = `${MOVIE_BASE_URL}/popular?api_key=${API_KEY}&language=${LANG}&page=${page}&pageSize=20`;
  const request = await fetch(popularFilmsUrl);
  const data = await request.json();

  if (data.results.length > 0) {
    console.log(data.results);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.results?.length > 0 &&
            data.results.map((movie: Movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        <ClientPagination total={500}/>
      </main>
    </div>
  );
}
