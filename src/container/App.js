import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../layout/Layout";

import "./App.css";
import MainRouter from "./MainRouter";
function App() {
  return (
    <div>
      <Layout>
        <Router>
          <MainRouter />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
