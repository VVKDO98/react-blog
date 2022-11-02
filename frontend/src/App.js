import {Routes, Route} from "react-router-dom";

import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ArticleDetails from "./pages/ArticleDetails";
import Category from "./pages/Category";

function App() {
  return (
        <div className="App">
          <SiteHeader/>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/details/:id" element={<ArticleDetails/>}/>
            <Route path="/category/:id" element={<Category/>}/>
          </Routes>
        </div>
  );
}

export default App;
