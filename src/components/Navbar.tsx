import { useNavigate } from "@solidjs/router";
import { For, Show } from "solid-js";
import { requests } from "../constants/data";

export default function Navbar(props: { isTrending?: boolean }) {
  const navigate = useNavigate();
  return (
    <nav class="relative">
      <Show
        when={!props.isTrending}
        fallback={
          <div class="no-scrollbar flex w-full items-center justify-center">
            <h2 class="text-4xl">Trending</h2>
          </div>
        }
      >
        <div class="no-scrollbar flex space-x-6 overflow-x-scroll overflow-y-hidden py-2 text-2xl whitespace-nowrap sm:px-6">
          <For each={Object.entries(requests)}>
            {([key, { title }]) => (
              <h2
                onClick={() => navigate(`/?genre=${key}`)}
                class="transform cursor-pointer text-white transition duration-100 first:pl-6 last:pr-6 hover:scale-110 active:text-red-500 md:first:pl-0 md:last:pr-0"
              >
                {title}
              </h2>
            )}
          </For>
        </div>
      </Show>

      <div class="absolute top-0 right-0 h-10 w-4 bg-gradient-to-l from-[#06202A]" />
      <div class="absolute top-0 left-0 h-10 w-4 bg-gradient-to-r from-[#06202A]" />
    </nav>
  );
}
