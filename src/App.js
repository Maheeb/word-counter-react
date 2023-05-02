import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import Counter from "./Component/Counter";
import Navigation from "./Component/Navigation";

function App() {
  const [searchString, setSearchString] = useState('hi');
  return (
      <div className="App">
        <Navigation />
        <Counter />
      </div>
  );
}

export default App;
