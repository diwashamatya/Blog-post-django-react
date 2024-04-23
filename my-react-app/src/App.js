import React from "react";
import BlogPostList from "./components/BlogPostList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogPostList />
    </div>
  );
}

export default App;
