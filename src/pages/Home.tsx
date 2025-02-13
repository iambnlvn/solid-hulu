import { useSearchParams } from "@solidjs/router";
import { createResource, For, Suspense } from "solid-js";
import { Response, Result } from "../../types/requests";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SkeletonThumbnail from "../components/SkeletonThumbnail";
import { requests } from "../constants/data";

type Genre = keyof typeof requests;

export default function Home() {
  const fetchMovies = async (genre: string): Promise<Response> => {
    const url = `https://api.themoviedb.org/3${requests[genre as Genre]?.url || requests.topRated.url}`;

    // eslint-disable-next-line no-undef
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  };
  const [searchParams] = useSearchParams();
  const [results] = createResource<Response, string, Genre>(
    () => (searchParams.genre as Genre) || "topRated",
    fetchMovies,
  );
  return (
    <div>
      <Header />
      <Navbar />
      <Suspense
        fallback={
          <div class="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <For each={Array(6).fill(null)}>{() => <SkeletonThumbnail />}</For>
          </div>
        }
      >
        <Container results={results() as unknown as Result[]} />
      </Suspense>
    </div>
  );
}
