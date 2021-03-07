import Datas from "./Components/listitems";
import "./App.css";

function App() {
  const elements = [
    "position",
    "display",
    "border",
    "padding",
    "margin",
    "overflow",
    "background",
    "font",
    "text",
    "transform",
  ];
  const listItems = elements.map((elements) => (
    <li key={elements.id}>
      <input type="checkbox" />
      {elements}
    </li>
  ));

  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
