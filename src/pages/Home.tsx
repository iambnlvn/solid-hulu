import { useSearchParams } from "@solidjs/router";
import { createResource } from "solid-js";
import { Response } from "../../types/requests";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { requests, trending } from "../constants/data";

type Genre = keyof typeof requests;

export default function Home() {
  const fetchMovies = async (genre: string): Promise<Response> => {
    const url = `https://api.themoviedb.org/3${requests[genre as Genre]?.url || trending.url}`;

    // eslint-disable-next-line no-undef
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  };
  const [searchParams] = useSearchParams();
  const [results] = createResource<Response, string, Genre>(
    () => (searchParams.genre as Genre) || "trending",
    fetchMovies,
  );
  return (
    <div>
      <Header />
      <Navbar />
      {results.loading ? <p>Loading...</p> : <Container results={results()} />}
    </div>
  );
}
