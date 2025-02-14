import { MetaProvider } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import Trending from "./pages/Trending";

const App: Component = () => {
  return (
    <MetaProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="*" component={ErrorPage} />
      </Router>
    </MetaProvider>
  );
};
export default App;
