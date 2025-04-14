import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="alert alert-primary">
      <Alert>
        Hello World <span style={{ color: "Blue" }}>Johnny</span>
      </Alert>
    </div>
  );
}

export default App;
