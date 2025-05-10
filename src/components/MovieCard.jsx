const MovieCard = ({
  movie: { title, original_language, poster_path, release_date, vote_average },
}) => {
  return (
    <li className="movie-card">
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-movie.png"}
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <div className="rating">
          <img src="/star.svg" alt="Star" />
          <p className="text-white">{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>
        <span>.</span>
        <p className="lang">{original_language}</p>
        <span>.</span>
        <p className="year">{release_date ? release_date.split("-")[0] : "N/A"}</p>
      </div>
    </li>
  );
};

export default MovieCard;
