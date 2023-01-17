import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtoms";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        sizes="
              (max-width: 1200px) 50vw,
              33vw"
        alt={movie?.title || movie?.name || movie?.original_name}
      />
    </div>
  );
}

export default Thumbnail;
