import { ThumbsUp } from "lucide-solid";
import { Show } from "solid-js";
import { Result } from "../../types/requests";
const BASE_URL = "https://image.tmdb.org/t/p/original/";

export default function Thumbnail(props: { result: Result }) {
  return (
    <div class="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-20 sm:hover:scale-105">
      <img
        src={`${BASE_URL}${props.result.backdrop_path || props.result.poster_path}`}
        class="h-auto w-full"
        alt=""
      />
      <div class="p-2">
        <h2 class="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {props.result.title || props.result.original_name}
        </h2>
        <p class="max-w-md truncate">{props.result.overview}</p>
        <div class="flex">
          <p>{props.result.release_date || props.result.first_air_date}</p>
          <Show when={props.result.vote_count}>
            <p class="ml-2 flex items-center opacity-0 group-hover:opacity-100">
              {props.result.vote_count}
              <ThumbsUp class="mx-2 h-4" />
            </p>
          </Show>
        </div>
      </div>
    </div>
  );
}
