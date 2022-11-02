import {Routes, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ArticleDetails from "./pages/ArticleDetails";
import Category from "./pages/Category";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader/>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/details/:id" element={<ArticleDetails/>}/>
            <Route path="/category/:id" element={<Category/>}/>
          </Routes>
        </div>
      </ApolloProvider>
  );
}

export default App;