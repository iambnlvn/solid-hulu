import { Component, Show } from "solid-js";

interface HeaderItemProps {
  Icon: any;
  title: string;
}
//TODO!: refactor this component
const HeaderItem: Component<HeaderItemProps> = (props) => {
  return (
    <div class="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <props.Icon class="h-8 group-hover:animate-bounce" />
      <Show when={props.title === "Trending"} fallback={
        <p class="tracking-wider opacity-0 group-hover:opacity-100">
        {props.title}
        </p>}>
        <a href="/trending"
          class="tracking-wider opacity-0 group-hover:opacity-100">
        {props.title}
      </a>
      </Show>

    </div>
  );
};

export default HeaderItem;
