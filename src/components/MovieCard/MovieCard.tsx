import Image from "next/image";
import Link from "next/link";
import { MovieCardProps } from "@/types";

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="
        block rounded-lg shadow-md bg-gray-800 text-gray-100
        transition-transform transition-shadow duration-300
        hover:shadow-xl hover:scale-105 hover:-translate-y-2
        cursor-pointer
      "
    >
      <Image
        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        priority={true}
        className="rounded-t-lg"
      />
      <div className="text-white p-2">Рейтинг: {movie.popularity}</div>
      <div className="text-white ps-2 pb-2">{movie.original_title}</div>
    </Link>
  );
}
