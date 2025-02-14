import { Meta, Title } from "@solidjs/meta";
import { useSearchParams } from "@solidjs/router";
import { createEffect, createResource, createSignal, For, onCleanup, Show, Suspense } from "solid-js";
import { Response, Result } from "../../types/requests";
import Container from "../components/Container";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SkeletonThumbnail from "../components/SkeletonThumbnail";
import { requests } from "../constants/data";
type Genre = keyof typeof requests;


const useMovieData = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = createSignal(1);
  const [hasMore, setHasMore] = createSignal(true);

  const fetchMovies = async (genre: string, page: number): Promise<Response> => {
    const url = `https://api.themoviedb.org/3${requests[genre as Genre]?.url || requests.topRated.url}&page=${page}`;
    // eslint-disable-next-line no-undef
    const response = await fetch(url);
    const data: Response = await response.json();
    setHasMore(data.page < data.total_pages);
    return data;
  };

  const [results, { refetch }] = createResource<Response, [string, number], string>(
    () => [(searchParams.genre as Genre) || "topRated", page()],
    async ([genre, page]) => {
      const data = await fetchMovies(genre, page);
      if (page > 1 && results()?.results) {
        data.results = [...results()?.results as Result[], ...data.results];
      }
      return data;
    },
  );

  return {
    results,
    page,
    setPage,
    hasMore,
    setHasMore,
    refetch,
    searchParams,
  };
};

export default function Home() {
  const { results, setPage, hasMore, refetch } = useMovieData();

  const handleScroll = () => {
    const bottom =
      // eslint-disable-next-line no-undef
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
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
      <Title>Solid Hulu</Title>
      <Meta name="description" content="Solidjs hulu clone for fun" />
      <Meta name="keywords" content="Solidjs, Hulu, Clone, Movies, TV Shows" />
      <Meta property="og:image" content="../assets/hulu.png" />
      <Header />
      <Navbar />
      {/* TODO!: enhance the ux, the skeleton should also enhanced for data fetched on scroll (2nd....page) */}
      <Suspense
        fallback={
          <div class="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <For each={Array(6).fill(null)}>{() => <SkeletonThumbnail />}</For>
          </div>
        }
      >
        <Show when={!results.error} fallback={<ErrorPage />}>
          <Container results={results()?.results} />
        </Show>
      </Suspense>
    </div>
  );
}
