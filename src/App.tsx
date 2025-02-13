import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import { MetaProvider } from "@solidjs/meta";

const App: Component = () => {
  return (
    <MetaProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/trending" component={Trending} />
      </Router>
    </MetaProvider>
  );
};
export default App;
