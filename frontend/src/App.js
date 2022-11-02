import {Routes, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ArticleDetails from "./pages/ArticleDetails";
import Category from "./pages/Category";
import Menu from "./components/Menu";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
      <ApolloProvider client={client}>
        <div>
          <SiteHeader/>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/details/:id" element={<ArticleDetails/>}/>
            <Route path="/category/:id" element={<Category/>}/>
          </Routes>
          <Menu/>
        </div>
      </ApolloProvider>
  );
}

export default App;