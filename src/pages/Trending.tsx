import { createResource } from "solid-js";
import { Response } from "../../types/requests";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { trending } from "../constants/data";

export default function Trending() {
  const fetchMovies = async (): Promise<Response> => {
    const url = `https://api.themoviedb.org/3${trending.url}`;

    // eslint-disable-next-line no-undef
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  };

  const [results] = createResource<Response, string>(
    () => "trending",
    fetchMovies,
  );
  return (
    <div>
      <Header />
      <Navbar isTrending />
      {results.loading ? <p>Loading...</p> : <Container results={results()} />}
    </div>
  );
}
