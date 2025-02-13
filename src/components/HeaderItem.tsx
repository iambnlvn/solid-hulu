import { A } from "@solidjs/router";
import { Component, Show } from "solid-js";

interface HeaderItemProps {
  Icon: any;
  title: string;
  href?: string;
}
//TODO!: refactor this component
const HeaderItem: Component<HeaderItemProps> = (props) => {
  return (
    <Show when={props.href} fallback={
      <div class="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
        <props.Icon class="h-8 group-hover:animate-bounce" />
        <p class="tracking-wider opacity-0 group-hover:opacity-100">
          {props.title}
        </p>
      </div>
    }>
    <A href={props.href!} class="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <props.Icon class="h-8 group-hover:animate-bounce" />
      <p class="tracking-wider opacity-0 group-hover:opacity-100">
        {props.title}
      </p>
    </A>
</Show>
  );
};

export default HeaderItem;
