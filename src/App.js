import "./App.css";
import Header from "./components/mainList/header/Header";
import List from "./components/mainList/list/List";
import Adding from "./components/mainList/adding/Adding";

function App() {
  return (
    <div className="App">
      <Header />
      <Adding />
      <List />
    </div>
  );
}

export default App;
