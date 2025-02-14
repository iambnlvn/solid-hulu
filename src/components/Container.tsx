import { For } from "solid-js";
import type { Result } from "../../types/requests";
import Thumbnail from "./Thumbnail";
export default function Container(props: { results?: Result[] }) {
  return (
    <div class="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <For each={props.results}>{(res) => <Thumbnail result={res} />}</For>
    </div>
  );
}
