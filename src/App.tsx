import Button from "./assets/components/Button";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";
import { useState } from "react";

function App() {
  let items = ["Punjab", "KPK", "Sindh", "Balotichistan"];
  let handleSelectedItem = (item: string) => {
    console.log(item);
  };
  let [alertVisibility, setAlertvisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />

      {alertVisibility && (
        <Alert onClose={() => setAlertvisibility(false)}>
          <span>Alert</span>
        </Alert>
      )}
      <Button color="danger" onClickButton={() => setAlertvisibility(true)}>
        Button
      </Button>
    </div>
  );
}

export default App;
