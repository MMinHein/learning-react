import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Seattle",
    "Chicago",
    "Boston",
  ];
  return (
    <div>
      <ListGroup items={items} header="Cities" />
    </div>
  );
}

export default App;
