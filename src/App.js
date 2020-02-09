import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Search from "./components/pages/Search";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";

function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
        {/* <Wraper> */}
          <Route exact path="/" component={About}/>
          <Route exact path="/discover" component={Discover}/>
          <Route path="/search" component={Search}/>
        {/* </Wraper> */}
      </div>
    </Router>

  );
}

export default App;
