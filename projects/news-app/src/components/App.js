import React from "react";
import ArticleContainer from "./ArticleContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import About from "./About";
// import ReviewsContainer from "./ReviewsContainer";
import NavBar from "./NavBar"

function App() {
  return (
    <div>
    <Router>
      <div>
         <NavBar/>
      </div><br/><br/>
      
        <Routes>
          <Route exact path="/" element={<ArticleContainer/>}></Route>
          {/* <Route exact path="/about" element={<About/>}></Route> */}
          {/* <Route exact path="/comments" element={<ReviewsContainer/>}></Route> */}
        </Routes>
    </Router>
  </div>
  );
}

export default App;
