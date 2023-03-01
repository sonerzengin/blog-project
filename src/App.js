import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import BlogContent from "./pages/BlogContent";
import Blogs from "./pages/Blogs";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Blogs />}></Route>
          <Route path="/blog/:id" element={<BlogContent />}></Route>
          <Route path="/addBlog" element={<AddBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
