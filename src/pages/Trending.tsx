import { Meta, Title } from "@solidjs/meta";
import { createEffect, createResource, createSignal, For, onCleanup, Suspense } from "solid-js";
import { Response, Result } from "../../types/requests";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SkeletonThumbnail from "../components/SkeletonThumbnail";
import { trending } from "../constants/data";
import ErrorPage from "../components/ErrorPage";

const useTrendingMovies = () => {
  const [page, setPage] = createSignal(1);
  const [hasMore, setHasMore] = createSignal(true);

  const fetchMovies = async (page: number): Promise<Response> => {
    const url = `https://api.themoviedb.org/3${trending.url}&page=${page}`;
    // eslint-disable-next-line no-undef
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Response = await response.json();
    setHasMore(data.page < data.total_pages);
    return data;
  };

  const [results, { refetch }] = createResource<Response, number>(
    page,
    async (page) => {
      try {
        const data = await fetchMovies(page);

        if (page > 1 && results()?.results) {
          data.results = [...results()?.results as Result[], ...data.results];
        }
        return data;
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error("Failed to fetch movies:", error);
        throw error;
      }
    },
  );

  return {
    page,
    setPage,
    hasMore,
    setHasMore,
    results,
    refetch,
  };
};
export default function Trending() {
  const { setPage, hasMore, results, refetch } = useTrendingMovies();

  const handleScroll = () => {
    const bottom =
      // eslint-disable-next-line no-undef
      window.innerHeight + document.documentElement.scrollTop ===
      // eslint-disable-next-line no-undef
      document.documentElement.offsetHeight;
    if (bottom && hasMore()) {
      setPage((prev) => prev + 1);
      refetch();
    }
  };

  createEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => {
      // eslint-disable-next-line no-undef
      window.removeEventListener("scroll", handleScroll);
    });
  });
  return (
    <div>
      <Title>Solid Hulu - Trending Movies</Title>
      <Meta name="description" content="Solidjs hulu clone - Trending Movies" />
      <Meta
        name="keywords"
        content="Solidjs, Hulu, Clone, Movies, TV Shows, Trending"
      />
      <Meta property="og:image" content="../assets/hulu.png" />
      <Header />
      <Navbar />
      <Suspense
        fallback={
          <div class="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <For each={Array(6).fill(null)}>{() => <SkeletonThumbnail />}</For>
          </div>
        }
      >
        {results.error ? (
          <ErrorPage />
        ) : (
          <Container results={results()?.results} />
        )}
      </Suspense>
    </div>
  );
}
