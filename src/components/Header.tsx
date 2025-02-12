import { Index } from "solid-js";
import logo from "../assets/hulu.png";
import { items } from "../constants/data";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header class="my-6 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div class="max-x-2xl flex justify-evenly">
        <Index each={items}>
          {(item) => <HeaderItem title={item().title} Icon={item().Icon} />}
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
