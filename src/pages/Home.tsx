import { useSearchParams } from "@solidjs/router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <Header />
      <Navbar />
      <h1>{searchParams.genre}</h1>
    </div>
  );
}
