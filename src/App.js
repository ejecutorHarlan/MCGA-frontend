//import './App.css';
//import { useState } from 'react';
//import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Products from './screens/Products';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />

        {/* <div className='App'>
          <Form />
        </div> */}
      </Routes>
    </Layout>
  );
};

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
