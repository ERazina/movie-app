import { API_KEY, LANG, MOVIE_BASE_URL } from '@/app/constants';
import Image from "next/image";

interface MoviePageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movieUrl = `${MOVIE_BASE_URL}/${params.id}?api_key=${API_KEY}&language=${LANG}`;

  const fetchMovie = await fetch(movieUrl);
  const data = await fetchMovie.json();

  return (
    <main className="p-8 text-white bg-gray-900 min-h-screen">
      {data.title! && <h1>{data.title}</h1>}
      <Image
        src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
        alt={data.title}
        width={300}
        height={450}
        priority={true}
        className="rounded-t-lg"
      />

      {data.overview! && <div>{data.overview}</div>}
    </main>
  );
}
