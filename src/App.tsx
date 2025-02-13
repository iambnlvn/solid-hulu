import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import Home from "./pages/Home";
import Trending from "./pages/Trending";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/trending" component={Trending} />
    </Router>
  );
};
export default App;
