// Generos.jsx

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchByGenre, fetchGenres, fetchMoviesByTitle } from 'services/api';
import MovieItem from '../MovieItem/MovieItem';
import { HomeContainer, SectionContainer, Carousel, Title } from '../Home/Home.styled';
import SearchBar from '../SearchBar/SearchBar'; // Importa el nuevo componente

export const Generos = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');
  const [genres, setGenres] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRefs = useRef([]);

  const handleDragStart = (event, carouselRef) => {
    event.preventDefault();
    const startX = event.pageX || event.touches[0].pageX;
    const scrollLeft = carouselRef.scrollLeft;

    const handleDragMove = (event) => {
      const x = event.pageX || event.touches[0].pageX;
      const walk = (x - startX) * 2;
      carouselRef.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };

    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('touchmove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
  };


  const removeAccents = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  useEffect(() => {
    fetchGenres().then((genres) => {
      setGenres(genres);
    });
  }, []);

  useEffect(() => {
    if (!search || searchQuery.length === 0) {
      setGenreMovies([]);
      return;
    }
    const normalizedSearch = removeAccents(search.toLowerCase());
    const genre = genres.find((genre) => removeAccents(genre.name.toLowerCase()) === normalizedSearch);
    if (genre) {
      fetchSearchByGenre(genre.id).then(setSearchMovies);
    } else {
      setSearchMovies([]);
    }
  }, [search, genres, searchQuery]);

  useEffect(() => {
    if (genres.length === 0) {
      return;
    }

    const fetchGenreMovies = async () => {
      const genreMoviesData = await Promise.all(
        genres.map(async (genre) => {
          const movies = await fetchSearchByGenre(genre.id);
          return { genreId: genre.id, movies };
        })
      );

      setGenreMovies(genreMoviesData);
    };

    fetchGenreMovies();
  }, [genres]);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setSearchParams({ query: value });
  };

  const setCarouselRef = (index, ref) => {
    carouselRefs.current[index] = ref;
  };

  return (
    <HomeContainer>
      {/* Utiliza el nuevo componente SearchBar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Buscar géneros de peliculas"
        onSearch={handleSearch}
      />

      {searchMovies.length > 0 ? (
        <SectionContainer>
          <Title>Resultados de búsqueda</Title>
          <Carousel
            ref={(ref) => setCarouselRef(0, ref)}
            onDragStart={(event) => handleDragStart(event, carouselRefs.current[0])}
          >
            {searchMovies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} showTitle={false} />
            ))}
          </Carousel>
        </SectionContainer>
      ) : (
        genreMovies.map(({ genreId, movies }, index) => (
          <SectionContainer key={genreId}>
            <Title>{genres.find((genre) => genre.id === genreId)?.name}</Title>
            <Carousel
              ref={(ref) => setCarouselRef(index + 1, ref)}
              onDragStart={(event) => handleDragStart(event, carouselRefs.current[index + 1])}
            >
              {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} showTitle={false} />
              ))}
            </Carousel>
          </SectionContainer>
        ))
      )}
    </HomeContainer>
  );
};
