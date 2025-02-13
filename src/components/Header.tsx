import { Index } from "solid-js";
import logo from "../assets/hulu.png";
import { items } from "../constants/data";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header class="my-4 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div class="max-x-2xl mt-auto flex justify-evenly">
        <Index each={items}>
          {(item) => <HeaderItem {...item()} />}
        </Index>
      </div>
      <a href="/">
        <img
          class="h-20 object-contain"
          src={logo}
          width={200}
          loading="eager"
          alt="hulu logo"
        />
      </a>
    </header>
  );
}

export default Header;
