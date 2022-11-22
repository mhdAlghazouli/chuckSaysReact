import {useState, useEffect} from "react"
import ChuckSays from "./components/ChuckSays";
import './App.css';

function App() {
  const [quoteData, setQuoteData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => setQuoteData(data))
  },[refresh]);
  
  function handleClick() {
    setRefresh(!refresh)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random CHUCK NORRIS Quotes</h1>
      </header>
      <button onClick={handleClick}>click me</button>
        <ChuckSays quoteData={quoteData.value}/>
        
    </div>
  );
}

export default App;
