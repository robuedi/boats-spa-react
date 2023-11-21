import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from "./pages/Home"
import Boat from "./pages/Boat"
import Main from "./layout/Main"

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_API}`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Main
          content={
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="boats/:id" element={<Boat />} />
            </Routes>
          }
        />
      </ApolloProvider>
    </Router>
  );
}

export default App;
