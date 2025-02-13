import { Component } from "solid-js";

interface HeaderItemProps {
  Icon: any;
  title: string;
}

const HeaderItem: Component<HeaderItemProps> = (props) => {
  return (
    <div class="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <props.Icon class="h-8 group-hover:animate-bounce" />
      <p class="tracking-wider opacity-0 group-hover:opacity-100">
        {props.title}
      </p>
    </div>
  );
};

export default HeaderItem;
