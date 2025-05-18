import { API_KEY, LANG, MOVIE_BASE_URL } from "@/app/constants";
import Image from "next/image";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: MoviePageProps) {

  const { id } = await params;
  const movieUrl = `${MOVIE_BASE_URL}/${id}?api_key=${API_KEY}&language=${LANG}`;

  const fetchMovie = await fetch(movieUrl);
  const data = await fetchMovie.json();

  console.log(data)

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
      {/* <div className="text-white ps-2 pb-2">{}</div> */}
    </main>
  );
}
