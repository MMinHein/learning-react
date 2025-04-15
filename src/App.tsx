import { useState } from "react";
import { Alert } from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <Alert onClose={() => setShow(false)}>Johnny</Alert>}
      <Button color="danger" onClickHandler={() => setShow(true)}>
        Hello
      </Button>
    </div>
  );
}

export default App;
