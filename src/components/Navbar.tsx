import { useNavigate } from "@solidjs/router";
import { For } from "solid-js";
import { requests } from "../constants/data";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav class="relative">
      <div class="no-scrollbar flex gap-x-2 overflow-x-scroll overflow-y-hidden p-10 text-2xl whitespace-nowrap sm:space-x-20 sm:px-20">
        <For each={Object.entries(requests)}>
          {([key, { title }]) => (
            <h2
              onClick={() => navigate(`/?genre=${key}`)}
              class="transform cursor-pointer text-white transition duration-100 first:pl-4 last:pr-4 hover:scale-110 active:text-red-500"
            >
              {title}
            </h2>
          )}
        </For>
      </div>
      <div class="from [#06202A] absolute top-0 right-0 h-10 w-4 bg-gradient-to-l" />
      <div class="from [#06202A] absolute top-0 left-0 h-10 w-4 bg-gradient-to-r" />
    </nav>
  );
}
