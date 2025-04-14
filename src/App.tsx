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

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        header="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
