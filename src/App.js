import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllMovies from "./pages/AllMovies";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMovies/>}>
        </Route>
        <Route path='/detail/:id' element={<Detail/>}>
        </Route>
        <Route path='/favorites' element={<Favorites/>}>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
