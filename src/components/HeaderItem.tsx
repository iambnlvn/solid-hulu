import { A, type AnchorProps } from "@solidjs/router";
import { Component, JSX } from "solid-js";

interface HeaderItemProps {
  Icon: Component<{ class?: string }>;
  title: string;
  href?: AnchorProps["href"];
}

// eslint-disable-next-line solid/no-destructure
const HeaderItem: Component<HeaderItemProps> = ({ Icon, title, href }) => {
  const Wrapper: Component<{ children: JSX.Element, class?: string, href?: string }> = (props) => href ? <A {...props} href={href} /> : <div {...props} />;

  return (
    <Wrapper
      {...(href ? { href } : {})}
      class="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20"
    >
      <Icon class="h-8 group-hover:animate-bounce" />
      <p class="tracking-wider opacity-0 group-hover:opacity-100">{title}</p>
    </Wrapper>
  );
};

export default HeaderItem;
