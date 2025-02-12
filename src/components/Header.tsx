import { Index } from "solid-js";
import logo from "../assets/hulu.png";
import HeaderItem from "./HeaderItem";
import { items } from "../constants/data"

function Header() {
  return (
    <header class="my-6 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div class="max-x-2xl flex justify-evenly">
        <Index each={items}>
          {(item) => <HeaderItem title={item().title} Icon={item().Icon} />}
        </Index>
      </div>
      <img
        class="object-contain"
        src={logo}
        width={200}
        height={100}
        loading="eager"
      />
    </header>
  );
}

export default Header;
