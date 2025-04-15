import { Alert } from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="alert alert-primary">
      <Alert>
        Hello World <span style={{ color: "Blue" }}>Johnny</span>
      </Alert>
      <Button color="danger" onClickHandler={() => console.log("Hello World")}>
        Hello
      </Button>
    </div>
  );
}

export default App;
